import React, { useState } from "react";
import { addData,fetchdata } from "../Redux/slice/catslice";
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
    dispatch(addData(catdata));
    dispatch(fetchdata())
    setselectedCat("")
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
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h3">Add Cats.......</Typography>
         
          <FormControl>
            <TextField
              id="outlined-controlled"
              label="Cat Name"
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
              value={catdata.nickname}
              name="nickname"
              InputLabelProps={{ shrink: true }}
              onChange={Onchange}
            />
          </FormControl>
          <FormControl>
            
            <TextField
              id="outlined-controlled"
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
                type="file"
                enctype="multipart/form-data"
                onChange={handleimageChange}
              />
            </IconButton>
          </FormControl>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleadd}>
              Add
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default Addcatmodal;
