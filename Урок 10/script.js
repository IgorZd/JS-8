'use strict'

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.textBlock = function() {
    let className = this.selector.substring(1);
    if (isNaN(this.selector) && (this.selector.substring(0, 1) == '.')) {
        className = this.selector.substring(1);
        document.body.innerHTML = '<div class =' + className + '>Созданный блок</div>';
        let div = document.querySelector(`.${className}`);
        div.style.cssText = 'Height: ' + this.height + '; width: ' + this.width + '; background: ' + this.bg + '; font-size: ' + this.fontSize;
    } else if (isNaN(this.selector) && (this.selector.substring(0, 1) == '#')) {
        className = this.selector.substring(1);
        document.body.innerHTML = '<p id=' + className + '>Созданный параграф</p>';
        let paragraph = document.querySelector(`#${className}`);
        paragraph.style.cssText = 'Height: ' + this.height + '; width: ' + this.width + '; background: ' + this.bg + '; font-size: ' + this.fontSize;
    }
}
let newDom = new DomElement('#text', '100px', '200px', 'blue', '30px');
newDom.textBlock();