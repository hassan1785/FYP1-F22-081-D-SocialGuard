import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import Case from '../models/Case.js'
import jwt from 'jsonwebtoken'

import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
    cloud_name: 'dxsidbk46',
    api_key: '892117492637142',
    api_secret: 'dMmj4BHWLuU7AOCmf3ux9xSnayk'
})

async function upload(file) {
    try {
        const f = await cloudinary.v2.uploader.upload(file)
        return f.secure_url
    }
    catch (err) {
        console.log(err)
        return null;
    }

}




const userLogin = (req, res) => {

    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            const validPass = bcrypt.compare(password, user.password)
            if (validPass) {

                const token = jwt.sign({ email: user.email }, 'hello123')
                console.log(token);
                res.send({ message: 'login success', user: user, token: token })
                //res.redirect('/welcome')

            }
            else {
                res.send({ message: 'password not match' })
            }
        } else {
            res.send({ message: 'You are not registered' })
        }
    })


}
const registerAdmin = (req, res) => {
    const { fname, lname, cnic, email, password } = req.body
    const hashPassword = bcrypt.hashSync(password, 10)

    const user = new User({
        fname: fname,
        lname: lname,
        cnic: cnic,
        role: "Admin",
        email: email,
        password: hashPassword
    })
    user.save(err => {
        if (err) {

            res.send(err)
        } else {
            res.send({ message: 'successfully registered, please login now' })
        }
    })
}

const addUser = (req, res) => {

    const { fname, lname, dob, cnic, gender, address, phone, email, password } = req.body



    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: 'already exists' })
        } else {
            const hashPassword = bcrypt.hashSync(password, 10)


            const user = new User({
                fname,
                lname,
                dob,
                gender,
                email,
                password: hashPassword,
                cnic,
                address,
                phone
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: 'successfuly registered, please login now' })
                }
            })

        }
    })

    console.log(req.body)



}

const verifyToken = (req, res, next) => {

    const token = req.headers["x-access-token"]
    if (token) {
        jwt.verify(token, 'hello123', (err, decoded) => {
            if (err) {
                res.json({ isLoggedin: false, message: 'error in token' })
            } else {
                return res.json({ isLoggedIn: true })
            }
        })

    } else {
        res.json({ message: 'error', isLoggedin: false })
    }

}

const addCase = async (req, res) => {
    try {
        console.log("hello")
        let multiple = async (path) => await upload(path)

        const { userId, crimeDetails, suspect, incidentDate } = req.body
        console.log(req.body)
        const paths = []
        for (let i = 0; i < req.files.length; i++) {
            const path = req.files[i].path
            const newPath = await multiple(path)
            if (newPath) {
                paths.push(newPath)
            }
            else {
                res.send({ message: 'something went wrong' })
            }

        }
        const case1 = new Case({
            userId: userId,
            crimeDetails: crimeDetails,
            evidences: paths,
            suspect: suspect,
            incidentDate: incidentDate
        })

        case1.save(err => {
            if (err) {
                res.send(err)
            } else {
                res.send({ message: 'case added' })
            }
        })


    }
    catch (err) {
        console.log(err)
        res.send({ message: 'something went wrong' })
    }
}

const getAllCases = (req, res) => {
    Case.find({}, (err, cases) => {

        if (err) {
            res.send(err)
        } else {
            res.send(cases)
        }
    })

}

const getCases = (req, res) => {
    Case.find({ caseStatus: 'Active' }, (err, cases) => {

        if (err) {
            res.send(err)
        } else {
            res.send(cases)
        }
    })

}

const getCaseByUser = (req, res) => {
    const { userId } = req.body
    Case.find({ userId: userId }, (err, cases) => {

        if (err) {
            res.send(err)
        }
        else {
            res.send(cases)
        }
    })
}

const getUser = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(users)
        }
    })
}

const delCase = (req, res) => {
    const caseId = req.body
    Case.updateOne(caseId, { $set: { "caseStatus": "Discarded" } })
        .then(() => {
            res.sendStatus(200)
        }
        );

}

const delUser = (req, res) => {
    const userId = req.body
    User.deleteOne(userId, (err) => {

        if (err) {
            res.send(err)
        }
        else {
            res.sendStatus(200);
        }
    })
}


const complain = (req, res) => {

    const complain = req.body
    console.log(complain)

}

export default { getAllCases, delUser, delCase, userLogin, addUser, verifyToken, addCase, getCases, getCaseByUser, getUser, registerAdmin, complain }