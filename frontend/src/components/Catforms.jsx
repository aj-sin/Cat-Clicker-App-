import React,{useState} from "react";
import { Stack, TextField, IconButton} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Button from "@mui/material/Button";
import {Addcatmodal} from "./"


const Catforms = ({ selectedCat: { catname, nickname, clicks } ,setselectedCat}) => {

   

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack spacing={2}>
      <Button onClick={handleOpen} variant="contained">Add Cat form</Button>
      <Addcatmodal open={open} handleClose={handleClose} setselectedCat={setselectedCat} />
      <TextField
        id="outlined-controlled"
        label="Cat Name"
        value={catname}
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {}}
      />
      <TextField
        id="outlined-controlled"
        label="Nick name"
        value={nickname}
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {}}
      />
      <TextField
        id="outlined-controlled"
        label="No. of clicks"
        value={clicks}
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {}}
      />
      <IconButton color="primary" aria-label="upload picture" component="label">
        <PhotoCamera />
        <input accept="image/*" type="file" />
      </IconButton>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Edit</Button>
        <Button variant="contained">undo</Button>
      </Stack>
    </Stack>
  );
};

export default Catforms;
