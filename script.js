const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
window.addEventListener('mousemove', (e) => {
    for(let i=0; i<5; i++) {
        particles.push({
            x: e.clientX, y: e.clientY,
            vx: Math.random() * 4 - 2, vy: Math.random() * 4 - 2,
            size: Math.random() * 5 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }
});

function animate() {
    ctx.fillStyle = 'rgba(15, 15, 15, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy; p.size *= 0.95;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        if(p.size < 0.5) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
}
animate();
              
