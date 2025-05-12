document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#f47cfb";
            this.style.color = "black";
        });

        button.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#843cfb";
            this.style.color = "white";
        });
    });
});


// making the page load with the image scroll to appear in the middle
