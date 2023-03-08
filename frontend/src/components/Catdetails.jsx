import React from 'react'
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const Catdetails = ({selectedCat}) => {
  if(selectedCat===""){
    return(
      <h3>
        cat details
      </h3>
    )
  }
  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(selectedCat.image.data.data))
  );
  let age="";
  switch (true) {
    case selectedCat.clicks <= 5:
      age = "Infant";
      break;
    case selectedCat.clicks <= 12:
      age = "Child";
      break;
    case selectedCat.clicks <= 25:
      age = "Young";
      break;
    case selectedCat.clicks <= 40:
      age = "Middle-Age";
      break;
    case selectedCat.clicks <= 60:
      age = "Old";
      break;
    default:
      age = "Very Old";
      break;
  }
  console.log(selectedCat.clicks,age)

  
  return (
    <Card
      sx={{
        width: {  xs: "100%",sm:"358px" ,md: "320px"},
        boxShadow: "none",
        borderRadius: 0,
        outline:"1px solid black",
        px:"10px"
      }}
    >
      <Typography variant='h2' fontWeight="bold">
        {selectedCat.catname}
      </Typography>
      <Typography variant='subtitle1' color="grey">
       No.of times clicked : {selectedCat.clicks}
      </Typography>
      
        <CardMedia
          image={`data:image/png;base64,${base64String}`}
          alt={selectedCat.catname}
          sx={{ width: {  xs: "100%",sm:"358px" ,md: "320px"}, height: 180 }}
        />

        <CardContent sx={{ height: "80px" }}>
          
            <Typography variant="subtitle1" fontWeight="bold" color="black">
              {selectedCat.nickname}
            </Typography>
          
            <Typography variant="subtitle2" fontWeight="bold" color="black">
              {age}
              
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold" color="Blue">
              Card Link
              
            </Typography>
         
        </CardContent>
      
    </Card>
  )
}

export default Catdetails
