import Play from './Incidents/Play';
import MyClip from './Incidents/Clip';

import pkg  from '../package.json'

export default {
  npm_name: pkg.name, 
  version: pkg.version,
  incidents: [
    {
      exportable: Play,
      name: "Play",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            fraction: {
                type: 'number',
                // min:0,
                // max:1
              }
          }
        }
      }
    },
  ],
  Clip: {
      exportable: MyClip,
      attributesValidationRules: {
        path:{
          type: "string",
          optional: false
        },
        autoloop:{
          type:"boolean",
          optional:true,
          default: false
        },
        renderer:{
          type:"string",
          optional: true,
          default: "svg"
        },
      }
  }
};