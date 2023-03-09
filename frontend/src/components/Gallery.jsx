import React from "react";
import { fetchdata } from "../Redux/slice/catslice";
import { clicksupdate } from "../Api/updateclick";
import { useSelector,useDispatch } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Box,
  Button,
} from "@mui/material";
import { Buffer } from 'buffer';


const Gallery = ({ setselectedCat}) => {
  const scrollToTop = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scrollTop - scrollTop / 8);
    }
  };
  
  const dispatch=useDispatch()
  const data = useSelector((state) => state.catclicker.data);
  return (
    <>
    <Typography variant="h2" px={2} fontWeight="bold" >
      Gallery
    </Typography>
    <Stack
      direction={"row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="flex-start"
      sx={{px:"20px",mt:"20px"}}
    >
     
      {data.map((item) => (
        <Box key={item._id} onClick={async() => {
          let updatedcat=await clicksupdate(item)
          scrollToTop()
          dispatch(fetchdata)
          setselectedCat(updatedcat.data)
           }} sx={{width: { xs: "100%", sm: "380px", md: "280px" }}}  >
          <Card
            className="gallerycard"
            sx={{
              width: { xs: "100%", sm: "380px", md: "280px" },
              boxShadow: "none",
              borderRadius: 0,
              outline: "1px solid black",
              height:"300px",
              background: "#c1e5c7"
              
            }}
          >
            <Typography variant="h4" px={2} fontWeight="bold" sx={{textTransform: "capitalize"}}>
              {item.catname}
            </Typography>
            <Typography variant="subtitle1" px={2} color="grey">
              No.of times clicked : {item.clicks}
            </Typography>

           <CardMedia
              image={`data:image/png;base64,${Buffer.from( item.image.data.data).toString("base64")}`}
              alt={item.catname}
              sx={{
                width: { xs: "100%", sm: "358px", md: "280px" },
                height: 160,
              }}
            />

            <CardContent sx={{ height: "80px" }}>
              <Button variant="outline" onClick={()=>(setselectedCat(item))} sx={{background:"#c3e2ff"}}>

              
              <Typography variant="subtitle2" fontWeight="bold" color="Blue" >
                Card Link
              </Typography>
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Stack>
    </>
  );
};

export default Gallery;
