//print integers from -52 to 1066
function printNums(){
    for(let i = -52; i <= 1066; i++){
        console.log(i)
    }
}

 printNums()

//swap an int variable with a string variable vice versa

let myNumber = 42;
let myName = "Jim";
let temp = myName;
    myName = myNumber;
    myNumber = temp;
console.log("My new name is " + myName);
console.log("My new number is " + myNumber);

//Print multiples of 3 from -300 to 0
function multiplesBy3(){
for(let i = -300; i <= 0; i++){
    if( i % 3 === 0){
        console.log(i)
        }
     else if( i === -6 || i === -3){
        continue
        }
    }

}
multiplesBy3()