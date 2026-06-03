// function ask(question,yes, no){
//     if(confirm(question)) yes()
//     else no();
// }
// function f1(){
//     alert("You agreed");
// }
// function f2(){
//     alert("You cancelled the execution")
// }

// ask("Do you agree?",f1,f2);

// let sum= (a,b)=> a+b;
// console.log(sum(3,4));

// let ask= (question,yes,no)=> confirm(question)?yes():no();

// ask("Do you agree?",()=>alert("You agreed"),()=>alert("You cancelled"));
// let user={
//     'name': "Kandarp",
//     'age': 21,
//     'city': 'Lucknow'
// };
// user.country='India';
// console.log(user.age,user.city,user.country);
// let isEmpty=(obj)=>{
//     for (let prop in obj){
//         return false;  
//     }
//     return true;
// }
// let user={};
// alert(isEmpty(user));
// user.name='John';
// user.surname='Smith';
// user.name='Pete';
// delete user.name;
// alert(isEmpty(user));

// let ladder={
//     step:0,
//     up(){
//         this.step++;
//         return this
//     },
//     down(){
//         this.step--;
//         return this;
//     },
//     showStep(){
//         alert(this.step);
//         return this;
//     }
// }
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// let s="back-ground"
// let arr=s.split('-')
// alert(arr.join(""))


// let arr = [5, 3, 8, 1];
// function filterRange(arr,a,b){
//     return arr.filter(elem=> elem>=a && elem<=b)
// }
// alert(filterRange(arr,1,4));

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

