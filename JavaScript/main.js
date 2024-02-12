// //wait the window to load
// window.onload= function(){   
//     document.querySelector("h1").style.color ="Blue";
// };

// //window.alert("Hello"); 

// document.write("<h1>Hello <span> page </span><h1>");
// // console in web api (application programming interface)
// console.log("Hello from js file");
// console.error("error");
// console.table(["osama","ahmed","ali"]);
// //Directive %c 
// console.log("Hello %cWorld in %cJS File", "color:red; font-size: 40px", "color:blue; font-size: 40px");

// //video 9)ES (EcmaScript)
// var myname = "qassem";
// console.log("Hello "+myname);

// //video 10)Data Types
// console.log("qassem shaban");
// console.log(typeof "qassem shaban");
// console.log(typeof"5000");
// console.log(typeof"5000.99");
// //arry => object
// console.log(typeof[10, 15, 17]);
// console.log(typeof["Os", "Ah", "Sa"]);
// //object
// console.log(typeof{name: "Osama" , age: 17, country: "Eg"});
// //boolean
// console.log(typeof true);
// console.log(typeof false);
// //undefined
// console.log(typeof undefined);
// //null
// console.log(typeof null);


// //video 11) variables
// var user ="Osama", age =17;
// console.log(user);
// console.log(user);
// console.log(user);
// console.log(age);
// console.log(hello);
// hello.innerHTML = "option";

// //video 12)
// //identifer and rules 
// //not start with number , not contains space or spicial characters 
// //Case sensitive  
// //Keywords
// //camal case like -->  userName , nationalNumber

// //video 13)
// var s = 5;   //redeclare inable
// var s = 6;   //redeclare inable
// let a = 1;   //redeclare diable
// const b =2;   //redeclare disable
// console.log(a);

// //video 14)
// console.log("ELZERO Web 'School'"); //single inner double 
// console.log('ELZERO Web "School"');  // double inner single 
// console.log("ELZERO Web \"School\"");  // or two double coat but using back eslash
// console.log('ELZERO Web \'School\'');  // or two single coat but using back eslash
// console.log("ELZERO \\Web \"School\""); // two back eslash to print one back eslash
// console.log("ELZERO\
// Web\
// School");   // back eslash to ignor new line
// console.log("ELZERO \nWeb \nSchool"); // \n to new line

// //video 15) Concatenation
// let a = "We Love";
// let b = " JavaScript";
// document.write(a + b);
// document.write(a + " " + b);
// console.log(a, b); // print with space between a,b 

// //video 16) timplate literals(template strings)
// let a = "We Love";
// let b = " JavaScript";
// let c = "and";
// let d = "Programming";

// console.log(a , b, c, d);
// console.log(a +" "+ b +" "+ c +" "+ d);           //space
// console.log(`${a} ${b} ${c} ${d}`)  //bag tik  //  حرف الذال لكتابه العلامتين   // space

// console.log(a +" "+ b +"\n"+ c +" "+ d);  // new line  
// console.log(`${a} ${b}
// ${c} ${d}`)  //bag tik    // new line

// console.log(a +"\"\" "+ b +" "+ c +" "+ d);      // double coute and single
// console.log(`${a} ${b} ""${c} ${d}`)    //bag tik   double coute and single

// console.log(a +" \\"+ b +" "+ c +" "+ d);       // back eslash
// console.log(`${a} ${b} \\${c} ${d}`)  //bag tik    // back eslash

// console.log(`${100*5}`); 

// let Title ="elzero";
// let desc ="web school";
// let markUp = `
//     <div class="card">
//         <div class="chaild">
//             <h2>"Hello "${Title}</h>
//             <P>${desc}>
//             <span> ${25/5}</span>
//         </div>
//     </div>
// `;
// //video 17) //task (1) 
////repate four times
// document.write(markUp);
// document.write(markUp);
// document.write(markUp);
// document.write(markUp);

