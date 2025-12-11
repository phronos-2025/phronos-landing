/**
 * PHRONOS | The 2025 Observatory
 * Logic: Canvas Animation & Connection Handler
 */

document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Logo Animation Logic ---
    const canvas = document.getElementById('logo-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const colorInk = '#1A1A1A';
        const colorGold = '#B08D55';
        let rotation = 0;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = 18;

            // Ouroboros (Rotating Ring)
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(rotation);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0.3, Math.PI * 1.9); 
            ctx.strokeStyle = colorInk;
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Head & Eye
            const headAngle = Math.PI * 1.9;
            const headX = Math.cos(headAngle) * radius;
            const headY = Math.sin(headAngle) * radius;
            ctx.beginPath();
            ctx.arc(headX, headY, 4, 0, Math.PI * 2);
            ctx.fillStyle = colorInk;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(headX, headY, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = colorGold;
            ctx.fill();
            ctx.restore();

            // Core
            const pulse = (Math.sin(Date.now() / 400) + 1) / 2; 
            ctx.beginPath();
            ctx.arc(centerX, centerY, 6 + (pulse * 2), 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(176, 141, 85, 0.4)'; 
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
            ctx.fillStyle = colorGold;
            ctx.fill();

            rotation += 0.015;
            requestAnimationFrame(animate);
        }
        animate();
    }

    // --- 2. Button Connection Simulation ---
    const btnConnect = document.getElementById('btn-connect');
    const btnText = document.getElementById('btn-text');

    if (btnConnect) {
        btnConnect.addEventListener('click', () => {
            if (btnConnect.classList.contains('connected')) return;

            // Step 1: Initialize
            btnText.textContent = "INITIALIZING UPLINK...";
            btnConnect.style.cursor = 'wait';

            // Step 2: Simulate Delay (Handshake)
            setTimeout(() => {
                // Step 3: Success State
                btnConnect.classList.add('connected');
                btnText.textContent = "SIGNAL ESTABLISHED";
                btnConnect.style.cursor = 'default';
            }, 1500);
        });
    }
});