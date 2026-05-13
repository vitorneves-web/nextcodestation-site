const reels = document.querySelectorAll('.reel');

reels.forEach(reel => {

    const video = reel.querySelector('.reel-video');
    const button = reel.querySelector('.play-btn');

    button.addEventListener('click', () => {

        reels.forEach(otherReel => {

            const otherVideo = otherReel.querySelector('.reel-video');
            const otherButton = otherReel.querySelector('.play-btn');

            if (otherVideo !== video) {

                otherVideo.pause();

                otherButton.innerHTML = '<i class="bi bi-play-fill"></i>';

            }

        });

        if (video.paused) {

            video.play();

            button.innerHTML = '<i class="bi bi-pause-fill"></i>';

        } else {

            video.pause();

            button.innerHTML = '<i class="bi bi-play-fill"></i>';

        }

    });

    video.addEventListener('ended', () => {

        button.innerHTML = '<i class="bi bi-play-fill"></i>';

    });

});