// //video 18) arithmetic operators
// console.log(10 + 20);
// console.log(10 + "Qassem");  //  final value = 10Qassem

// console.log(10-20); //-10
// console.log(10-"Osama");  // NaN
// console.log(typeof Nan);
// console.log(10 * 20);
// console.log(10 / 5);
// console.log(2 ** 4);  // 16
// console.log(11 % 2) //1

// let a=2;
// a++  //(post) print 2  --> a=3  //incement
// ++a  //(pre)  print 3  --> a=3 
// a--  //(post) print 2  --> a=1   //decrement
// --a  //(pre)  print 1  --> a=1

// //video 19)
//     // umary plus 
// console.log(+100);  // number
// console.log(+"100");  //convert to number (100)
// console.log(+"-100");    //number (-100)
// console.log(+"qassem");  //NAN
// console.log(+"10.5");    //10.5
// console.log(+0xff); // 255
// console.log(+null);   // 0
// console.log(+false);  // 0
// console.log(+true);   // 1
//     //negation operators
// console.log(-100);  // number
// console.log(-"100");  //convert to number (-100)
// console.log(-"-100");    //number (+100)
// console.log(-"qassem");  //NAN
// console.log(-"10.5");    //-10.5
// console.log(-0xff); // -255
// console.log(-null);   // -0
// console.log(-false);  // -0
// console.log(-true);   // -1

// console.log(Number("100"));   // number 100

// //video 20) type coercion
// let a ="10";
// let b= 20;
// let c = true;
// console.log(a + b); //1020
// console.log(+a + b); // 10+20 = 30
// console.log(+"" -2); //-2
// console.log(false-true);  // -1
// console.log(a + b );   // 21
// console.log(a +b +c);  // 1020true  error
// console.log(+a +b +c);  // 31

// //video 21) assignment operator
// let a = 10;
// a = a + 20;  //30
// a = a + 70;  //100
// a += 10;     //110
// a -= 10;     //100 
// a /= 2;      //50
// console.log(a); //50

////video 22) task 2) very easy

// //video 23) Number
// console.log(1_000_000);  //1000000
// console.log(1e6);        //1000000
// console.log(10**6);      //1000000
// console.log(1000000.0)   //1000000

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);

// //video 24) Method
// console.log((100).toString()); 
// console.log(100..toString());

// console.log(100.555555.toFixed(2));  //100.56  
// console.log(parseInt("100"));        //number 100
// console.log(parseInt("100 qassem")); //number 100
// console.log(parseInt("qassem 100 qassem"));  //NAN
// console.log(parseFloat("100 qassem")); //number 100
// console.log(parseFloat("100.500 qassem")); // number 100.5
// console.log(parseInt("100.500 qassem")); // number 100

// console.log(Number.isInteger("100"));    //false
// console.log(Number.isInteger(100.500));  //false
// console.log(Number.isInteger(100));      //true

// console.log(Number.isNaN("qassem"));  //false
// console.log(Number.isNaN("qassem /20")); //true

// //video 25) math object
// console.log(Math.round(99.2));   // 99     float < .5
// console.log(Math.round(99.5));   // 100    float >= .5
// console.log(Math.ceil(99.2));   // 100
// console.log(Math.floor(99.9));   // 99
// console.log(Math.min(10,20,100,-100,90));    // -100
// console.log(Math.max(10,20,100,-100,90));    // 100
// console.log(Math.pow(2, 4));    // 16
// console.log(Math.random());    // random value
// console.log(Math.trunc(99.5));    // 99

// //video 26) task 3) number challange very easy

// //video 27) string
// let theName="Qassem";
// console.log(theName);
// console.log(theName[1]);         //a
// console.log(theName.charAt(1));  //a
// console.log(theName.length);     //6

