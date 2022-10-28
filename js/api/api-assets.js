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
        let banner = data_asset.banner
        let char = data_asset.characters
        let logo = data_asset.logo
        
        document.querySelector(".hero-img").src=banner[1]
        document.querySelector(".logo-img").src=logo[0]

        
    }
})