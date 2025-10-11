import mongoose, { Schema, model } from "mongoose";

const ContactSchema = new Schema(
  {
    contact: {
      type: String,
      required: true, // email ya phone number
    },
    country: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // 👈 isse `createdAt` aur `updatedAt` auto create ho jaate hain
);

export default mongoose.models.Contact || model("Contact", ContactSchema);
