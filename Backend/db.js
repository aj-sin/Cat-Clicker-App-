const mongoose= require("mongoose")


const mongoURI=`mongodb+srv://ajitsingh:ajitsingh@notter.llgkjyg.mongodb.net/catclicker?retryWrites=true&w=majority`

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