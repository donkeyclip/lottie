import MotorCortex from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MyPluginDefinition from "../dist/lottie.esm";
const MyPlugin = MotorCortex.loadPlugin(MyPluginDefinition);

const clip = new MotorCortex.HTMLClip({
  html: `<div class="container">
        <div id="myclip"></div>
    </div>`,
  css: `
        .container{
            width: 1440px;
            height: 1440px;
        }
        .container>div{
          width: 1440px;
          height: 1440px;
        }
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1440px",
    height: "1440px",
  },
});


const newCustomClip = new MyPlugin.Clip({

  path:"./dots-backgorund.json",
  autoloop: false
},{
  selector: "#myclip",
});

const play = new MyPlugin.Play({
  animatedAttrs:{
    fraction: .5
  }
},{
  duration:3000,
  selector: "!#lottie"
})

const play2 = new MyPlugin.Play({
  animatedAttrs:{
    fraction: 1
  }
},{
  duration:3000,
  selector: "!#lottie"
})

newCustomClip.addIncident(play,0);
newCustomClip.addIncident(play2,3000);
clip.addIncident(newCustomClip, 0);

const player = new Player({ clip });
