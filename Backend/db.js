const mongoose= require("mongoose")
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})
const mongoURI=`mongodb+srv://ajitsingh:${process.env.DATABASE}@notter.llgkjyg.mongodb.net/catclicker?retryWrites=true&w=majority`

mongoose.set('strictQuery', true);

const connectToMongo= async()=>{
    
    try {
      await mongoose.connect(mongoURI)
      console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }
}

module.exports= connectToMongo