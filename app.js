//#region Lab 1
/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(age)
{
    //data validation. Age is not negative and has datatype of number
    if (age >= 0 && typeof age === "number")
    {
        if (age >= 18)
        {
            return "Adult";
        }
        else if (age < 18)
        {
            return "Minor";
        } 
    }
    else 
    {
        //prompting if invalid.
        return "Invalid Age";
    }
}
console.log('Exercise 2 Result:', isAdult(21));
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel(char)
{
    //data validation making sure char is case insensitive, and that the input is a letter of the english alphabet.
    char = char.toLowerCase();
    const validLetters = "abcdefghijklmnopqrstuvwxyz".split("");

    //refernce array of varibles
    const vowels = "aeiou".split("")
    let isVowel;

    //checking if char matches to vowels
    if (validLetters.includes(char))
    {
        if (vowels.includes(char))
        {
            isVowel = true;
            return isVowel;
        }
        else
        {
            isVowel = false;
            return isVowel;
        }
    }
    else
    {
        //displaying error message if invalid character is input
        return "Invalid Character";
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
function generateEmail(userName, domain)
{
    //using template literals to display message with passed through varibles 
    return `${userName}@${domain}`;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
function greetUser(userName, timeOfDay)
{
    //data validtion. Masking timeOfDay case insensitive and declaring array for valid input
    timeOfDay = timeOfDay.toLowerCase();
    validTimes = ["morning", "afternoon", "evening"]
    //checking username is a string and that timeOfDay is included in validTimes array
    if (typeof userName === "string" && validTimes.includes(timeOfDay))
    {
        //template literals to display greeting message
        return `Good ${timeOfDay} ${userName}!`;
    }
    else
    {
        //error message for invalid input
        return "Invalid Input. Username must be a string and time of day must be \"morning\", \"afternoon\", or \"evening\".";
    }
}
console.log('Exercise 5 Result:', greetUser("Sam", "afternoon"));
/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
function maxOfThree(num1, num2, num3)
{
    //data validation. Checking all three inputs are of the data tupe number
    if ((typeof num1 === "number") && (typeof num2 === "number") && (typeof num3 === "number") )
    {
        let result = Math.max(num1,num2,num3);
        return result;
    }
    else
    {
        //error message if input is not valid
        return "Invalid Input.";
    }
}
console.log('Exercise 6 Result:', maxOfThree(10, 8, 7))
/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
function calculateTip(billAmount, tipPercentage)
{
    //data validation, verifiying input tip percentage is a whole number as specified in instructions and that both billAmount and tipPercentage are data type numbers
    if(Number.isInteger(tipPercentage) && typeof tipPercentage === "number" && typeof billAmount === "number")
    {
        //converting tipPercentage whole value into a percentage and storing it in totalTipValue
        totalTipValue = billAmount * (tipPercentage / 100);
        //displaying totalTipValue and rounding to 2 digits
        return Math.round(totalTipValue * 100) / 100;
    }
    else
    {
        //Error message if input is not valid
        return "Please enter a whole number for the tip percentage.";
    }
}
console.log('Exercise 7 Result:', calculateTip(50, 20));
/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
function convertTemperature(temperature, scale)
{
    //data validation, making sure scale is case insensitive and limiting accepted inputs
    validScale = "CFcf".split("");

    if (validScale.includes(scale) && (typeof temperature === "number") && typeof scale === "string")
    {
        scale = scale.toLowerCase();
        if (scale === "c")
        {
            //calculating temp when input celcius and rounding to 2 digits 
            finialTemp = (temperature * 1.8) + 32;
            return Math.round(finialTemp * 100) / 100;
        }
        else if (scale === "f")
        {
            //calculating temp when input far and rounding to 2 digits
            finialTemp = (temperature - 32) / 18;
            return Math.round(finialTemp * 100) / 100;
        }
    }
    else 
    {
        //error message if input invalid
        return "Invalid Input, Please enter a number for temperature and \"C\" or \"F\" for temperature scale.";
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
function basicCalculator(num1, num2, typeOfMath)
{
    //data validation. Making typeOfMath case insensitive and limiting total responses
    typeOfMath = typeOfMath.toLowerCase();
    validatedTypeOfMath = ["add", "subtract", "multiply", "divide"];

    if(validatedTypeOfMath.includes(typeOfMath) && typeof num1 === "number" && typeof num2 === "number")
    {
        //calculations, all rounded to 2 digits 
        //addition
        if (typeOfMath === "add")
        {
            result = (num1 + num2);
            return Math.round(result * 100) / 100;
        }
        //subtraction
        else if (typeOfMath === "subtract")
        {
            result = (num1 - num2);
            return Math.round(result * 100) / 100;
        }
        //division
        else if (typeOfMath === "divide")
        {
            result = (num1 / num2);
            return Math.round(result * 100) / 100;
        }
        else 
        {
            //if neither of the previous 3 are selected, due to limited input, multiply must be selected.
            result = (num1 * num2);
            return Math.round(result * 100) / 100;
        }
    }
    else
    {
        //error message if input is invalid
        return "Invalid input. Make sure input provided is formatted: (number), (number), (\"add\" or \"subtract\" or \"divide\" or \"multiply\")"
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));
//#endregion

//#region Lab 1 Level Up
/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/
console.log('Exercise 10 Result:', calculateGrade(85));
function calculateGrade(grade) 
{
    //data validation. Check if grade is a number less then 100 and not negative
    if (typeof grade === "number" && grade <= 100 && grade >= 0) 
    {
        if (grade >= 90) 
        {
            return "A";
        } 
        else if (grade >= 80) 
        {
            return "B";
        } 
         else if (grade >= 70) 
        {
            return "C";
        } 
        else if (grade >= 60) 
        {
            return "D";
        } 
        else 
        {
            return "F";
        }
    }
    else
    {
        //error message if input invalid 
        return "invalid input";
    }
}   
/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/
function createUsername(firstName, lastName)
{
    //getting first 3 letters from input
    firstThree = firstName.substring(0,3);
    lastThree = lastName.substring(0,3);
    //calculating total amount of char
    totalCharCount = (firstName.length + lastName.length);
    //template literal for the username
    return `${firstThree}${lastThree}${totalCharCount}`
}
console.log('Exercise 11 Result:', createUsername("Colin", "Lawrence"));
/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/
function numArgs()
{
    //checking amount of arguments then displaying them.
    return arguments.length;
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4, 5));
//#endregion





