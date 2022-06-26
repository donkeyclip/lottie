import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MyPluginDefinition from "../dist/lottie.esm";
const MyPlugin = loadPlugin(MyPluginDefinition);

const clip = new HTMLClip({
  html: `<div class="container">
        <div id="myclip"></div>
    </div>`,
  css: `
        .container{
          width: 1440px;
          height: 1440px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
        }
        #myclip{
          width: 160px;
          height: 160px;
          transform: scale(5.5);
        }
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1440px",
    height: "1440px",
  },
});

const newCustomClip = new MyPlugin.Clip(
  {
    path: "https://donkeyclip.github.io/lottie/demo/demo.json",
    autoloop: false,
  },
  {
    selector: "#myclip",
  }
);

const play = new MyPlugin.Play(
  {
    animatedAttrs: {
      fraction: 0.5,
    },
  },
  {
    duration: 1500,
    selector: "!#lottie",
  }
);

const play2 = new MyPlugin.Play(
  {
    animatedAttrs: {
      fraction: 0.9999,
    },
  },
  {
    duration: 1500,
    selector: "!#lottie",
  }
);

newCustomClip.addIncident(play, 0);
newCustomClip.addIncident(play2, 1500);
clip.addIncident(newCustomClip, 0);

new Player({ clip, backgroundColor: "#fff", loop: true, autoplay: true });
