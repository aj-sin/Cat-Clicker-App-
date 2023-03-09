export const updatecat = async (catdata,selectedCat) => {
    console.log(catdata, "data is fetched properly")
    console.log(selectedCat, "data is fetched properly")
    const formData = new FormData();
    
    formData.append('catname',catdata.catname ? catdata.catname :selectedCat.catname);
    formData.append('nickname',catdata.nickname ? catdata.nickname :selectedCat.nickname);
    formData.append('clicks',catdata.clicks? catdata.clicks : selectedCat.clicks);
    if(catdata.image){
        formData.append('image',catdata.image);
    }
    const response = await fetch(`https://catclickerapi.onrender.com/updatecat/${selectedCat._id}`, {
        method: "PUT",
        body: formData,
    });
    return response.json()
 }