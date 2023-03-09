import React from "react";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

const Sidebar = ({selectedCat, setselectedCat}) => {
  const data=useSelector((state)=>state.catclicker.data)

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
              setselectedCat(cat)
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
