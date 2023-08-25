//ceci est le premier exo

let numero = [1, 2, 3, 4, 5, 6, 7, 8];
let resultat = [];

for (let i = 0; i < numero.length; i++) {
  if (numero[i] % 2 === 0) {
    resultat.push(numero[i]);
  }
}

console.log(resultat);

//ceci est le deuxieme exo 

let humain = [
  { name: "Mrcrab", age: 48, email: "Mrcrab@example.com" },
  { name: "sandi", age: 22, email: "sandi@example.com" },
  { name: "Bob", age: 28, email: "bob@example.com" },
  { name: "patric", age: 32, email: "patric@example.com" }
];

let plusde30ans = [];

for (let i = 0; i < humain.length; i++) {
  if (humain[i].age > 30) {
    plusde30ans.push(humain[i]);
  }
}

console.log(plusde30ans);

//ceci est le troisieme exo 

let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); 
console.log(stack[stack.length - 1]);
console.log(stack.pop());
console.log(stack.length === 0);
console.log(stack.pop()); 
console.log(stack.length === 0); 

//ceci est le quatieme exo 

let queue = [];

queue.push(10);
queue.push(20);
queue.push(30);

console.log(queue.shift()); 
queue.push(40);
queue.push(50);

console.log(queue.shift());
console.log(queue[0]);
console.log(queue.shift());
console.log(queue.length === 0); 
console.log(queue.shift());
console.log(queue.length === 0); 
 

//ceci est mon cinquiéme exo 

let phrase1 = "Hello, how are you?";

const voyelles = "aeiouAEIOU";

let phrase2 = "";

for (let i = 0; i < phrase1.length; i++) {
  if (voyelles.indexOf(phrase1[i]) === -1) {
    phrase2 += phrase1[i];
  }
}

console.log(phrase2); 

//ceci est mon sixiéme exo

let tableau1 = [1, 2, 3, 4, 5];
let tableau2 = [3, 4, 5, 6, 7];

let both = [];

for (let i = 0; i < tableau1.length; i++) {
  if (both.indexOf(tableau1[i]) === -1) {
    both.push(tableau1[i]);
  }
}

for (let i = 0; i < tableau2.length; i++) {
  if (both.indexOf(tableau2[i]) === -1) {
    both.push(tableau2[i]);
  }
}

console.log(both); 