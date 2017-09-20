import Component, { tracked } from '@glimmer/component';

export default class FiberTriangle extends Component {
  targetSize: number = 25;

  @tracked('args')
  get showDot() {
    return this.args.s <= this.targetSize;
  }

  @tracked('args')
  get nextS() {
    return this.args.s / 2;
  }

  @tracked('args')
  get positions() {
    let s = this.nextS;

    return {
      dot: {
        x: this.args.x - (this.targetSize / 2),
        y: this.args.y - (this.targetSize / 2)
      },

      top: {
        x: this.args.x,
        y: this.args.y - (s / 2)
      },
      middle: {
        x: this.args.x - s,
        y: this.args.y + (s / 2)
      },
      bottom: {
        x: this.args.x + s,
        y: this.args.y + (s / 2)
      }
    };
  }
}
