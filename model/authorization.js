import mongoose from "mongoose";

const schema = new mongoose.Schema({
  locationId: {
    type: String,
    required: true,
  },
  authorizationKey: {
    type: String,
    required: true,
  },
});

const connection = mongoose.model("connection", schema);

export default connection;
