import { Stack,Typography } from "@mui/material";

const navbar = () => {
  return (
    <>
      <Stack  sx={{position:"sticky",background:"#feeeee",top:0,height:"35px",justifyContent:"center"}}>
        <Typography px={2} variant="h5">
            Cat Clicker App
        </Typography>
      </Stack>
    </>
  );
};

export default navbar;
