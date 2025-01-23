import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        }
    ],
    role: {
        type: String,
        enum: ['student', 'mentor'],
        default: 'student',
        required: true,
    },
    mentorshipFee: {
        type: Number
    },
    mentorshipDescription: {
        type: String
    },
    profileImage: {
        type: String,
        default: "",
    },
    coverImage: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
        default: "",
    },
    link: {
        type: String,
        default: "",
    },
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: [],
        },
    ],
    dob: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    educationLevel: {
        type: String,
        default: "",
    },
    academicYear: {
        type: String,
        default: "",
    },
    contact: {
        type: String,
        default: "",
    },
    major: {
        type: String,
        default: "",
    },
    gpa: {
        type: String,
        default: "",
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
