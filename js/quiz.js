/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
//answers = false
correct = 0;

// 2. Store the rank of a player
//rank =0
rank = "Not known"
// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1 = prompt('Name the programming language that you are learning?')

if (answer1.toUpperCase() =='JavaScript'){
  correct+=1
  
}

answer2 = prompt('Programming language for web content creation?')

if (answer2.toUpperCase()=='HTML'){
  correct+=1
  
}

answer3 = prompt('What language we use for styling web?')

if (answer3.toUpperCase()=='CSS'){
  correct+=1
}

answer4 = prompt('Name of college?')

if (answer4.toLowerCase() =='Douglas'){
  correct+=1
}

answer5 = prompt('What is the name of the city of college?')

if (answer5.toLowerCase() =='New westminister'){
  correct+=1
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


if(correct >=5){
  rank = 'Gold'
}else if(correct >= 3) {
  rank = 'Silver'
}else if(correct >= 1) {
  rank = 'Bronze'
}else {
  rank = 'No crown'
}

// 6. Output results to the <main> element
document.querySelector('main').innerHTML = `<h2> Your score is ${correct} out of 5. <br> Your crown is ${rank}</h2>`

