// modalschema

const mongoose = require("mongoose");
const Rschema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    password: {
      type: String,
      requried: true,
    }
  },
  { collection: "practice" }
);
module.exports = mongoose.model("rschema", Rschema);