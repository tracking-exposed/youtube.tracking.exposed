function tutto() {
    // particlesJS("particles-js", p);
    particlesJS.load('primary--container', '/json/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
}