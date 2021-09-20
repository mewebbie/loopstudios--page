function Showcase(props) {
    return <div class="sc component-container">
        <div class="title-bar flexrow space-btw">
            <p class="font-josef">OUR CREATIONS</p>
            <input type="button" value="SEE ALL"/>
        </div>
        <div class="imgs-wrap grid-2-4">
        {props.imgObject.map((element) =>
            <div class="show-img-cont">
                <img class="show-img-img" src={element.src} alt=""/>
                <p class="figcap font-josef"><p>{element.caption.firstline}</p><p>{element.caption.secondline}</p></p>
            </div>
        )}
        </div>
        <div class="mobile title-bar flexrow space-btw">
            <p style={{display:'none'}} class="font-josef">OUR CREATIONS</p>
            <input type="button" value="SEE ALL"/>
        </div>
    </div>;
}

export default Showcase;