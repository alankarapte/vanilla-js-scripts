setInterval(() => {
    document.body.style.backgroundColor = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})  `;
    document.body.style.transition = "4s";
}, 1000);