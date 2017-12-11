import _ from 'lodash';
import './module-2.css';
//import User from './module-1.js';

export default function() {
  var el = document.querySelector('#module-2');
  el.textContent = _.join(['Module', '2'], ' ');
};


// export class Vip extends User {
//     constructor(name) {
//       super(name);
//     }
//     greet(){
//       console.log(`I\'m VIP, ${this.name}`);
//     }
// }
