import m1, {n} from './module-1';
import m2 from './module-2';

window.onload = function() {
  console.log(n);
  m1();
  m2();

  function f1(x,y=12) {
    return x + y ;
  }
  console.log(f1(3,1));

  function f2(x, ...y) {
    return x * y.length;
  }
  console.log(f2(3, 'Fuck', true));

  function f3(x, y, z) {
    return x + y + z;
  }
  console.log(f3(...[1, 2, 3]));

  // let num1 = [1,2,3,4];
  // let nums2 = num1.map((v, i) => v + i);
  // console.log(nums2);

  let user = {
    name : 'Bob',
    friends : ['Alice', 'John'],
    greet(){
      this.friends.forEach(f => {
        console.log('Hi' + f + ", I'm " + this.name);
      })
    },
    [Symbol.iterator] : function * () {
      for (let i = 0; i < this.friends.length; i++){
        yield this.friends[i];
      }
    }
  }
  for (let f of user){
    console.log(`${user.name} say hi to ${f}`);
  }
  // let {name : n, friends : f} = user;
  // console.log(n);
  // console.log(f);
  //
  // function f4({name = 'Alice'}){
  //   return name;
  // }



  // user.greet();

  // new User('Zack');
  // console.log(User.yell());



  // let arr = [3, 5, 7];
  // arr.foo = 'bar';
  // for (let i in arr){
  //   console.log(i);
  // }


}
