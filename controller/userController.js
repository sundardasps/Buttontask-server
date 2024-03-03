import WebHooks from "node-webhooks";
import buttonDb from "../model/buttonModel.js";


const webhooks = new WebHooks({
  port: 3000,
  path: "/webhook",
  strictSSL: false,
  db: "../webHook",
});

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
      return res.status(200).json({ message: `Connected with ${contactId}`});
    }
  } catch (error) {
    console.log(error);
  }
};


export const buttonAction = async (req, res) => {
  try {
    const { locationId, contactId ,action} = req.params;
     if(action){ 
      return res.status(200).json({message:`Connection ${action}ed`})
     }
  } catch (error) {
    console.log(error);
  }
};


export const createButton = async (req, res) => {
  try {
    const { locationId, contactId ,action} = req.params;
        const button = new buttonDb({
        action: "stop",
        label: "Stop",                     
        style:{color:"red"}
      });
      button.save();
  } catch (error) {
    console.log(error);
  }
}
