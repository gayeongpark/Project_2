    // Test

    // // Document selected in html
    // var mainDiv = document.getElementById("app");
    // console.log(mainDiv);
    // // Seating left
    // const seating =   ['a1']
    
    // // Total seat  5 (We can set this one base of the total numbers )
    // seating.length = 5;
    
    // // Create a new div element
    
    // for (let index = 0; index < seating.length; index++) {
    //   // Adding the specific class for each elements
    //   function classSetup(value) {
    //     // Check if is a string
    //     const valueChecked = typeof value;
    //     // Return Class Base of existence
    //     return valueChecked === "string" ? "inactive" : "active";
    //   }
    
    //   const element = document.createElement("div");
    
    //   // Inject content into a javascript
    //   element.textContent = seating[index] ? seating[index] : "booked";
    
    //   // Inject class name base of existence
    //   element.classList.add(classSetup(seating[index]));
    //   // Added an extrac class
    //   element.classList.add("seat");
    
    //   // Append the child element
    //     mainDiv.appendChild(element);
    // }
    
    // // Front End Javascript toogle class
    // document.querySelectorAll(".room-seats .seat").forEach((seat) => {
    //   // Added forEach seat an event listener
    //   console.log(seat);
    //   seat.addEventListener("click", function () {
    //     // Toogle active class
    //     this.classList.toggle("active");
    //   });
    // });

    
    // Password toggle Icon
    const iconPassword = document.querySelector("#togglePassword");
    const inputpassword = document.querySelector("#password");

    if(iconPassword){
        iconPassword.addEventListener("click", function () {
            // toggle the type attribute
        
            const type = inputpassword.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });
    }


 const carouselElement  = document.querySelector(".carousel");

    function reportWindowSize() {   
        // Check innerWidth
        if(innerWidth <= 1000  ){
            carouselElement.style.width = `${innerWidth}px`;
        }
    }
reportWindowSize();
window.onresize = reportWindowSize;