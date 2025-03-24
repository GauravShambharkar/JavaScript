const card = document.querySelector('.card')
const dot = document.querySelector('.dot')

// card.addEventListener('mousemove', (location)=>{
    //         gsap.to('.dot',{
        //             x:location.x / 2 ,
        //             y:location.y / 2 ,
        //             duration: 0.3,
        
        //         })
        
        // })
        
card.addEventListener('mouseenter', (location)=>{
    console.log("entered");
    dot.style.display = 'block' 

        
    card.addEventListener('mousemove', (event) => {
        
        // Get the bounding rectangle of the card
        const rect = card.getBoundingClientRect();
        console.log(event);
        
        // Calculate the mouse position relative to the card
        const x = event.clientX - rect.left - 150; // Mouse X relative to card
        const y = event.clientY - rect.top - 100;  // Mouse Y relative to card
        
        // Animate the dot to follow the cursor
        gsap.to(dot, {
            x: x - dot.offsetWidth / 2, // Center the dot on the cursor
            y: y - dot.offsetHeight / 2, // Center the dot on the cursor
            duration: 0.2,
        });
    });
})

card.addEventListener('mouseleave', (location)=>{
    console.log("left");

    dot.style.display = 'none' 

})
