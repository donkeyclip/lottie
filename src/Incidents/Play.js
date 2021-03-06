import { Effect } from "@donkeyclip/motorcortex";

export default class MyEffect extends Effect {
  getScratchValue() {
    return 0;
  }

  onGetContext() {}

  onProgress(ms) {
    const lottie = this.element.entity;
    lottie.goToAndStop(
      ((this.targetValue - this.initialValue) * this.getFraction(ms) +
        this.initialValue) *
        lottie.totalFrames,
      true
    );
  }
}
