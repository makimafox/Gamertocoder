window.addEventListener("scroll",function(){

    let scroll = this.scrollY
    // console.log(scroll)
    if (scroll<5){
        document.getElementById("header").style.backgroundColor = 'transparent';
        document.getElementById("header").style.boxShadow = "none";
        document.getElementById("icon-more").style.display = "block"
    }else {
        document.getElementById("header").style.backgroundColor = "rgba("+254+","+254+","+254+","+0.9+")";
        document.getElementById("header").style.boxShadow = "0px 4px 10px rgba("+0+","+0+","+0+","+0.1+")"
        document.getElementById("icon-more").style.display = "none"
    }
});

// background: rgba(254, 254, 254, 0.9);
// box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);