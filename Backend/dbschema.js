const mongoose=require("mongoose")
const { Schema } = mongoose;

const Catschema = new Schema({
    catname:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
        required:true,
    },
    clicks:{
        type:Number,
        required:true,
    },
    image:{
        data: Buffer,
        contentType: String,
    }

  });
  module.exports = mongoose.model("catsdata",Catschema)