import React, { useState } from "react";
import { fetchdata } from "../Redux/slice/catslice";
import {Addcat} from "../Api/Addcatapi"
import { useDispatch } from "react-redux";
import {
  Stack,
  TextField,
  IconButton,
  Modal,
  Box,
  Typography,
  Button,
  FormControl
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Addcatmodal = ({ open, handleClose ,setselectedCat}) => {
  const dispatch = useDispatch();
  const [catdata, setCatdata] = useState({
    catname: "",
    nickname: "",
    clicks: 0,
    image: [],
  });

  const Onchange = (e) => {
    setCatdata({ ...catdata, [e.target.name]: e.target.value });
  };
  const handleimageChange = (e) => {
    setCatdata({ ...catdata, image: e.target.files[0] });
  };
  const handleadd = async(e) => {
    e.preventDefault()
    let newcat=await Addcat(catdata)
    dispatch(fetchdata())
    setselectedCat(newcat)

    setCatdata({ catname: "", nickname: "", clicks: 0, image: [] });
    handleClose();

  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {xs:"80vw",md:"40vw"},
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      ><form onSubmit={handleadd}>
        <Stack spacing={2}>
          <Typography variant="h3">Add Cats.......</Typography>
          <FormControl>
            <TextField
              id="outlined-controlled"
              label="Cat Name"
              required
              value={catdata.catname}
              name="catname"
              InputLabelProps={{ shrink: true }}
              onChange={Onchange}
            />
          </FormControl>
          <FormControl>
          
            <TextField
              id="outlined-controlled"
              label="Nick name"
              required
              value={catdata.nickname}
              name="nickname"
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
              <input
                placeholder="Insert Image"
                accept="image/*"
                required
                type="file"
                encType="multipart/form-data"
                onChange={handleimageChange}
              />
            </IconButton>
          </FormControl>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" type="submit">
              Add
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Stack>
        </Stack>
          </form>
      </Box>
      
    </Modal>
  );
};

export default Addcatmodal;
