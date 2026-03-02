/**
 * @file main.js
 * @application Generador de Paisaje Urbano Geométrico
 * @description Replica una imagen de edificios coloridos usando Canvas 2D API.
 * @date 2026-03-02
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('cityCanvas');
    const ctx = canvas.getContext('2d');

    // Configuración de colores (Extraídos de la imagen)
    const colors = {
        sky: '#F58233',      // Naranja
        grass: '#45A049',    // Verde
        buildings: [
            '#00AEEF',       // Celeste
            '#ED1C24',       // Rojo/Rosa
            '#FFD100',       // Amarillo
            '#2E3192',       // Azul Marino
            '#92278F'        // Púrpura
        ],
        window: '#A0D8F1',   // Azul claro
        door: '#1B4F72'      // Azul oscuro/Sombra
    };

    /**
     * Función principal de dibujo
     */
    function drawScene() {
        // 1. Fondo (Cielo y Pasto)
        drawRectangle(0, 70, 1000, 390, colors.sky);
        drawRectangle(0, 460, 1000, 40, colors.grass);

        // 2. Edificios (Configuración: x, y, ancho, alto, color, pisos)
        const buildingData = [
            { x: 90,  y: 210, w: 130, h: 250, c: colors.buildings[0], floors: 3 },
            { x: 265, y: 210, w: 130, h: 250, c: colors.buildings[1], floors: 3 },
            { x: 440, y: 150, w: 130, h: 310, c: colors.buildings[2], floors: 4 },
            { x: 615, y: 185, w: 130, h: 275, c: colors.buildings[3], floors: 3 },
            { x: 790, y: 265, w: 125, h: 195, c: colors.buildings[4], floors: 2 }
        ];

        buildingData.forEach(b => drawBuilding(b));
    }

    /**
     * Dibuja un rectángulo genérico
     */
    function drawRectangle(x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }

    /**
     * Dibuja un edificio con sus ventanas y puerta
     */
    function drawBuilding(b) {
        // Cuerpo del edificio
        drawRectangle(b.x, b.y, b.w, b.h, b.c);

        // Ventanas
        const winW = 22;
        const winH = 45;
        const gapX = 40;
        const gapY = 20;

        for (let i = 0; i < b.floors; i++) {
            // Ventana Izquierda
            drawRectangle(b.x + 20, b.y + 30 + (i * (winH + gapY)), winW, winH, colors.window);
            // Ventana Derecha
            drawRectangle(b.x + b.w - 20 - winW, b.y + 30 + (i * (winH + gapY)), winW, winH, colors.window);
        }

        // Puerta (Sombra en la base)
        const doorW = 35;
        const doorH = 45;
        drawRectangle(b.x + (b.w/2) - (doorW/2), b.y + b.h - doorH, doorW, doorH, 'rgba(0,0,0,0.2)');
    }

    drawScene();
});