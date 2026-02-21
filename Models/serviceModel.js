import mongoose from "mongoose";

const serviceSchema = new mongoose.SchemaType({
    name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const Service = mongoose.model("Service",serviceSchema);

export default Service;