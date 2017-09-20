import Component, { tracked } from '@glimmer/component';

export default class FiberContainer extends Component {
  @tracked elapsed: number = 0;
  @tracked seconds: number = 0;

  startX: number = 0;
  startY: number = 0;
  startS: number = 1000;

  intervalID: number;

  @tracked('elapsed')
  get style() {
    const elapsed = this.elapsed;
    const t = (elapsed / 1000) % 10;
    const scale = 1 + (t > 5 ? 10 - t : t) / 10;

    return `
      position: absolute;
      transform-origin: 0 0;
      left: 50%;
      top: 50%;
      width: 10px;
      height: 10px;
      background: #eee;
      transform: scaleX(${scale / 2.1}) scaleY(0.7) translateZ(0.1px);
    `;
  }

  didInsertElement() {
    let tick: Function = this.tick.bind(this);
    this.intervalID = setInterval(tick, 1000);

    var start = new Date().getTime();

    let update = () => {
      this.elapsed = new Date().getTime() - start;
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  tick() {
    this.seconds = (this.seconds % 10) + 1;
  }
}