// let theNameWithSpaces="  qassem  ";
// console.log(theNameWithSpaces);
// console.log(theNameWithSpaces[1]);         // space
// console.log(theNameWithSpaces.charAt(1));  // space
// console.log(theNameWithSpaces.length);     //10

// console.log(theNameWithSpaces.trim());   //remove space
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theNameWithSpaces.trim().charAt(4).toUpperCase());  //E

// //video 28) string method part 2)
// let a ="Elzero Web School";
// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));   //search from start ,return -1 if not found 
// console.log(a.lastIndexOf("Web"));  //search from last
// console.log(a.indexOf("o"));     //5
// console.log(a.lastIndexOf("o")); //15

// console.log(a.slice(0)); //to the end if you not identify the end 
// console.log(a.slice(2, 6));   //not include the end 
// console.log(a.slice(-5));     //last five characters
// console.log(a.slice(-5, -3)); // last five characters - the last 3 characters

// console.log(a.repeat(3));
// console.log(a.split());     //as array
// console.log(a.split(""));   //split all elements
// console.log(a.split(" "));  //split from space
// console.log(a.split("e"));  //split from e  , and delete (e) character of split 
// console.log(a.split(" ", 2)); //limit of split number
// console.log(a.split("", 2)); //first two characters
// console.log(a.split("", 5)); //first five characters

// //video 29) string method part 3)
// let a ="Elzero Web School";
// console.log(a.length);
// console.log(a.substring(2));    //from 2 to the end 
// console.log(a.substring(2, 6)); //from 2 to 5
// console.log(a.substring(6, 2)); //from 2 to 5
// console.log(a.substring(6, 2)); //from 2 to 5
// console.log(a.substring(-10));  //any negative number start from 0 to the end
// console.log(a.substring(-10, 6));  //start from 0 to 5
// console.log(a.substring(a.length - 1));  //last character
// console.log(a.substring(a.length - 5, a.length - 3));  //character  c, h

// console.log(a.substr(0)); //from 0 to the end
// console.log(a.substr(0, 6)); //from 0 to 5
// console.log(a.substr(-3)); //last 3 characters
// console.log(a.substr(-5, 2)); //start before last 3 and counter 2

// console.log(a.includes("Web")); //true
// console.log(a.includes("Web", 8)); //true   ,start from 8
// console.log(a.startsWith("E")); //true   ,start from 0
// console.log(a.startsWith("E", 2)); //true   ,start from 2

// console.log(a.endsWith("l"));   //end character l , return true
// console.log(a.endsWith("o"));   //end character o , return false
// console.log(a.endsWith("o", 6));   //length 6 end character o , return true
// console.log(a.endsWith("ro", 6));   //length 6 end character ro , return true

// //video 30) task string
// let a ="Elzero Web School";
// console.log(a.charAt(0).toLowerCase(),a.substr(1, a.length-2).toUpperCase(),a.charAt(a.length-1).toLowerCase());

// //video 31) Comparison Operators
// console.log(10 == "10");   // compare value only
// console.log(10 != "10");   // compare value only
// console.log(10 === "10");   // compare value and datatype
// console.log(10 !== "10");   // compare value and datatype

// console.log("qassem" === "ahmed"); //false
// console.log(typeof "qassem" === typeof "ahmed"); //true

// //video 32) Logical Operators
// console.log(true);
// console.log(!true);

// console.log(!(10 == "10")); //false
// console.log(10=="10" && 10 > 8);
// console.log(10=="10" && 10 > 8 && 10 >= 10);
// console.log(10=="10" || 10 > 80);
// console.log(10=="10" || 10 > 8 || 10 >= 70);

// //video 33) if conditions
// let price =100;
// let discount = true;
// let discountAmount = 30;
// let country = "egypt";

// if(discount !== true){
//     price= price - 30;
//     discount=false;
// }
// else if (country !== "egypt")
//     price= price - 30;
// else price =0;

// console.log(discount);
// console.log(price);

