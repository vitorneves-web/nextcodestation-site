(function() {
    const initCarrosselReels = () => {
        const secaoVideos = document.querySelector(".videos");
        const container = document.querySelector(".videos .reels");
        const btnEsq = document.querySelector(".seta-esquerda");
        const btnDir = document.querySelector(".seta-direita");

        if (!container) return;

        // CORREÇÃO DIRETA VIA JS: Força a seção e elementos a ficarem visíveis ao mouse,
        // neutralizando qualquer película invisível criada pelo contêiner do Vanta.js
        if (secaoVideos) {
            secaoVideos.style.position = "relative";
            secaoVideos.style.zIndex = "20";
        }
        
        const carrosselContainer = container.closest(".carrossel-container");
        if (carrosselContainer) {
            carrosselContainer.style.position = "relative";
            carrosselContainer.style.zIndex = "30";
        }

        // Força os botões e os cards a receberem cliques
        container.style.pointerEvents = "auto";
        if (btnEsq) btnEsq.style.zIndex = "100";
        if (btnDir) btnDir.style.zIndex = "100";

        let isMoving = false;
        let startPositionX;
        let currentScrollLeft;

        // 1. COMPORTAMENTO DE ARRASTAR (Mouse Drag)
        container.addEventListener("mousedown", (e) => {
            isMoving = true;
            container.classList.add("active");
            startPositionX = e.clientX;
            currentScrollLeft = container.scrollLeft;
        });

        window.addEventListener("mouseup", () => {
            if (!isMoving) return;
            isMoving = false;
            container.classList.remove("active");
        });

        window.addEventListener("mouseleave", () => {
            if (!isMoving) return;
            isMoving = false;
            container.classList.remove("active");
        });

        container.addEventListener("mousemove", (e) => {
            if (!isMoving) return;
            e.preventDefault();
            // Calcula o deslocamento do mouse multiplicando por um fator de sensibilidade (1.8)
            const deslocamento = (e.clientX - startPositionX) * 1.8;
            container.scrollLeft = currentScrollLeft - deslocamento;
        });

        // 2. COMPORTAMENTO DAS SETAS (Scroll via clique)
        // Largura do card (280px) + Gap do flex (32px) = 312px por salto
        const espacoDeSalto = 312; 

        if (btnEsq) {
            btnEsq.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.scrollBy({ left: -espacoDeSalto, behavior: "smooth" });
            });
        }

        if (btnDir) {
            btnDir.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                container.scrollBy({ left: espacoDeSalto, behavior: "smooth" });
            });
        }
    };

    // Inicialização segura garantindo que o DOM está pronto
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initCarrosselReels);
    } else {
        initCarrosselReels();
    }
})();