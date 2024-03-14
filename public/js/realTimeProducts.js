//lado cliente, browser

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn-agregarItem").addEventListener("click", function () {
        // Handle the button click event here
        alert("Button clicked!");
    });

})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-eliminarItem").addEventListener("click", function () {
        // Handle the button click event here
        alert("Button2 clicked!");
    });
})

 console.log(document.querySelectorAll(".btn-eliminarItem"))

// const socket = io()

// socket.emit('saludo', 'msje del browser al servidor')