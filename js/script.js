const image = document.querySelector("img"),
input = document.querySelector("input"),
button = document.querySelector("button"),
api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;


button.addEventListener("click", ()=> {
    image.src = `${api}${input.value}`;
})