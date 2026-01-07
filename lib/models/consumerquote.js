import mongoose from "mongoose";

const consumerquoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    location: {
        type: String,
        required: true
    },
    bill: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
    type: String,
    enum: ['Pending', 'Contacted'],
    default: 'Pending',
  },
},{
    timestamps:true
});

const ConsumerQuote =
  mongoose.models.ConsumerQuote ||
  mongoose.model("ConsumerQuote", consumerquoteSchema);

export default ConsumerQuote;