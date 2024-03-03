import mongoose from "mongoose";

const buttonSchema = new mongoose.Schema({
  label: String,
  action: String,
  style: {
    type: {
      type: String,
      default: "default",
    },
    color: {
      type: String,
      default: "#000000",
    },
    border: {
      type: String,
      default: "none",
    },
    shadow: {
      type: String,
      default: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);",
    },
    cursor: {
      type: String,
      default: "pointer",
    },
    borderRadius: {
      type: String,
      default: "5px",
    },
    width: {
      type: String,
      default: "100px",
    },
  },
});

const button = mongoose.model("button", buttonSchema);

export default button;
