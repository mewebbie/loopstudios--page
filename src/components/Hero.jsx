
function Hero() {
    return <header>
        
        <div class="component-container hero">
            <div class="banner-mobile dnone">
                <div><img src={'./images/logo.svg'} alt=""/></div>
                <div class="mobile-icon-close"><img src={'./images/icon-close.svg'} alt=""/></div>
            </div>
            <div class="hero banner">
                <div class="logo-cont"><img src={'./images/logo.svg'} alt='loopstudios-logo'/></div>
                <div class="dnone hamburger"><img src={"./images/icon-hamburger.svg"} alt=""/></div>
                <nav class="flexrow">
                    <div><a href=' '>About</a></div>
                    <div><a href=' '>Careers</a></div>
                    <div><a href=' '>Events</a></div>
                    <div><a href=' '>Products</a></div>
                    <div><a href=' '>Support</a></div>
                </nav>
            </div>
            <section class="font-josef">
                <p><p>Immersive</p> <p>Experiences</p> <p>that <span>deliver</span></p></p>
            </section>
        </div>
    </header>
}

export default Hero;