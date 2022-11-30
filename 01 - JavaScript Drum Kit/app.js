window.addEventListener('keydown', function(e) {
    console.log('event is ' + e);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    console.log(audio);
    if (!audio) return;
    audio.play();
})