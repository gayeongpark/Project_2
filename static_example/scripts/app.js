
// Select all seats with querSelectorAll -> give us an array [ all seats ]
const seat =  document.querySelectorAll('.room-seats .seat');

document.querySelectorAll('.room-seats .seat').forEach(seat => {
    // Added forEach seat an event listener 
    seat.addEventListener('click', function() {
        // Toogle active class 
         this.classList.toggle('active');
       });
});

 