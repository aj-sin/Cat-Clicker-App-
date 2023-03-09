import { Stack,Typography } from "@mui/material";

const navbar = () => {
  return (
    <>
      <Stack  sx={{position:"sticky",background: "#fff2e0",top:0,height:"35px",justifyContent:"center"}}>
        <Typography px={2} variant="h5">
            Cat Clicker App
        </Typography>
      </Stack>
    </>
  );
};

export default navbar;
