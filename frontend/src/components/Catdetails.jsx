import React from 'react'
import { Card, CardMedia, CardContent, Typography,Button } from "@mui/material";
import { fetchdata } from "../Redux/slice/catslice";
import { clicksupdate } from "../Api/updateclick";
import {useDispatch } from "react-redux";
import { Buffer } from 'buffer';

const Catdetails = ({selectedCat,setselectedCat}) => {
  const dispatch=useDispatch()
  if(selectedCat._id===""){
    return(
      <div style={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
      <div>
      <h3>
        Cat Details
      </h3>
      </div>
      <div>
      <h4>
        No cat Selected... :(
      </h4>
      </div>
      </div>
    )
  }
 
  const base64String = Buffer.from( selectedCat.image.data.data).toString("base64")
  let age="";
  switch (true) {
    case (selectedCat.clicks+1) <= 5:
      age = "Infant";
      break;
    case (selectedCat.clicks+1) <= 12:
      age = "Child";
      break;
    case (selectedCat.clicks+1)<= 25:
      age = "Young";
      break;
    case (selectedCat.clicks+1) <= 40:
      age = "Middle-Age";
      break;
    case (selectedCat.clicks+1) <= 60:
      age = "Old";
      break;
    default:
      age = "Very Old";
      break;
  }

  
  return (
    <Card
      sx={{
        width: {  xs: "100%",sm:"358px" ,md: "390px"},
        minHeight:{xs:"55vh",md:"auto"},
        boxShadow: "none",
        borderRadius: 0,
        outline:"1px solid black",
        background: "#fff2e0"
      }}
      onClick={async() => {
        let updatedcat=await clicksupdate(selectedCat)
        dispatch(fetchdata)
        setselectedCat(updatedcat.data)
         }}
    >
      <Typography variant='h2' px={2} fontWeight="bold" sx={{textTransform: "capitalize"}}>
        {selectedCat.catname}
      </Typography>
      <Typography variant='subtitle1' px={2} color="grey">
       No.of times clicked : {selectedCat.clicks}
      </Typography>
      
        <CardMedia
          image={`data:image/png;base64,${base64String}`}
          alt={selectedCat.catname}
          sx={{ width: {  xs: "100%",sm:"358px" ,md: "390px"}, height: 210 }}
        />

        <CardContent sx={{ height: "80px" }}>
          
            <Typography variant="h4" fontWeight="bold" color="black" sx={{textTransform: "capitalize"}}>
              {selectedCat.nickname}
            </Typography>
          
            <Typography variant="h5" fontWeight="bold" color="black">
              {age}
              
            </Typography>
            <Button variant="contained" sx={{mt:{xs:"10px",md:"20px"}}} >
              Card Link
            </Button>
         
        </CardContent>
      
    </Card>
  )
}

export default Catdetails
