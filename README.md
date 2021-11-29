# lottie

## Installation

```bash
$ npm install --save @donkeyclip/lottie
# OR
$ yarn add @donkeyclip/lottie
```

## Importing

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import LottieDefinition from "@donkeyclip/lottie";
```

## Loading

```javascript
const Lottie = MotorCortex.loadPlugin(LottieDefinition);
```

## API

The Plugin exposes one Incident and one Clip:

### Clip

```javascript
const newCustomClip = new Lottie.Clip(
  {
    path: "https://donkeyclip.github.io/lottie/demo//demo.json",
    autoloop: false,
  },
  {
    selector: "#myclip",
  }
);
```

### Clip attrs

| Name     |                         Are                          | Values |
| -------- | :--------------------------------------------------: | -----: |
| path     |            the path of lottie.json fille             | string |
| autoloop | autoloop will auto play in loop the lottie animation |   bool |

### Play

```javascript
const play = new Lottie.Play(
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
```

### Play attrs

| Name     |                      Are                      |          Values |
| -------- | :-------------------------------------------: | --------------: |
| fraction | how many fractions of the clip will be played | num from 0 to 1 |

Demo:[https://donkeyclip.github.io/lottie/demo/](https://donkeyclip.github.io/lottie/demo/)

## License

[MIT License](https://opensource.org/licenses/MIT)

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
