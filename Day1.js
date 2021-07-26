//Palindrome

function checkPalindrom(str) {
    var str = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
    return str == str.split('').reverse().join('');
}

let final = checkPalindrom("racecar")
console.log(final);

//Duplicates

let test = ["John","Mary", "Alex", "Steve", "Mary", "John"] 
let unique = [new Set(test)]

for(let index = 0; index < unique.length; index++) {
    console.log(unique[index]);
}

// True or False for Item in array
function search(input) {

    for(let index = 0; index < test.length; index++){
        if(test[index] == input){
            return true
        }
        else{
            return false
        }
    }
}

let answer = search("Mike")
console.log(answer);

//Largest number

let test = [3,4,56,7,8,1] 
let highNumber = test[0]

for(let index = 0; index < test.length; index++){
    if(test[index] < highNumber) {
        highNumber = test[index]
        
    }
    console.log(highNumber); 
   
}
//FizzBuzz
function fizzBuzz(number) {
    if(number % 3 == 0 && number % 5 > 0){
        console.log("fizz")
    }
    else if( number % 3 > 0 && number % 5 == 0){
        console.log("buzz")
    }
    else if( number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz")
    }
    
}
fizzBuzz(15)

//Even or odd

function evenOdd(number) {
    if(number % 2 == 0){
        console.log("Even");
    }
    else{
        console.log("Not Even");
    }
}
evenOdd(3)

//sort array
let numbers = [3,4,56,7,8,1] 
numbers.sort(function(a, b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;

})
console.log(numbers);

//Bank Account Assignment

class bankAccount {
    constructor(firstName, lastName, middleName, accountType, balance, status){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = status
    }
     withdraw(ammount) {
        this.balance -= ammount
        console.log(this.balance);
        if(this.balance < 0){
            console.log("Overdraft! -$35");
                    this.balance -= 35
                    console.log(this.balance);
        }
    }
    deposit(ammount){
        this.balance += ammount
        console.log(this.balance);
    }
    overDraft(){
            console.log("Overdraft! -$35");
            this.balance -= 35
            console.log(this.balance);
    }
}

function transfer(ammount, from, to){
    from.withdraw(ammount)
    to.deposit(ammount)
    console.log(`${from} now has ${from.balance}`);
    console.log(`${to} now has ${to.balance}`);
    if(from.balance < 0){
        console.log("Overdraft! -$35");
                this.balance -= 35
                console.log(this.balance);
    }
}



let accountOne = new bankAccount('Jon', 'Doe', 'L', 'Checking', 1000, 'Open')
let accountTwo = new bankAccount('Richard', 'Kellogg', 'Z', 'Checking', 1000, 'Open')
transfer(1001, accountOne, accountTwo)
