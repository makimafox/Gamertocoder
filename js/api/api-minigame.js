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
        
    
        
            
    }
})

