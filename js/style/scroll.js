window.addEventListener("scroll",function(){

    let scroll = this.scrollY
    // console.log(scroll)
    if (scroll<5){

        document.getElementById("header").style.backgroundColor = 'transparent'
    }else {

        document.getElementById("header").style.backgroundColor = "rgb("+255+","+255+","+255+")"
    }
});