import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import Imagecard from "./Imagecard";


const Gallery = ({ setselectedCat}) => {
  const data = useSelector((state) => state.catclicker.data);
  console.log(data,"gallery")
  return (
    <>
    <Typography variant="h2" fontWeight="bold" >
      Gallery
    </Typography>
    <Stack
      direction={"row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="flex-start"
    >
     
      {data.map((item) => (
        <Box key={item._id}>
          <Card
            sx={{
              width: { xs: "100%", sm: "358px", md: "320px" },
              boxShadow: "none",
              borderRadius: 0,
              outline: "1px solid black",
              px: "10px",
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              {item.catname}
            </Typography>
            <Typography variant="subtitle1" color="grey">
              No.of times clicked : {item.clicks}
            </Typography>

           {/* <Imagecard item={item}/> */}
           <CardMedia
              image={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(item.image.data.data)))}`}
              alt={item.catname}
              sx={{
                width: { xs: "100%", sm: "358px", md: "320px" },
                height: 180,
              }}
            />

            <CardContent sx={{ height: "80px" }}>
              <button onClick={()=>(setselectedCat(item))}>

              
              <Typography variant="subtitle2" fontWeight="bold" color="Blue" >
                Card Link
              </Typography>
              </button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Stack>
    </>
  );
};

export default Gallery;
