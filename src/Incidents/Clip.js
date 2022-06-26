import { BrowserClip } from "@donkeyclip/motorcortex";
import lottieWeb from "lottie-web";

export default class MyClip extends BrowserClip {
  onAfterRender() {
    const animation = lottieWeb.loadAnimation({
      container: this.context.rootElement,
      path: this.attrs.path,
      renderer: this.attrs.renderer || "svg",
      loop: this.attrs.autoloop || false,
      autoplay: this.attrs.autoloop || false,
      name: "Gabishlagya",
    });
    this.setCustomEntity("lottie", animation);
  }
}
