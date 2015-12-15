var revealConfig = function revealConfig() {
  Reveal.initialize({
    // Many many options...

    // The "normal" size of the presentation, aspect ratio will be preserved
    // when the presentation is scaled to fit different resolutions. Can be
    // specified using percentage units.
    width: "100%",
    height: "105%",

    // Factor of the display size that should remain empty around the content
    margin: 0.1,

    // Bounds for smallest/largest possible scale to apply to content
    minScale: 1,
    maxScale: 1,

    // Display controls in the bottom right corner
    controls: false,
    // Display a presentation progress bar
    progress: true,
    // Display the page number of the current slide
    slideNumber: false,
    // Push each slide change to the browser history
    history: false,
    // Enable keyboard shortcuts for navigation
    keyboard: true, // >>>>>>>>>>>>>>>  DEBUG <<<<<<<<<<<<<<<
    // Enable the slide overview mode
    overview: false,
    // Vertical centering of slides
    center: true,
    // Enables touch navigation on devices with touch input
    touch: false,
    // Loop the presentation
    loop: false,
    // Change the presentation direction to be RTL
    rtl: false,  // Inverts the slide flow direction
    // Turns fragments on and off globally
    fragments: false,
    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,
    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: false,
    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 15000, //45000
    // Stop auto-sliding after user input
    autoSlideStoppable: false,
    // Enable slide navigation via mouse wheel
    mouseWheel: false,
    // Hides the address bar on mobile devices
    hideAddressBar: true,
    // Opens links in an iframe preview overlay
    previewLinks: false,
    // Transition style
    transition: 'convex', // none/fade/slide/convex/concave/zoom
    // Transition style for full page slide backgrounds
    backgroundTransition: 'default', // none/fade/slide/convex/concave/zoo
    // Number of slides away from the current that are visible
    viewDistance: 6,
    // Parallax background image
    parallaxBackgroundImage: '../images/background.jpg', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
    // Parallax background size
    parallaxBackgroundSize: '2100px 1080px', // CSS syntax, e.g. "2100px 900px"

    leap: {
      autoCenter     : true,
      naturalSwipe   : true,    // Invert swipe gestures
    },

    dependencies: [
       { src: '../lib/reveal.js-master/plugin/leap/leap.js', async: true }
    ]
  });
}
