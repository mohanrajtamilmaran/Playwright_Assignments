let name = "level"
let rev_name =""
for (let i=name.length-1;i>=0;i--){
    rev_name = rev_name + name[i]
}
if (name === rev_name){
    console.log("The given string "+name+" is palindrome")
}
else {
    console.log("The given string "+name+" is not palindrome")
}