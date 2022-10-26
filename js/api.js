fetch("https://gamertocoder.garena.co.th/api/assets")
.then((response) => {
    if (response.status !== 200) {
      return response.status;
    }
    return response.json();
})
.then((data_asset) => {
    if (typeof data_asset == "number") {
        console.error("error data type number",data_asset)
    }else{
        console.log(data_asset)
    }
})


fetch("https://gamertocoder.garena.co.th/api/minigames")
.then((response)=>{
    if(response.status!==200){
        return response.status
    }
    return response.json()
})
.then((data_game)=>{
    if (typeof data_game =="number"){
        console.error("error data type",data_game)
    }else{
        console.log(data_game)
    }
})