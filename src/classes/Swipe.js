export default class Swipe {

    constructor(element, gap) {
        this.xDown   = null;
        this.yDown   = null;
        this.gap     = gap || 0;
        this.element = typeof (element) === 'string' ? document.querySelector(element) : element;
    }

    onLeft(callback) {
        this.onLeft = callback;

        return this;
    }

    onRight(callback) {
        this.onRight = callback;

        return this;
    }

    onUp(callback) {
        this.onUp = callback;

        return this;
    }

    onDown(callback) {
        this.onDown = callback;

        return this;
    }

    _reset() {
        this.xDown = null;
        this.yDown = null;
    }

    _handleHorizontal() {
        if (this.xDiff > this.gap && this.onLeft) {
            this.onLeft();
            this._reset();
            return;
        }

        if (this.xDiff < this.gap && this.onRight) {
            this.onRight();
            this._reset();
        }
    }

    _handleVertical() {
        if (this.yDiff > this.gap && this.onUp) {
            this.onUp();
            this._reset();
            return;
        }

        if (this.yDiff < this.gap && this.onDown) {
            this.onDown();
            this._reset();
        }
    }

    _handleTouchMove(event) {
        if (!this.xDown || !this.yDown) {
            return;
        }

        const xUp = event.touches[0].clientX;
        const yUp = event.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
            this._handleHorizontal();
        } else {
            this._handleVertical();
        }
    }

    run() {
        this.element.addEventListener('touchstart', function (event) {
            this.xDown = event.touches[0].clientX;
            this.yDown = event.touches[0].clientY;
        }.bind(this), {passive: true});

        this.element.addEventListener('touchmove', function (event) {
            this._handleTouchMove(event);
        }.bind(this), {passive: true});
    }
}
