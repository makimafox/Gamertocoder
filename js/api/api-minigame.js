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
        // palm part(footer)
        for (let i = 0; i<data_game.length; i++) {
            const currentData = data_game[i];
            const newListItem = document.createElement('li');
            newListItem.innerText = currentData.name;
            document.getElementById("gamename").appendChild(newListItem)
            
        }
    }
})