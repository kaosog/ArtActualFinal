const pieces = document.querySelectorAll('.piece');

const centerX = 150;
const centerY = 150;
const startRadius = 800;
const spinDuration = 500; // or 1000 for a little longer

pieces.forEach((piece, index) => {
    const angleOffset = (index / pieces.length) * 2 * Math.PI;
    let angle = angleOffset;
    let radius = startRadius;

    piece.style.opacity = 1;

    const spinInterval = setInterval(() => {
        angle += 0.1;
        radius -= 3;

        const x = centerX + radius * Math.cos(angle) - 150;
        const y = centerY + radius * Math.sin(angle) - 150;

        piece.style.transform = `translate(${x}px, ${y}px) rotate(${angle * 180 / Math.PI}deg)`;
    }, 20);

    setTimeout(() => {
        clearInterval(spinInterval);
        piece.style.transition = "all 1s ease-in-out";
        piece.style.transform = `translate(0px, 0px) rotate(0deg)`;

        // Once last piece finishes
        if (index === pieces.length - 1) {
            setTimeout(() => {
                document.getElementById('fade-overlay').style.opacity = '0';
                // OPTIONAL: If you want to completely remove it after fade
                setTimeout(() => {
                    document.getElementById('fade-overlay').style.display = 'none';
                }, 1000); // After fade is done
            }, 1000); // wait for pieces to finish centering
        }
    }, spinDuration);
});