// //video 34) Nested If Conditions
// let price =100;
// let discount = true;
// let discountAmount = 30;
// let country = "egypt";
// let student = true;

// if(discount !== true){
//     price= price - 30;
//     discount=false;
// }
// else if (country === "egypt"){
//     if(student=== true)
//         price= price - 50;
//     else 
//         price = price - 20;
// }
// else price =0;

// console.log(discount);
// console.log(price);

// //video 35) Conditional Ternary Operator
// let name = "ali";
// let gender = "male";
// let age = 30;
// if(gender ===  "female"){
//     console.log("Mrs");
// } else{
//     console.log("Mr");
// }

// gender ===  "female"?console.log("Mrs"):console.log("Mr"); 
// let result = gender ===  "female"? "Mrs" : "Mr"; 
// document.write(result);
// console.log(gender ===  "female"? "Mrs" : "Mr");
// console.log(`Hello ${gender ===  "female"? "Mrs" : "Mr"} ${name}`);

// age<20 
//   ? console.log(20) 
//   : age>20 && age<60
//   ? console.log("20 to 60")
//   : age>60
//   ? console.log("larger than 60")
//   : console.log("Unknown");

// //video 36) Nullish Coalescing Operator & logical Or
// let price =false;
// console.log(`the price is ${price || 200 }`); // if null or zero or false not return zero and false
// console.log(`the price is ${price ?? 200 }`); //// if null or undefined return zero and false

// //video 37)  challange if condition

// //video 38)  Switch Statement
// let day=2

// switch(day){
//     // default:
//     //     console.log("Unkown");
//     //     break;
//     case 0: 
//         console.log("saturday");
//         break;
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//     case 3:
//         console.log("Munday");
//         break;
//     default:
//         console.log("Unkown");
// }

// //video 39)  Switch and if condition challange

// //video 40)  Array intro
//let myfriend = ["ali", "ahmed", "saad", ["marwan", "koka"]];
// console.log(`Hello ${myfriend[0]}`);
// console.log(`Hello ${myfriend[1]}`);
// console.log(`${myfriend[1][2]}`);
// console.log(`Hello ${myfriend[3]}`);
// console.log(`Hello ${myfriend[3][1]}`);
// console.log(`Hello ${myfriend[3][1][2]}`);

//console.log(myfriend);
//myfriend[1]="mohammed";
//myfriend[3]="sameh";
//console.log(myfriend);
//myfriend[3]=["sameh","amr"];
//console.log(myfriend);
//console.log(typeof myfriend);  // object
//console.log(Array.isArray(myfriend));  // true

// //video 41)  using length with Array 
// let myfriend = ["ali", "ahmed", "saad","marwan", "koka"];
// console.log(myfriend.length);
// myfriend[7]= "fathy";
// console.log(myfriend.length);
// myfriend[myfriend.length-1] ="emam"
// console.log(myfriend);
// myfriend[myfriend.length] ="emam"
// console.log(myfriend);
// myfriend.length=3;
// console.log(myfriend);

// //video 42)  add and remove from Array 
// let myfriend = ["ali", "marwan", "koka"];
// console.log(myfriend);
// myfriend.unshift("osama","hany");  //unshift to add in the first 
// console.log(myfriend);
// myfriend.push("mai","asmaa");  // push to add in the last 
// console.log(myfriend);

// myfriend.shift();  //remove the first element from the array and return it 
// console.log(myfriend);

// let first = myfriend.shift();
// console.log(first);

// myfriend.pop();  //remove the last element from the array and return it 
// console.log(myfriend);

// let last = myfriend.pop();
// console.log(last);

// //video 43)  Searching Array 
// let myfriend = ["ali", "marwan", "koka", "mussa"];
// console.log(myfriend);
// console.log(myfriend.indexOf("koka"));
// console.log(myfriend.indexOf("koka", 1));

// console.log(myfriend.lastIndexOf("koka"));
// console.log(myfriend.lastIndexOf("koka", -1));

