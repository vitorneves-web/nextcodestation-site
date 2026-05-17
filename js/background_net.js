window.addEventListener("load", function() {
    
    const vantaNetEffect = VANTA.NET({
        el: "#vanta-bg-container2",                  
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xb30000,
        backgroundColor: 0x0,
        spacing: 17.00,
        showDots: true
    });
    
    setTimeout(() => {
        if (vantaNetEffect && typeof vantaNetEffect.resize === 'function') {
            vantaNetEffect.resize();
        }
    }, 150);
    
    console.log("Efeito Vanta NET iniciado com sucesso!");
});