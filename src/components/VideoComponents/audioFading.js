// Initial volume of 0.20
// Make sure it's a multiple of 0.05
let vol = 0.20;
let interval = 200; // 200ms interval

let fadeout = setInterval(
    function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol > 0) {
            vol -= 0.05;
            // audio.setVolume(vol);
        }
        else {
            // Stop the setInterval when 0 is reached
            clearInterval(fadeout);
        }
    }, interval);

// or $audio.animate({volume: newVolume}, 1000);