// console.log(myfriend.includes("koka"));
// console.log(myfriend.includes("koka", 1));

// if (myfriend.indexOf("ahmed") === -1){
//     console.log("not found");
// }

// console.log(myfriend.indexOf("salah"));
// console.log(myfriend.lastIndexOf("salah"));
// console.log(myfriend.includes("salah"));

// //video 44)  Sorting Arrays
// let myarray = [10,"moussa",9000,"ali","90",1000,20,"10",-20,-10];

// console.log(myarray);
// console.log(myarray.sort());

// console.log(myarray.reverse());

// //video 45)  Slicing Array
// let myfriend = ["ali", "marwan", "koka", "mussa","fawzy","fathy"];
// console.log(myfriend.slice());
// console.log(myfriend.slice(1));
// console.log(myfriend.slice(1, 3));
// console.log(myfriend.slice(-2));
// console.log(myfriend.slice(1, -2));   // not iclude end 
// console.log(myfriend.slice(-4, -2));  // not iclude end 
// console.log(myfriend);

// myfriend.splice(0, 0, "samer","samara");
// console.log(myfriend);

// myfriend.splice(0, 1,"Vini"); // delet one element from index zero
// console.log(myfriend);

// //video 46)  Joining Arrays
// let a1 = ["ali", "marwan", "koka", "mussa","fawzy"];
// let a2 = ["samer","samara"];
// let a3 = ["Vini","Ronaldo"];
// let all = a1.concat(a2, a3, "loka", ["carva"]);
// console.log(all);

// console.log(all.join()); //join convert to string
// console.log(all.join(""));
// console.log(all.join(" @ "));
// console.log(all.join("|").toUpperCase());

// //video 47)  Challange Array

// //video 48 && 49)  for Loops , looping on sequences
// let friend = [1, 2, "ali", "ahmed", "salah",  3, 4, "saed", "fathy"];
// let onlyname =[];

// for (let i = 0; i < friend.length; i++) {
    // if (typeof friend[i] ==="string"){
        // onlyname.push(friend[i]);
    // }
// }

// for (let i = 0; i < onlyname.length; i++) {
//     console.log(onlyname[i]);
// }

// console.log(onlyname); //print array in one step


// //video 50)  Nested Loops
// let produect =["keyboard", "mouse","pen","pad","nonitor"];
// let colors = ["red", "green", "black"];
// let model = [2020, 2021];

// for (let i = 0; i < produect.length; i++) {
//     console.log("#".repeat(10));
//     console.log(`# ${produect[i]}`);
//     console.log("#".repeat(10));
//     console.log("Colors: ")
//     for (let j =0 ; j<colors.length;j++){
//         console.log(`- ${colors[j]}`);
//     }
//     console.log("Model: ")
//     for (let k =0 ; k<model.length;k++){
//         console.log(`- ${model[k]}`);
//     }
// }

// //video 51)  Loop Control , Break , Continue, Label
// let produect =["keyboard", "mouse","pen", 10, 20 , 25,"pad","nonitor"];
// let colors = ["red", "green", "black"];
// for (let i=0; i<produect.length; i++){
//     if (produect[i]==="pen"){
//         break;
//     }
//     console.log(produect[i]);
// }
// for (let i=0; i<produect.length; i++){
//     if (typeof produect[i]=== "number"){
//         continue;
//     }
//     console.log(produect[i]);
// }

// mainloop: for (let i=0; i<produect.length; i++){
//     if (typeof produect[i]=== "number"){
//         continue;
//     }
//     console.log(produect[i]);
//     nestedloop: for (let j=0; j<colors.length;j++){
//         if(colors[j] ==="green"){
//             break mainloop;  ////Label
//         }
//         console.log(`-${colors[j]}`);
//     }
// }

