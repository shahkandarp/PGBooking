const mongoose = require("mongoose");
require("dotenv").config();

const InterestSchema = new mongoose.Schema({
  ownerId:{
    type:mongoose.Types.ObjectId,
    ref:"Owner"
  },
  roomId:{
    type:mongoose.Types.ObjectId,
    ref:"Room"
  },
  userId:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  }
},{timestamps:true});


module.exports = mongoose.model("Interest", InterestSchema);
