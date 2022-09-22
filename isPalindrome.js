// Write your code below
function isPalindrom(word) {
    let j = word.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++) {
      console.log((word.length -1)/2);  
      if (word[i] !== word[j]) {
        return false
      }
      j--
    }
    return true
  }

  console.log(isPalindrom("noon"));