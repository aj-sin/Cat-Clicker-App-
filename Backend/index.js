const connectToMongo = require("./db")
const express = require('express')
const catsdata = require("./dbschema")
const app = express()
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
//data base connected
connectToMongo()
app.use(cors())
app.use(express.json())

const port = 5000

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/addcat", upload.single("image"), async (req, res) => {

  try {


    const savecatdata = catsdata({
      catname: req.body.catname,
      nickname: req.body.nickname,
      clicks: req.body.clicks,
      image: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png/jpg/jpeg",
      },
    });
    console.log("Add Data")
    await savecatdata
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
    res.send(savecatdata)
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: "Internal Server Error" })
  }

});

app.get('/fetchcats', async (req, res) => {
  const allData = await catsdata.find()
  console.log("datafetched")
  res.json(allData)
})

app.put("/updatecat/:id", upload.single("image"), async (req, res) => {//this id part in the url can be accessed by param
  try {
    console.log("***********UPDATE***************")
    const { catname, nickname, clicks, image } = req.body
    let newcat = {}//new note is created which is going to update the previous update

    newcat.catname = catname
    newcat.nickname = nickname
    newcat.clicks = clicks
    newcat.image = image
    //|Now optimization can be increased by determining whether the whole objects need to be editted or only few elements in that object

    let data = await catsdata.findById(req.params.id)//it checks weather the entered id note is there or not
    if (!data) {
      return res.status(404).send("not found")
    }
    data = await catsdata.findByIdAndUpdate(req.params.id, { $set: newcat }, { new: true })//note is being updated 
    res.json({ data })

  } catch (err) {
    console.log(err)
    res.status(500).send({ error: "Internal Server Error" })
  }
})
app.put("/updatecatclicks/:id",  async (req, res) => {//this id part in the url can be accessed by param
  try {
    console.log("***********UPDATE***************")
    const  clicks  = req.body.clicks
    console.log("clicks:", clicks);
    console.log("id:", req.params.id);
    let data = await catsdata.findById(req.params.id)//it checks weather the entered id note is there or not
    if (!data) {
      return res.status(404).send("not found")
    }
    data = await catsdata.findByIdAndUpdate(req.params.id, { $set: {clicks} }, { new: true })//note is being updated 
    res.json({ data })

  } catch (err) {
    console.log(err)
    res.status(500).send({ error: "Internal Server Error" })
  }
})
app.get("/fetchcat/:id", upload.single("image"), async (req, res) => {//this id part in the url can be accessed by param
  try {
   

    let data = await catsdata.findById(req.params.id)//it checks weather the entered id note is there or not
    if (!data) {
      return res.status(404).send("not found")
    }
    res.json({ data })

  } catch (err) {
    console.log(err)
    res.status(500).send({ error: "Internal Server Error" })
  }
})


app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})