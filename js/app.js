var buttons = document.querySelectorAll(".btn");


buttons.forEach((button) => {
    button.addEventListener("click", function() {
        event.preventDefault();
        if (button.dataset.filter === "all") {
            var allItems = document.querySelectorAll(".cakes, .cupcakes, .sweets, .doughnuts");
            
            allItems.forEach((item) => {
                console.log("Each item", item);

            });
        }
        if (button.dataset.filter === "cakes") {
            var allCakes = document.querySelectorAll(".cakes");
            
            allCakes.forEach((cake) => {
                console.log("Each cake item", cake);

            });
        }
        if (button.dataset.filter === "cupcakes") {
            var allCupcakes = document.querySelectorAll(".cupcakes");
            
            allCupcakes.forEach((cupcake) => {
                console.log("Each cupcake item", cupcake);

            });
        }
        if (button.dataset.filter === "sweets") {
            var allSweets = document.querySelectorAll(".sweets");
            
            allSweets.forEach((sweets) => {
                console.log("Each sweets item", sweets);

            });
        }
        if (button.dataset.filter === "doughnuts") {
            var allDoughnuts = document.querySelectorAll(".doughnuts");
            
            allDoughnuts.forEach((doughnuts) => {
                console.log("Each doughnuts item", doughnuts);

            });
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