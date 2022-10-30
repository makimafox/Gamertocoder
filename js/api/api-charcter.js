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
        
        for(let currentCharater of currentData.characters){
          console.log(currentCharater);
          const newDivItem = document.createElement("div");
          newDivItem.classList.add("card");

          let html =`
          <div class="center">
              <img src="${currentCharater}"/>
          </div>`;
          html = html.trim();
          newDivItem.innerHTML = html;
          document.getElementById("list").appendChild(newDivItem);
        }      
    }
})