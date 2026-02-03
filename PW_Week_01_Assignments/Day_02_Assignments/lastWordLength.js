let s = ` fly me   to   the moon`
let word = s.split(" ") 
//['fly','me','','','to','','','the','moon']\
let lastWord = word[word.length-1]
console.log("The last word is "+lastWord +" with length "+lastWord.length)
//console.log("Length of last word is: "+lastWord.length)