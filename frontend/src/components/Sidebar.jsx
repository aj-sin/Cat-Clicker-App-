import React ,{memo,useEffect}from "react";
import { Stack } from "@mui/material";
import { updateclicks,fetchdata } from "../Redux/slice/catslice";
import { useSelector,useDispatch } from "react-redux";

const Sidebar = memo(({selectedCat, setselectedCat}) => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.catclicker.data)
  const addedcat = useSelector((state) => state.catclicker.addedcat)

  useEffect(() => {
    if(data)
    setselectedCat(addedcat)
    // eslint-disable-next-line 
  }, [])


  console.log(data)
  return (
    <>
      <Stack
        direction="row"
        sx={{
          flexDirection: { md: "column" },
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
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
            onClick={() => {
              setselectedCat(cat)
              // dispatch(updateclicks(cat._id,cat._clicks+1))
              // dispatch(fetchdata)

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
});

export default Sidebar;
