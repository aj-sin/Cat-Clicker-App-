import { Navbar, Catdetails, Gallery,Sidebar, Catforms } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from './Redux/slice/catslice';
import { useEffect,useState } from 'react';
import { Stack, Box, Typography } from "@mui/material"
import React from 'react'

function App() {
  const dispatch = useDispatch()
  const catdata = useSelector((state) => state.catclicker.data)
  const [selectedCat, setselectedCat] = useState("")
  useEffect(() => {
    console.log("api calling")
    dispatch(fetchdata())
    // eslint-disable-next-line 
  }, [selectedCat,dispatch])
  if(catdata!=null){

    console.log("state", catdata)
  }
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
              borderRight: "1px solid #3d3d3d",
              paddingX: { sm: 0, md: 2 },
              flex:1
            }}
          >
            <Sidebar selectedCat={selectedCat} setselectedCat={setselectedCat} />

          </Box>
          <Box px={2}  sx={{ height: "80vh", flex: 2,borderRight:"1px solid grey" }}>

            <Catdetails selectedCat={selectedCat}  />
          </Box>
          <Box px={2} sx={{ height: "80vh" ,flex:1}}>

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
