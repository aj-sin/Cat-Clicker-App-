export const clicksupdate =  async (cat) => {
    console.log("updateclikcs",cat.clicks)
       const response = await fetch(`http://localhost:5000/updatecat/${cat._id}`, {
           method: 'PUT',
           mode: 'cors',
   
           headers: {
               'Content-Type': "application/json",
   
           },
   
           body: JSON.stringify({ clicks:cat.clicks+1})
       })
       return response.json()
   }