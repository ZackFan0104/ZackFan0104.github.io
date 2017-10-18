import m1, {n} from './module-1';
import m2 from './module-2';

window.onload = function() {
  console.log(n);
  m1();
  m2();
}
