const mongoose = require('./connection');

const employeeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    firstname: {
        type: String,
        default:null
    },
    lastname: {
        type: String,
        default:null
    },
    email: {
        type: String,
        default:null,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    phonenumber: {
        type: Number,
        default:null
    },
    currentaddress: {
        type: String,
        default:null
    },
    permanentaddress: {
        type: String,
        default:null
    },
    photo: {
        type: String
    },
    edu_details: [{
        course: {
            type: String,
            default:null
        }
    }, {
        institution: {
            type: String,
            default:null
        }
    }, {
        year: {
            type: String,
            default:null
        }
    }, {
        percentage: {
            type: String,
            default:null
        }
    }],
    prof_details: [{
        companyname: {
            type: String,
            default:null
        }
    }, {
        from: {
            type: String,
            default:null,
            default: null
        }
    }, {
        to: {
            type: String,
            default:null,
            default: null
        }
    }],
    linkedin: {
        type: String,
        default:null
    },
    github: {
        type: String,
        default:null
    },
    facebook: {
        type: String,
        default:null
    },
    hobbies: {
        type: String
    }
});

const employeeModel = mongoose.model("Employee", employeeSchema);
module.exports = employeeModel