import Component, { tracked } from '@glimmer/component';

export default class FiberDot extends Component {
  @tracked hover = false;

  @tracked('args', 'hover')
  get text() {
    return this.hover ? '**' + this.args.text + '**' : this.args.text;
  }

  @tracked('args', 'hover')
  get style() {
    let size = this.args.size * 1.3;

    return `
      position: absolute;
      font: normal 15px sans-serif;
      text-align: center;
      cursor: pointer;
      width: ${size}px;
      height: ${size}px;
      left: ${this.args.x}px;
      top: ${this.args.y}px;
      border-radius: ${size / 2}px;
      line-height: ${size}px;
      background: ${this.hover ? '#ff0' : '#61dafb'};
    `;
  }

  onEnter() {
    this.hover = true;
  }

  onLeave() {
    this.hover = false;
  }
}
