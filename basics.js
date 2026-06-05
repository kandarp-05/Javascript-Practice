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

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// let delay=1000;
// let counter=0;
// let timerId=setTimeout(function tick(){
//     alert('Hi')
//     if(counter>5){
//         counter=0;
//         delay*=2;
//         console.log(delay);
//     }
//     counter++;
//     timerId=setTimeout(tick,delay);
// },delay);
// let calc={
//     add:(a,b)=>a+b,
//     sub:(a,b)=>a-b,
//     mul:(a,b)=>a*b,
//     div:(a,b)=>a/b,
// }
// alert(calc.add(5,7))
// alert(calc.sub(5,7))
// alert(calc.mul(5,7))
// alert(calc.div(5,7))

// let BMICalc=(w,h)=> w/(h**2)
// alert(BMICalc(67,1.78));

// let arr=[1,2,3,4,5,6,7];
// alert(arr.reduce(f1));
// function f1(total,curr,ind,arr){
//     return total+curr;
// }
// try{
//     abccc;
//     alert(abccc);
// } catch (err){
//     alert(err);
// }

// let promise= new Promise(function(resolve, reject){
//     setTimeout(()=>resolve("Done"),2000);
// })

// promise.then(
//     result=> alert(result),
//     error=>alert(error)
// );

// Promise.all([
//     new Promise(resolve=>setTimeout(()=>resolve(1),3000)),
//     new Promise(resolve=>setTimeout(()=>resolve(2),2000)),
//     new Promise(resolve=>setTimeout(()=>resolve(3),1000))
// ]).then(alert)

// let urls=[
//     'https://github.com/kandarp-05',
//     'https://www.w3schools.com/js/DEFAULT.asp',
//     'https://javascript.info/'
// ];
// Promise.allSettled(urls.map(url=>fetch(url))).then(results=>{
//     results.forEach((result, num)=>{
//         if (result.status=='fulfilled'){
//             alert(`${urls[num]}: ${result.value.status}`);
//         }
//         if (result.status=='rejected'){
//             alert(`${urls[num]}: ${result.reason}`);
//         }
//     });
// });

// async function f(){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("done"),1000);
//     })
//     let result=await promise;
//     alert(result);
// }
// f();
async function wait(){
    await new Promise(resolve=> setTimeout(resolve,1000 ));
    return 10;
}
function f(){
    wait().then(result=>alert(result))
}
f();