window.addEventListener("load", function() {
    
    VANTA.FOG({
        el: "#vanta-bg-container",                  
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x0,
        midtoneColor: 0xae1c03,
        lowlightColor: 0x0,
        baseColor: 0x0,
        blurFactor: 0.90,
        speed: 1.20,
        zoom: 0.40
    });
    
    setTimeout(() => {
        vantaEffect.resize();
    }, 100);

    console.log("Efeito Vanta FOG iniciado com sucesso!");
});