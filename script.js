document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.getElementById('startScreen');
    const startButton = document.getElementById('startButton');
    const mainContent = document.getElementById('mainContent');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Obsługa przycisku startowego
    startButton.addEventListener('click', function() {
        // Odtwórz muzykę po kliknięciu przycisku
        backgroundMusic.volume = 0.5;
        backgroundMusic.play();

        // Zanikanie czarnego ekranu
        startScreen.style.opacity = '0';
        setTimeout(() => {
            startScreen.style.display = 'none'; // Ukryj czarny ekran
            mainContent.style.display = 'block'; // Pokaż główną zawartość
        }, 2000); // Czekaj 2 sekundy (czas trwania animacji)
    });

    // Reszta kodu (bez zmian)
    const meowBtn = document.getElementById('meowBtn');
    const noMeowBtn = document.getElementById('noMeowBtn');
    const imageContainer = document.getElementById('imageContainer');

    function createCatPaws() {
        const numberOfPaws = 20;
        for (let i = 0; i < numberOfPaws; i++) {
            const paw = document.createElement('div');
            paw.classList.add('cat-paw');
            paw.style.left = `${Math.random() * 100}vw`;
            paw.style.top = `${Math.random() * 100}vh`;
            paw.style.animationDuration = `${Math.random() * 5 + 5}s`;
            document.body.appendChild(paw);
        }
    }

    createCatPaws();

    meowBtn.addEventListener('click', function() {
        imageContainer.innerHTML = '<img src="KOTEK.png" alt="Kotek" style="width: 200px; animation: fadeIn 1s ease-in-out;">';
    });

    noMeowBtn.addEventListener('click', function() {
        imageContainer.innerHTML = '<img src="AHA.png" alt="Aha" style="width: 200px; animation: fadeIn 1s ease-in-out;">';
    });
});
