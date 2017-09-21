import Component, { tracked } from '@glimmer/component';

export default class FiberContainer extends Component {
  @tracked elapsed: number = 0;
  @tracked seconds: number = 0;
  @tracked dotsCount: number = 1000;

  startX: number = 0;
  startY: number = 0;
  intervalID: number;

  @tracked('elapsed', 'dotsCount')
  get style(): string {
    let elapsed = this.elapsed;
    let t = (elapsed / 1000) % 10;
    let scale = this.dotsCount / 1000;
    let scaleX = (1 + (t > 5 ? 10 - t : t) / 10) / (2.1 * scale);
    let scaleY = 0.7 / scale;

    return `
      position: absolute;
      transform-origin: 0 0;
      left: 50%;
      top: 50%;
      width: 10px;
      height: 10px;
      transform: scaleX(${scaleX}) scaleY(${scaleY}) translateZ(0.1px);
    `;
  }

  increaseDots() {
    this.dotsCount *= 2;
  }

  decreaseDots() {
    this.dotsCount *= .5;
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

  private tick() {
    this.seconds = (this.seconds % 10) + 1;
  }
}
