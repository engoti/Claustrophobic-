const canvas = document.getElementById('matrix-background');
const ctx = canvas.getContext('2d');

let fontSize = 16;
let columns;
let rainDrops;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    rainDrops = Array(columns).fill(1);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const arabe = 'أَ يَ وُ إِ أُ وْ كَ كِ كُ كِ كُ كَ سَ سِ سُ سِ سُ تَ تِ تُ تِ تُ نَ أَ نِ تُ تِ تُ هَ حِ فُ هَ حُ هَ مَ أَ مِ مُ هَ مُ يَ يَ وَ'
const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = arabe + katakana + latin + nums;

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();