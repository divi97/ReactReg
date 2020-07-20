const mongoose = require('./connection');

const employeeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    phonenumber: {
        type: Number,
        required: true
    },
    currentaddress: {
        type: String,
        required: true
    },
    permanentaddress: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    edu_details: [{
        course: {
            type: String,
            required: true
        }
    }, {
        institution: {
            type: String,
            required: true
        }
    }, {
        year: {
            type: String,
            required: true
        }
    }, {
        percentage: {
            type: String,
            required: true
        }
    }],
    prof_details: [{
        companyname: {
            type: String,
            required: true
        }
    }, {
        from: {
            type: Date,
            required: true,
            default: null
        }
    }, {
        to: {
            type: Date,
            required: true,
            default: null
        }
    }],
    linkedin: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    hobbies: {
        type: String
    }
});

const employeeModel = mongoose.model("Employee", employeeSchema);
module.exports = employeeModel