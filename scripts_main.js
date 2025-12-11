/**
 * PHRONOS | The 2025 Observatory
 * Logo Animation: The Ouroboros
 * * Logic handles the HTML5 canvas rendering for the rotating logo.
 */

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('logo-canvas');
    if (!canvas) return; // Guard clause if element missing

    const ctx = canvas.getContext('2d');
    
    // Brand Colors (Matching CSS variables)
    const colorInk = '#1A1A1A';
    const colorGold = '#B08D55';

    let rotation = 0;

    function animate() {
        // Clear canvas for next frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 18; // Base size

        // --- GROUP 1: The Ouroboros (Rotating Ring) ---
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);

        // The Serpent Body (Arc)
        ctx.beginPath();
        // Draw arc leaving a gap for the "bite" (0.3 to 1.9 PI)
        ctx.arc(0, 0, radius, 0.3, Math.PI * 1.9); 
        ctx.strokeStyle = colorInk;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.stroke();

        // The Serpent Head
        const headAngle = Math.PI * 1.9;
        const headX = Math.cos(headAngle) * radius;
        const headY = Math.sin(headAngle) * radius;

        ctx.beginPath();
        ctx.arc(headX, headY, 4, 0, Math.PI * 2);
        ctx.fillStyle = colorInk;
        ctx.fill();

        // The Eye (Gold detail inside head)
        ctx.beginPath();
        ctx.arc(headX, headY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = colorGold;
        ctx.fill();

        ctx.restore();

        // --- GROUP 2: The Core (Pulsing Center) ---
        const pulse = (Math.sin(Date.now() / 400) + 1) / 2; // Slow breath (0 to 1)
        
        // Outer faint ripple (Gold Dim)
        ctx.beginPath();
        ctx.arc(centerX, centerY, 6 + (pulse * 2), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(176, 141, 85, 0.4)'; 
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Inner hard point (Gold)
        ctx.beginPath();
        ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
        ctx.fillStyle = colorGold;
        ctx.fill();

        // --- ANIMATION LOOP ---
        rotation += 0.015; // Speed of rotation
        requestAnimationFrame(animate);
    }

    // Initialize
    animate();
});