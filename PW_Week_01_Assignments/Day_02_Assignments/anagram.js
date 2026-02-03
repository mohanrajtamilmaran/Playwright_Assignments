let text1 = "listen"
let text2 = "silent"
let sort_text1 = text1.split('').sort().join('')
//l,i,s,t,e,n -> split
//e,i,l,n,s,t -> sort
//eilstn -> join
let sort_text2 = text2.split('').sort().join('')
//l,i,s,e,n,t -> split
//e,i,l,n,s,t -> sort
//eilstn -> join
if (sort_text1 === sort_text2){
    console.log("The given string "+text1+" and "+text2+" are Anagram")
}
else {
    console.log("The given string "+text1+" and "+text2+" are not Anagram")
}
