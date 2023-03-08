import React from 'react'
import { CardMedia, } from '@mui/material';
const MAX_FILE_SIZE = 10*1024 * 1024; // 1MB in bytes
const Imagecard = ({item}) => {
    
    //   const file = event.target.files[0];
        let base64Data=""
        console.log(item.image.data.data.size,item,"aklsdjfkljasdlkfjalskdjfhkjadshjfkhlaksjdfhlkajsd")
      if (item.image <= MAX_FILE_SIZE) {
        const reader = new FileReader();
        reader.onload = () => {
          const encoder = new TextEncoder();
           base64Data = btoa(String.fromCharCode(...encoder.encode(reader.result)));
          
          
        };
        reader.readAsArrayBuffer(item.image);
      } else {
        alert('The file is too large');
      }
    
  return (
    <>
       <CardMedia
              image={`data:image/png;base64,${base64Data}`}
              alt={item.catname}
              sx={{
                width: { xs: "100%", sm: "358px", md: "320px" },
                height: 180,
              }}
            />
    </>
  )
}

export default Imagecard
