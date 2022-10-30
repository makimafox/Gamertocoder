fetch("https://gamertocoder.garena.co.th/api/assets")
.then((response) => {
    if (response.status !== 200) {
        return response.status;
    }
    return response.json();
})
.then((data_characters) => {
    if (typeof data_characters == "number") {
        console.error("error data type number",data_characters)
    }else{
        const currentData = data_characters;
        let i = 1;

        for(let currentCharater of currentData.characters){
            console.log(currentCharater);
            const newDivItem = document.createElement("div");
            newDivItem.classList.add("card");
            const name =['Assasin','Benson','Blueguys','Goku','Kid','Naruto','Rabbit','Skateboard','Twintail','Bear Kid','Benson','Cyberguy','Goku','Kid','Ninja Female','Riding Dragon','Soilder','Wizard','benson','benson','Cyberguy','Guitarguy','Mafia','Ninja male','Samurai','Superstar','Yellowguy','Benson','Blueguy','Cyberguy','Kid','Mascos','Pig','Skateboard','Twintail']

            let html =`
            <div class="center">
                <img src="${currentCharater}"/>
                <p id="name-${i}"></p>
            </div>`;
            html = html.trim();
            newDivItem.innerHTML = html;
            document.getElementById("list").appendChild(newDivItem);

            document.getElementById(`name-${i}`).innerHTML = name[i-1];
            i++;
        }
    }
})


// .then((data_characters) => {
//     if (typeof data_characters == "number") {
//         console.error("error data type number",data_characters)
//     }else{
//         const currentData = data_characters;
        
//         for(let currentCharater of currentData.characters){
//             console.log(currentCharater);
//             const newDivItem = document.createElement("div");
//             newDivItem.classList.add("card");

//             let html =`
//             <div class="center">
//                 <img src="${currentCharater}"/>
//             </div>`;
//             html = html.trim();
//             newDivItem.innerHTML = html;
//             document.getElementById("list").appendChild(newDivItem);
//         }      
//     }
// })