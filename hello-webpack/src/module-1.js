import _ from 'lodash';
import './module-1.css';


export default function() {
  var el = document.querySelector('#module-1');

  let module = Symbol('module 1');
  el.textContent = `Hello ${module.toString()}`;
  console.log('test123');
};

// export class User {
//     constructor(name) {
//       this.name = name;
//     }
//     greet(){
//       return `I\'m ${this.name}`;
//     }
//     static yell(){
//       return `Ahh~~ ${this.name}`;
//     }
//   }

export var n = 500;
