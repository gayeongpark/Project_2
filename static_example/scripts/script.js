


document.querySelectorAll('.room-seats .seat').forEach(seat => {
    // Added forEach seat an event listener 
    seat.addEventListener('click', function() {
        // Toogle active class 
         this.classList.toggle('active');
       });
});

 