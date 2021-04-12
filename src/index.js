// Below code listens for the page to be loaded......
// document.addEventListener("DOMContentLoaded", function() { });

document.addEventListener("DOMContentLoaded", () => {


    const mainDiv = document.querySelector(".main_div")

    mainDiv.addEventListener("click", function() {
        const target = event.target
        if (target === event.currentTarget) {
            // do something here...
        }
    })

    
});

