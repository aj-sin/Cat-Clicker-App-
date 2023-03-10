import { Navbar, Catdetails, Gallery,Sidebar, Catforms } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from './Redux/slice/catslice';
import { useEffect,useState } from 'react';
import { Stack, Box, Typography } from "@mui/material"
import React from 'react'

function App() {
  const dispatch = useDispatch()
  const catdata = useSelector((state) => state.catclicker.data)
  const addedcat=useSelector((state)=>state.catclicker.addedcat)
  const [selectedCat, setselectedCat] = useState({
    _id:"",
    catname:"",
    clicks:0,
    nickname:"",
    image:{data:{data:""}}
  })
  if(addedcat){

  }
  useEffect(() => {
    dispatch(fetchdata())
    // eslint-disable-next-line 
  }, [selectedCat,dispatch])
 
  if(catdata==null){
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )

}

  return (
    < >
      <Navbar />
      <Stack >
        <Stack p={2} sx={{ flexDirection: { sm: "column", md: "row" }, justifyContent: "space-between" }}>
          <Box
            sx={{
              height: { sx: "auto", md: "80vh" },
              borderRight: {xs:"none",md:"1px solid #3d3d3d"},
              paddingX: { sm: 0, md: 2 },
              flex:1.4
            }}
          >
            <Sidebar selectedCat={selectedCat} setselectedCat={setselectedCat} />

          </Box>
          <Box px={2}  sx={{ height: "80vh", flex: 2,borderRight: {xs:"none",md:"1px solid #3d3d3d"},display:"flex",justifyContent:"center",mt:{xs:4,md:0}}}>

            <Catdetails selectedCat={selectedCat} setselectedCat={setselectedCat} />
          </Box>
          <Box px={2} sx={{ height: "80vh" ,flex:1,mt:{xs:4,md:0}}}>

            <Catforms selectedCat={selectedCat} setselectedCat={setselectedCat}  />
          </Box>
        </Stack>
        <Stack>
          <Gallery setselectedCat={setselectedCat}  />
        </Stack>
      </Stack>
      <Typography variant="body2" className="copyright" sx={{ mt: 1.5 }}>Copyright --@2023 | Ajit Singh</Typography>
    </>
  );
}

export default App;
