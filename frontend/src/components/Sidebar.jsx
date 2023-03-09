import React ,{useEffect}from "react";
import { Stack } from "@mui/material";
import { updateclicks,fetchdata } from "../Redux/slice/catslice";
import { useSelector,useDispatch } from "react-redux";
import { clicksupdate } from "../Api/updateclick";

const Sidebar = ({selectedCat, setselectedCat}) => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.catclicker.data)




  console.log(data,"sidebaar")
  return (
    <>
      <Stack
        direction="row"
        sx={{
          flexDirection: { md: "column" },
          overflow: 'auto',
          height: { sx: "auto", md: "96%" },
        }}
      >
        {data.map((cat) => (
          <button
            className="category-btn"
            style={{
              background: cat._id === selectedCat._id && "blue",
              color: "white",
              display:"flex",
              justifyContent:"space-between"
            }}
            onClick={async() => {
              console.log("butoon clicked",cat._id,cat.clicks)
              let updatedcat=await clicksupdate(cat)
              console.log("letsssssssssss sseeeee",updatedcat)
              dispatch(fetchdata)
              setselectedCat(updatedcat.data)
               }}
            key={cat._id}
          >
            <span
              style={{
                marginRight: "2px",
                color: cat._id === selectedCat._id ? "#fff" : "black",
              }}
            >
              {cat.catname}
            </span>
            <span style={{ color: cat._id === selectedCat._id ? "#fff" : "black" }}>
              {cat.clicks}
            </span>
          </button>
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;
