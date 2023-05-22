const mongoose = require('mongoose');

const formDetailsSchema = new mongoose.Schema({
    userFirstName: {
        type: String,
        required: true
    },
    userLastName: {
        type: String,
        required: true
    },
    userDOB: {
        type: Date,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userMobileNum: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userConfirmPassco: {
        type: String,
        required: true
    }, userPhoto: {
        type: String, // Change the type to store the file path or URL
        required: true,
    },
    userSignature: {
        type: String, // Change the type to store the file path or URL
        required: true
    }
});

const FormDetails = mongoose.model('FormDetails', formDetailsSchema);

module.exports = FormDetails;
