import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    crimeDetails: {
        type: String,
        required: true,
    },
    evidences: [
        {
            type: String,
            required: true,
        },
    ],
    suspect:{
        type: String
    },
    incidentDate:{
        type: Date
    },
    caseStatus:{
        type: String,
        default: 'Active'
    },
    
},{ timestamps: true});

const Case = new mongoose.model("Case", caseSchema);

export default Case;