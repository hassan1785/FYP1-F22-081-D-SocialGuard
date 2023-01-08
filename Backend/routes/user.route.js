import express from 'express';
import authController from "../controllers/authController.js"
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname))
    }
})
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })


const router = express.Router();
router.post('/adminRegister', authController.registerAdmin)
router.post('/login', authController.userLogin)
router.post('/register', authController.addUser)
router.get("/isUserAuth", authController.verifyToken)
router.post("/uploadCase", upload.array('evidence', 2), authController.addCase)
router.get("/getCases", authController.getCases)
router.get("/getCase/:id", authController.getCaseByUser)
router.get("/getUsers", authController.getUser)
router.post("/delCase", authController.delCase)
router.post("/delUser", authController.delUser)
router.get("/getallCases", authController.getAllCases)
router.post("/complain", authController.complain)


export default router