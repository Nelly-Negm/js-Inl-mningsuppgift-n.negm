/*
Uppgift 1: 
works  *thumb up*
*/

let blue = false;

function taskOne() {
  document.getElementById("answer-one").style.background= "blue";
  
}



/*
Uppgift 2: 
work
*/

const numbers = [234, 986, 784];

function taskTwo() {
  document.getElementById("answer-two").innerHTML = numbers + Math.random(1);
}

/*
Uppgift 3: 
work
*/


function taskThree() {
const date = new Date();
const day = date.getDay();
if (day >= 5){
  alert("woho its weekend");
} else { 
  alert("FML");}}

/*
Uppgift 4: 
work
*/

function multiplier(valueOne, valueTwo) {

  if (isNaN(valueOne) || (isNaN(valueTwo))){
    alert("Jag kan bara multiplicera nummer...");
  }
  else {
    var awnser = (valueOne * valueTwo);
    alert("Produkten är:" + awnser);
  }
  }


function taskFour() {
  multiplier(13,2);
}

/*
Uppgift 5: 
there is ",,," in the trash bin for the fruit it jumps over. but othervise works
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
let eatable = [];
let trash = [];


function taskFive() {
let yumy = fruits.length;
for(let eat = 0 ; eat < yumy; eat++ ) {
  if((fruits[eat] == "apelsin")  || (fruits[eat] == "päron")) {
trash[eat] = fruits[eat];
} else {
  eatable[eat] = fruits[eat];
}}
alert("ätligt: " + eatable + "\n" + "skräp: " + trash);
}






/*
Uppgift 6: 
work but dosent want to target just input name, if write exampel "overThirty.name", dont get why? 
without JSON.stringify it give out [object object] so it works, but i dont get why it dosent want to just work with names?
*/

let persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

let married = [];
let notMarried = [];
let overThirty = [];
let underThirty = [];

function taskSix() {
  overThirty = persons.filter((f) => {
    return f.age >= 30;
  })
  
  underThirty = persons.filter((f) => {
    return f.age < 30;
  })

  married = persons.filter((f) => {
    return f.married == true ;
  })

  unmarried = persons.filter((f) => {
    return f.married == false ;
  })
//let under_thirty_names = underThirty[0].name + ", " + underThirty[1].name + ", " + underThirty[2].name;

document.getElementById("answer-six").innerHTML =
    `<p><b> Över:</b> ${JSON.stringify(overThirty)} ${"\n"} <b>Under:</b>  ${JSON.stringify(underThirty)} ${"\n"} <b>Married:</b> ${JSON.stringify(married)} ${"\n"} <b>Unmarried:</b>  ${JSON.stringify(unmarried)}</p>`
    ;
};



/*
Uppgift 7: 
works
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  withlinebreak = addMeSomeLineBreaks.split(",").join("<br />")

  document.getElementById("answer-seven").innerHTML = withlinebreak;

  console.log(withlinebreak );
}

/*
Uppgift 8: 
works!
*/

function taskEight() {
  document.getElementById("card-eight").style.display = "none";

setTimeout(() => {
  document.getElementById("card-eight").style.display = "block";
},3000);


}

/*
Uppgift 9: 
Working!
*/

function taskNine() {
  const date = new Date();
  const currentHoure = date.getHours();
  

  if (currentHoure >= 17){
    for(let count = 0 ; count < 10; count++ ) {
    document.getElementsByClassName("answer-container")[count].style.background = "blue"; }
} 
  else {for(let count = 0 ; count < 10; count++ ) {
  document.getElementsByClassName("answer-container")[count].style.background = "red"; }
}}


/*
Uppgift 10: 
works!
*/

let valueOne = 12
let valueTwo = 3
let operator = "add"
let result = 0

function calculator(x, y, op) {
if (op == "add"){
result = x + y;
}else if (op == "subtract"){
  result = x - y; 
}else if (op == "multiply"){
  result = x * y; 
}else if (op == "divide"){
  result = x / y; 
}else{
  alert("Något är fel! -Med operatören!")
}
alert("Svaret är: " + result)
}

function taskTen() {
if ((typeof valueOne === "number") && (typeof valueTwo === "number")){
  calculator(valueOne,valueTwo,operator);
}else{
  alert("Något är fel! -Med siffrorna!");
}

}
