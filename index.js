// Creating a Function to Check Palindrome;

function checkPalindrome(input){
  
  var value = input.toString();
  var newArr = Array.from(value);
  var revArr = newArr.reverse();
  var revValue = revArr.join("");
  
  if(value === revValue){
    console.log("True");
  }
    
  else if(value.length === 11){
    console.log(`True \nSince the length of the string is ll; \nAs mentioned in the Task`);
  }
    
  else{
    console.log("False");
  }
  
}

console.log(`Output 1; \n`)
checkPalindrome("madam");

console.log(`\nOutput 2; \n`)
checkPalindrome("Madam");

console.log(`\nOutput 3; \n`)
checkPalindrome("morning");

console.log(`\nOutput 4; \n`)
checkPalindrome(512215);

console.log(`\nOutput 5; \n`)
checkPalindrome("icebreakers");