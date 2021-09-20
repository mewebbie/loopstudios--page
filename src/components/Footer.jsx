function Footer() {
    return <footer>
        <div class="component-container flexrow space-btw">
            <div class="sub flexcol">
                <div class="logo-cont">
                    <img src={"./images/logo.svg"} alt=""/>
                </div>
                <nav class="flexrow">
                    <div><a href=' '>About</a></div>
                    <div><a href=' '>Careers</a></div>
                    <div><a href=' '>Events</a></div>
                    <div><a href=' '>Products</a></div>
                    <div><a href=' '>Support</a></div>
                </nav>
            </div>
            <div class="sub flexcol">
                <nav class="flexrow space-btw social-icons">
                    <div class="social-img"><img src={'./images/icon-facebook.svg'} alt=""/></div>
                    <div class="social-img"><img src={'./images/icon-twitter.svg'} alt=""/></div>
                    <div class="social-img"><img src={'./images/icon-pinterest.svg'} alt=""/></div>
                    <div class="social-img"><img src={'./images/icon-instagram.svg'} alt=""/></div>
                </nav>
                <div class="cpright">
                    © 2021 Loopstudios. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;