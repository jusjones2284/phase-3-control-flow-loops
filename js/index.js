/*
  Write a method `happy_new_year` that outputs numbers starting at 10 and
   counting down to 1. After reaching 1, print out "Happy New Year!"
*/
// function happyNewYear() {
//   let counter = 10;
//   while (counter > 0) {
//     console.log(counter);
//     counter--;
//   }
//   console.log("Happy New Year!");
// }

let i = 0 
while(i < 5){
  console.log(i);
  i++;
}

i = 0
while i < 5
  puts "Looping!"
  i += 1
end

for (let i = 0; i < 10; i++){
  console.log('Looping!')
  console.log(`i is: ${i}`)
}
10.times do |i|
puts "looping"
puts "i is: #{i}"
end

10.times {|i| puts "i is: #{i}"}
// function happyNewYear(){
//   let counter = 10; 
//   while(counter > 0){
//     console.log(counter);
//     counter--; 
//   }
//   console.log("Happy New Year!")
// }
/* 
  Write a method `fizzbuzz_printer` that prints the numbers from 1 to 100. For
  multiples of three, print "Fizz" instead of the number and for the multiples
  of five print "Buzz". For numbers which are multiples of both three and five,
  print "FizzBuzz".
*/
function fizzbuzzPrinter() {
  for (let num = 1; num <= 100; num++) {
    console.log(fizzbuzz(num));
  }
}

// function fizzbuzzPrinter(){
//   for (let num = 1; num <= 100; num++){
//     console.log(num)
//   }
// }

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

// function fizzbuzz(num){
//   if (num % 3 === 0 && num % 5 === 0){
//     return "FizzBuzz"; 
//   } else if (num % 3 === 0){
//     return "Fizz";
//   }else {
//     return num; 
//   }
// }

/*
  Write a method `reverse_string` that takes one argument, a string, and reverses
  it. Don't use the built-in `.reverse` method. Instead, loop through the
  characters in the input string and reverse it.
*/
function reverseString(str) {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  return reversedStr;
}


