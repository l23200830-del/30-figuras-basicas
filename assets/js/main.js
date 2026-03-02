/**
 * APP: Kinetic Canvas Studio
 * DESCRIPTION: Premium UI con animaciones de scroll basadas en GSAP.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar AOS (Animaciones de entrada)
    AOS.init({ once: false });

    // 2. Registro de Plugins GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 3. Animación de Estiramiento de Tipografía
    // El texto se expande y "alarga" al hacer scroll
    gsap.to(".hero-title", {
        scrollTrigger: {
            trigger: ".hero-title",
            start: "top 20%",
            end: "bottom top",
            scrub: true // Sincroniza la animación con el movimiento del mouse
        },
        scaleY: 1.5,
        letterSpacing: "0.2em",
        opacity: 0.1,
        filter: "blur(10px)"
    });

    // 4. Lógica del Canvas (Mantenemos tu código técnico impecable)
    const canvas = document.getElementById('cityCanvas');
    const ctx = canvas.getContext('2d');

    const drawCity = () => {
        // Fondo
        ctx.fillStyle = '#F58233'; ctx.fillRect(0, 50, 1000, 400);
        ctx.fillStyle = '#45A049'; ctx.fillRect(0, 450, 1000, 50);

        const buildings = [
            {x: 80, y: 210, w: 130, h: 240, c: '#00AEEF', f: 3},
            {x: 260, y: 210, w: 130, h: 240, c: '#ED1C24', f: 3},
            {x: 440, y: 140, w: 130, h: 310, c: '#FFD100', f: 4},
            {x: 620, y: 180, w: 130, h: 270, c: '#2E3192', f: 3},
            {x: 800, y: 260, w: 130, h: 190, c: '#92278F', f: 2}
        ];

        buildings.forEach(b => {
            ctx.fillStyle = b.c;
            ctx.fillRect(b.x, b.y, b.w, b.h);
            
            // Ventanas minimalistas
            ctx.fillStyle = '#A0D8F1';
            for(let i=0; i<b.f; i++) {
                ctx.fillRect(b.x + 25, b.y + 30 + (i*60), 25, 40);
                ctx.fillRect(b.x + b.w - 50, b.y + 30 + (i*60), 25, 40);
            }
        });
    };

    drawCity();
});