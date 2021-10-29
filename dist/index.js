import { packd_export_3 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { __decorate,__metadata } = packd_export_3;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { html,css,LitElement } = packd_export_0;;
import { packd_export_2 } from 'https://srv.divriots.com/packd/lit,lit-html@next-major,lit/decorators.js,tslib';const { customElement,property } = packd_export_2;;
import ghostHide from './ghostHideURI.js';
import ghost from './ghostURI.js';
function rangeMap(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
let FlyingBoo = class FlyingBoo extends LitElement {
    constructor() {
        super(...arguments);
        this.hidden = false;
        this.xDirection = 'right';
        this.changeSpeed = 5000;
        this.speed = 1;
        this.scareDistance = 100;
    }
    static get styles() {
        return css `
      :host {
        position: absolute;
        display: block;
        --scale-x: 1;
        z-index: 999999;
      }

      :host([x-direction="right"]) {
        --scale-x: -1;
      }

      img {
        width: 80px;
        transform: scaleX(var(--scale-x));
      }
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.parentElement !== document.documentElement) {
            document.documentElement.prepend(this);
        }
        else {
            this.init();
        }
    }
    render() {
        return html `
      <img src="data:image/gif;base64,${this.hidden ? ghostHide : ghost}" />
    `;
    }
    get frameWidth() {
        return document.documentElement.getBoundingClientRect().width;
    }
    get frameHeight() {
        return document.documentElement.getBoundingClientRect().height;
    }
    get x() {
        return parseFloat(getComputedStyle(this).getPropertyValue('left').replace('px', ''));
    }
    set x(value) {
        this.style.setProperty('left', `${value}px`);
        if (value > this.frameWidth - this.getBoundingClientRect().width) {
            this.boundaryHit('right');
        }
        if (value < 0) {
            this.boundaryHit('left');
        }
    }
    get y() {
        return parseFloat(getComputedStyle(this).getPropertyValue('top').replace('px', ''));
    }
    set y(value) {
        this.style.setProperty('top', `${value}px`);
        if (value >
            this.frameHeight - this.getBoundingClientRect().height) {
            this.boundaryHit('bottom');
        }
        if (value < 0) {
            this.boundaryHit('top');
        }
    }
    init() {
        const xMiddle = this.frameWidth / 2;
        const yMiddle = document.documentElement.clientHeight / 2;
        this.x = xMiddle;
        this.y = yMiddle;
        this.randomizeVelocity();
        this.move();
        document.documentElement.addEventListener('mousemove', (ev) => {
            this.checkDistance({ x: ev.pageX, y: ev.pageY });
        });
    }
    randomizeVelocity(forced = {}) {
        const { x: _x, y: _y } = forced;
        const x = _x || rangeMap(Math.random(), 0, 1, -1, 1);
        const y = _y || rangeMap(Math.random(), 0, 1, -1, 1);
        this.velocity = { x, y };
        this.xDirection = x > 0 ? 'right' : 'left';
    }
    move() {
        this.hidden = false;
        this.startVelocityInterval();
        this.moveInterval = setInterval(() => {
            this.x = this.x + this.velocity.x * this.speed;
            this.y = this.y + this.velocity.y * this.speed;
        }, 1);
    }
    hide() {
        clearInterval(this.moveInterval);
        clearInterval(this.velocityInterval);
        this.hidden = true;
    }
    startVelocityInterval() {
        this.velocityInterval = setInterval(() => this.randomizeVelocity(), this.changeSpeed);
    }
    boundaryHit(side) {
        clearInterval(this.velocityInterval);
        switch (side) {
            case 'right':
                this.randomizeVelocity({ x: rangeMap(Math.random(), 0, 1, -0.5, -1) });
                break;
            case 'left':
                this.randomizeVelocity({ x: rangeMap(Math.random(), 0, 1, 0.5, 1) });
                break;
            case 'top':
                this.randomizeVelocity({ y: rangeMap(Math.random(), 0, 1, 0.5, 1) });
                break;
            case 'bottom':
                this.randomizeVelocity({ y: rangeMap(Math.random(), 0, 1, -0.5, -1) });
                break;
        }
        this.startVelocityInterval();
    }
    checkDistance(coords) {
        const xDistance = Math.abs(this.x + this.getBoundingClientRect().width / 2 - coords.x);
        const yDistance = Math.abs(this.y + this.getBoundingClientRect().height / 2 - coords.y);
        const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
        if (distance < this.scareDistance && !this.hidden) {
            this.hide();
        }
        if (distance >= this.scareDistance && this.hidden) {
            this.randomizeVelocity();
            this.move();
        }
    }
};
__decorate([
    property({ attribute: false }),
    __metadata("design:type", Object)
], FlyingBoo.prototype, "hidden", void 0);
__decorate([
    property({ type: 'String', reflect: true, attribute: 'x-direction' }),
    __metadata("design:type", Object)
], FlyingBoo.prototype, "xDirection", void 0);
__decorate([
    property({ type: 'Number', reflect: true, attribute: 'change-speed' }),
    __metadata("design:type", Object)
], FlyingBoo.prototype, "changeSpeed", void 0);
__decorate([
    property({ type: 'Number', reflect: true }),
    __metadata("design:type", Object)
], FlyingBoo.prototype, "speed", void 0);
__decorate([
    property({ type: 'Number', reflect: true, attribute: 'scare-distance' }),
    __metadata("design:type", Object)
], FlyingBoo.prototype, "scareDistance", void 0);
FlyingBoo = __decorate([
    customElement('flying-boo')
], FlyingBoo);
export { FlyingBoo };
export const cleanup = (tagName = 'flying-boo') => {
    Array.from(document.querySelectorAll(tagName)).forEach(ghostEl => ghostEl.remove());
};
//# sourceMappingURL=index.js.map