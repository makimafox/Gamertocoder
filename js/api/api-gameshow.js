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
        for(let currentData of data_game) {
            const {genre, name, icon, description} = currentData;
        
            const newDivItem = document.createElement("div");
            newDivItem.classList.add("card");
            const genre_array = genre;
            let genre_string = genre_array.join()
            let html =`
            <div class="center">
                <p onclick="changeName('${name}')"><strong>ชื่อ: ${name}</strong></p>
                <img src="${icon}"/>
            </div>
            <p><strong>ประเภท:</strong> ${genre_string}</p><br>
            <p class="detail">${description}</p><br>
            <div class="center view-image">
                <form action="${icon}" method="get" target="_blank">
                    <button class="button" type="submit">View Image</button>
                </form>
            </div>`;
            html = html.trim();
            newDivItem.innerHTML = html;
            document.getElementById("list").appendChild(newDivItem);
        }
    }
})




// .then((data_game)=>{
//     if (typeof data_game =="number"){
//         console.error("error data type",data_game)
//     }else{
//         for(let currentData of data_game) {
//             const {genre, name, icon, description} = currentData;
        
//             const newDivItem = document.createElement("div");
//             newDivItem.classList.add("card");
//             const genre_array = genre;
//             let genre_string = genre_array.join()
//             let html =`
//             <div class="center">
//                 <p onclick="changeName('${name}')"><strong>ชื่อ: ${name}</strong></p>
//                 <img src="${icon}"/>
//             </div>
//             <p><strong>ประเภท:</strong> ${genre_string}</p><br>
//             <p class="detail">${description}</p><br>
//             <div class="center view-image">
//                 <form action="${icon}" method="get" target="_blank">
//                     <button class="button" type="submit">View Image</button>
//                 </form>
//             </div>`;
//             html = html.trim();
//             newDivItem.innerHTML = html;
//             document.getElementById("list").appendChild(newDivItem);
//         }
//     }
// })