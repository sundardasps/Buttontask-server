import WebHooks from "node-webhooks";
import buttonDb from "../model/buttonModel.js";
import tagDb from "../model/tagModel.js";

const webhooks = new WebHooks({
  port: 3000,
  path: "/webhook",
  strictSSL: false,
  db: "../webHook",
});

//--------------------------------BUTTON FETCH ----------------------------------//

export const buttonFetch = async (req, res) => {
  try {
    const { locationId, contactId } = req.params;

    webhooks.add("task", req.originalUrl);
    const existingRegistrations = await webhooks.getDB();

    const duplicateRegistration = existingRegistrations.task.find((value) => {
      return value === req.originalUrl;
    });

    if (duplicateRegistration) {
      const buttons = await buttonDb.find();
      if (buttons) {
        return res.status(200).json(buttons);
      }
    } else {
      webhooks.add("task", req.originalUrl);
      return res.status(200).json({ message: `Connected with ${contactId}` });
    }
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------- CREATE TAG ----------------------------------//

export const createTag = async (req, res) => {
  try {
    const { locationId, contactId, action } = req.params;

    if (locationId) {
      const exist = await tagDb.findOne({ tagName: action });
      if (exist) {
        return res.status(500).json({ message: `Duplication not allowed!` });
      } else {
        const tag = new tagDb({
          locationId: locationId,
          tagName: action,
        });
        const newTag = await tag.save();
        if (newTag) {
          return res
            .status(200)
            .json({ newTag, message: `Tag ${action} created. ` });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//--------------------------------CREATE BUTTON----------------------------------//

export const createButton = async (req, res) => {
  try {
    const { locationId, contactId, action } = req.params;
    const button = new buttonDb({
      action: "stop",
      label: "Stop",
      style: { color: "red" },
    });
    button.save();
  } catch (error) {
    console.log(error);
  }
};
