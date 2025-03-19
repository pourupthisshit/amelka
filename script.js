document.addEventListener('DOMContentLoaded', function() {
    const meowBtn = document.getElementById('meowBtn');
    const noMeowBtn = document.getElementById('noMeowBtn');
    const imageContainer = document.getElementById('imageContainer');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Ustaw głośność muzyki na 50%
    backgroundMusic.volume = 0.5;
    backgroundMusic.play();

    // Funkcja do tworzenia kocich łapek w tle
    function createCatPaws() {
        const numberOfPaws = 20; // Liczba łapek
        for (let i = 0; i < numberOfPaws; i++) {
            const paw = document.createElement('div');
            paw.classList.add('cat-paw');

            // Losowa pozycja początkowa
            paw.style.left = `${Math.random() * 100}vw`;
            paw.style.top = `${Math.random() * 100}vh`;

            // Losowa prędkość animacji
            paw.style.animationDuration = `${Math.random() * 5 + 5}s`;

            // Losowy kierunek ruchu
            paw.style.animationName = `movePaw${i % 2 === 0 ? 'Left' : 'Right'}`;

            document.body.appendChild(paw);
        }
    }

    // Wywołanie funkcji do tworzenia łapek
    createCatPaws();

    // Obsługa przycisków
    meowBtn.addEventListener('click', function() {
        imageContainer.innerHTML = '<img src="KOTEK.png" alt="Kotek" style="width: 200px; animation: fadeIn 1s ease-in-out;">';
    });

    noMeowBtn.addEventListener('click', function() {
        imageContainer.innerHTML = '<img src="AHA.png" alt="Aha" style="width: 200px; animation: fadeIn 1s ease-in-out;">';
    });
});