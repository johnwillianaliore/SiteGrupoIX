$(function () { // Equivalente a document.addEventListener('DOMContentLoaded', ...)

    // Garante que nenhum vídeo comece a tocar sozinho ao carregar a página.
    $('.secao-5-wrapper-container video').trigger('pause');

    let isSectionVisible = false;
    let usuarioInteragiuComSom = false;

    const icons = {
        play: `<svg class="icon-pause" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>`,
        pause: `<svg class="icon-play" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>`,
        muted: `<svg class="icon-muted" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>`,
        unmuted: `<svg class="icon-unmuted" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>`,
        restart: `<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg>`
    };

    function setupVideoControls(swiper) {
        $(swiper.slides).each(function() {
            const $slide = $(this);
            const $video = $slide.find('video');
            const $playPauseBtn = $slide.find('.secao-5-wrapper-play-pause-btn');
            const $muteBtn = $slide.find('.secao-5-wrapper-mute-btn');
            const $restartBtn = $slide.find('.secao-5-wrapper-restart-btn');

            if (!$video.length || !$playPauseBtn.length || !$muteBtn.length || !$restartBtn.length) return;

            if (!$playPauseBtn.html()) $playPauseBtn.html(icons.play + icons.pause);
            if (!$muteBtn.html()) $muteBtn.html(icons.muted + icons.unmuted);
            if (!$restartBtn.html()) $restartBtn.html(icons.restart);

            $playPauseBtn.toggleClass('paused', $video[0].paused);
            $muteBtn.toggleClass('muted', $video[0].muted);

            $playPauseBtn.on('click', () => $video[0].paused ? $video[0].play() : $video[0].pause());
            
            $muteBtn.on('click', () => {
                $video.prop('muted', !$video.prop('muted'));
                if (!$video.prop('muted')) {
                    usuarioInteragiuComSom = true;
                }
            });

            $restartBtn.on('click', () => {
                $video.prop('currentTime', 0);
                $video[0].play();
            });
            
            $video.on('play', () => $playPauseBtn.removeClass('paused'));
            $video.on('pause', () => $playPauseBtn.addClass('paused'));
            $video.on('volumechange', () => $muteBtn.toggleClass('muted', $video[0].muted));
        });
    }
    
    function handleVideoPlayback(swiper) {
        $(swiper.slides).each(function() {
            const $slide = $(this);
            const $video = $slide.find('video');
            if ($video.length) {
                if ($slide.hasClass('swiper-slide-active') && isSectionVisible) {
                    let playPromise = $video[0].play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => console.warn("Autoplay do vídeo ativo falhou.", error));
                    }
                    $video.prop('muted', false);
                } else {
                    $video[0].pause();
                    $video.prop('currentTime', 0);
                    $video.prop('muted', true);
                }
            }
        });
    }

    const carouselSelector = '#secao-5-wrapper-carousel';
    const $swiperContainer = $(carouselSelector);
    
    if ($swiperContainer.length) {
        const $originalSlides = $swiperContainer.find('.swiper-slide').clone();
        const $swiperWrapper = $swiperContainer.find('.swiper-wrapper');
        
        // Duplica os slides de forma mais simples com jQuery
        $swiperWrapper.append($originalSlides).append($originalSlides.clone());

        function animateSlides(swiperInstance) {
            $(swiperInstance.slides).each(function() {
                const slideProgress = this.progress;
                const absProgress = Math.abs(slideProgress);
                $(this).css({
                    'transform': 'scale(' + (1 - absProgress * 0.15) + ')',
                    'opacity': Math.max(1 - absProgress * 0.35, 0),
                    'zIndex': 10 - Math.floor(absProgress)
                });
            });
        }

        const mySwiper = new Swiper(carouselSelector, {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: -60,
            watchSlidesProgress: true,
            speed: 500,
            navigation: {
                nextEl: `${carouselSelector} .swiper-button-next`,
                prevEl: `${carouselSelector} .swiper-button-prev`
            },
            slideToClickedSlide: true,
            on: {
                init: function(swiper) {
                    animateSlides(swiper);
                    setupVideoControls(swiper);
                },
                transitionEnd: function(swiper) {
                    handleVideoPlayback(swiper);
                },
                progress: function(swiper) { animateSlides(swiper); },
                resize: function(swiper) { animateSlides(swiper); }
            }
        });

        const $section = $('.secao-5-wrapper-container');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isSectionVisible = entry.isIntersecting;
                handleVideoPlayback(mySwiper);
            });
        }, { threshold: 0.5 });

        if ($section.length) {
            observer.observe($section[0]);
        }
    }
});