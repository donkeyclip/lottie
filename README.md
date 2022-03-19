# Lottie

**Table of Contents**

- [Lottie](#lottie)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [Clip](#clip)
  - [Play](#play)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/lottie/demo/)

# Intro / Features
Lottie brings some capabilities of [Lottie](http://airbnb.io/lottie/#/) Library into MotorCortex.
Lottie plugin helps you control a lottie file which is a JSON-based animation file format with small size. With this Plugin you can manipulate your lottie any way you like and create unique animations.

The Plugin exposes two Incidents in total:
* Clip
* Play Incident

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/lottie
# OR
$ yarn add @donkeyclip/lottie
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import LottieDefinition from "@donkeyclip/lottie";
const Lottie = loadPlugin(LottieDefinition);
```
# Creating Incidents

## Clip

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

## Play

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

# Adding Incidents in your clip

```javascript
lottieClip.addIncident(playIncident, startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
