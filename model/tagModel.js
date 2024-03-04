import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: true,
  },

  tag: {
    type: String,
    default:"Default Tag.",
    required: true,
  },
  locationId: {
    type: String,
    required: true,
  },
  style: {
    type: {
      type: String,
      default: "default",
    },
    color: {
      type: String,
      default: "rgba(117, 126, 179, 0.5)",
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
      default: "60px",
    },
  },
});

const tagModel = mongoose.model("tag", tagSchema);

export default tagModel;
