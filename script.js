let image = document.getElementById("image");
let api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let qrc=document.getElementById("qrc");
btn.addEventListener("click", () => {
    if(input.value!=""){
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`
    qrc.style.height="250px";
    image.style.height="200px";}
else{
    qrc.style.height="0"
    image.style.height="0"
}
});

