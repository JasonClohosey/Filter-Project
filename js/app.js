var buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        event.preventDefault();
        if (button.dataset.filter === "all") {
            console.log("All was clicked");
        }
        if (button.dataset.filter === "cakes") {
            console.log("Cakes was clicked");
        }
        if (button.dataset.filter === "cupcakes") {
            console.log("cupcakes was clicked");
        }
        if (button.dataset.filter === "sweets") {
            console.log("sweets was clicked");
        }
        if (button.dataset.filter === "doughnuts") {
            console.log("doughnuts was clicked");
        }
    });
});

document.getElementById("search-item").addEventListener("keyup", function(event) {
    // event.preventDefault();
    let userInput = document.getElementById("search-item").value;
//does not work with enter - must use shift key for now
    if (event.keyCode === 16) {
        console.log("USER INPUT _ HOPEFULLY", userInput);
        document.getElementById("search-item").value = "";
    }
});



// console.log(buttons);

// buttons.forEach((button) => {
//     console.log(button);
//     if (button.classList.contains("filter-btn")) {
//         document.
//     }
// })