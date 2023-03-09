import React, { useState,memo,useEffect } from "react";
import { Stack, TextField, IconButton, FormControl } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { updatecat } from "../Api/updatecat";
import Button from "@mui/material/Button";
import { fetchdata } from '../Redux/slice/catslice';
import { Addcatmodal } from "./";
import { useDispatch } from "react-redux";

const Catforms = memo(({ selectedCat, setselectedCat }) => {

  
  const dispatch=useDispatch()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [catdata, setCatdata] = useState({
    catname: 0,
    nickname: 0,
    clicks: 0,
    image: 0,
  });
  useEffect(() => {
    if (selectedCat.catname !== catdata.catname || selectedCat.nickname !== catdata.nickname || selectedCat.clicks !== catdata.clicks) {
      setCatdata({
        catname: selectedCat.catname,
        nickname: selectedCat.nickname,
        clicks: selectedCat.clicks,
      });
    }
    // eslint-disable-next-line
  }, [selectedCat]);
  const Onchange = (e) => {
    setCatdata({ ...catdata, [e.target.name]: e.target.value });

  };
  const handleimageChange = (e) => {
    setCatdata({...catdata, image: e.target.files[0] });
  };
  const resetform = () => {
    setselectedCat(selectedCat)
    setCatdata({
      catname: 0,
      nickname: 0,
      clicks:  0,
      image: 0,
    })
  };
  const handleEdit = async (e) => {
        e.preventDefault()
        const response=await updatecat(catdata,selectedCat)
        dispatch(fetchdata())
        setselectedCat(response.data)
  };
  
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Add Cat form
      </Button>
      <Addcatmodal
        open={open}
        handleClose={handleClose}
        setselectedCat={setselectedCat}
        />
      <form onSubmit={handleEdit}>
    <Stack sx={{mt:"15px"}} spacing={2}>
      <FormControl>
        <TextField
          id="outlined-controlled"
          required
          
          label="Cat Name"
          name="catname"
          value={catdata.catname }
          InputLabelProps={{ shrink: true }}
          onChange={Onchange}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-controlled"
          required
          label="Nick name"
          name="nickname"
          value={catdata.nickname }
          InputLabelProps={{ shrink: true }}
          onChange={Onchange}
          />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-controlled"
          required
          label="No. of clicks"
          type="number"
          name="clicks"
          value={catdata.clicks}
          InputLabelProps={{ shrink: true }}
          onChange={Onchange}
        />
      </FormControl>
      <FormControl>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          >
          <PhotoCamera />
          <input accept="image/*" type="file" encType="multipart/form-data"  onChange={handleimageChange} />
        </IconButton>
      </FormControl>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" type="submit">
          Edit
        </Button>
        <Button variant="contained" onClick={resetform}>
          undo
        </Button>
      </Stack>
    </Stack>
      </form>
          </>
  );
});

export default Catforms;
