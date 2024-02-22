import mongoose from 'mongoose'
const ExampleSchema = new mongoose.Schema({
    id : {
        type: Number,
        required: "ID is required !",
    },
    name: {
        type: String,
        required: "Name is required !",
        minlength: 1,
        maxlength: 100
    },
    content: {
        type: String,
        required: "Name is required !",
        minlength: 1,
        maxlength: 100
    },
    important: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model("POST", ExampleSchema);