// //video 52)  Loop example
// let produect =[ "keyboard", "mouse", "pen", "pad", "nonitor"];
// let i=0; 
// for( ; ; ){
//     console.log(produect[i]);
//     i++;
//     if(i === produect.length)
//         break;
// }

// //video 53)  Add Products to Page
// let produect =[ "keyboard", "mouse", "pen", "pad", "nonitor","camera"];
// let colors = ["red", "green", "black"];
// let count =5;

// document.write(`<h1>Show ${count} Prouducts</h1>`);
// for (let i = 0; i < count; i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i+1}] ${produect[i]}</h3>`);
//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p> ${colors[j]}</p>`);
//     }
//     document.write(`<p> ${colors.join(" | ")}</p>`);
//     document.write(`<div>`);
// }

// //video 54)  Loop-While
// let produect =[ "keyboard", "mouse", "pen", "pad", "nonitor","camera"];
// let i=0;
// while(i<produect.length){
//     console.log(produect[i]);
//     i++;
//     if(i===3) break;
// }

// //video 55)  Loop-Do While
// let produect =[ "keyboard", "mouse", "pen", "pad", "nonitor","camera"];
// let i=0;

// do{
//     console.log(produect[i]);
//     i++;
//     if(i===3) break;
// }while(i<produect.length);

// //video 56)  Loop Challange
// let admin =["ahmed", "Osama", "saad", "stop","ibrahim", "mostafa", "Pop"];
// let employee = ["amgad", "sameh", "Omar","amer", "Omar", "Othman", "amira", "samia"];
// let x=0;
// document.write(`<div> We have ${admin.length} Admins</div>`);
// for(let i = 0; i < admin.length; i++){
//     if (admin[i]==="stop") break;
//     document.write(`<div> the admin for tem${i+1} is ${admin[i]}</div>`)
//     document.write(`<h3> Team Member:</h3>`);
//     x=0;
//     for(let j = 0; j < employee.length; j++){
//         if(admin[i].charAt(0)===employee[j].charAt(0)){
//             document.write(`<p>${++x} -${employee[j]}</p>`);
//         }
//     }
// }

// //video 57)  Function intro
// console.log(typeof console.log);

// function sayHello(userName)/*paramter(variable)*/{ 
//     console.log(`Hello ${userName}`);
// }
// sayHello("qassem");  //argument (value of variable)
// sayHello("Ali"); 

// //video 58)  Function examples
// function sayHello(userName, age){ 
//     console.log(`Hello ${userName} age is ${age}`);
//     if (age<20)
//         console.log("app is not suitable for you")
// }
// sayHello("qassem", 20);  //argument (value of variable)
// sayHello("Ali",15); 

// function genrateyears (start, end,exclude){
//     for (let i = start; i <= end; i++) {
//         if (i===exclude){
//             continue;
//         }
//         console.log(i);
//     }
// }
// genrateyears(2002, 2024,2008);

// //video 59)  Function return and use case
// function calc(n1,n2){ 
//     return n1 + n2;
// }
// console.log(calc(5,4));

// //video 60)  Function Default Parameters
// function sayHello(userName="Unkown", age ="Unkown"){ 
//     // if (age === undefined){
//     //     age ="Unkown";
//     // }
//     // age = age ||"Unkown";
//     // userName = userName ||"Unkown"
//     return `Hello ${userName} your age is ${age}`;
// }
// console.log(sayHello("qassem"));

// //video 61)  Function Rest Parameters
// let x=0;
// function calc(...number){
//     console.log(Array.isArray(number));

//     for (let i =0; i<number.length; i++){
//         x+=number[i];
//     }
//     return `final result is ${x}`;
// }
// console.log(calc(10,20,30,40));

// //video 62)  Function Practice
let x=0;
function calc(...number){
    console.log(Array.isArray(number));

    for (let i =0; i<number.length; i++){
        x+=number[i];
    }
    return `final result is ${x}`;
}
console.log(calc(10,20,30,40));

































