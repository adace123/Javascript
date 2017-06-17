function translatePigLatin(str) {
  if(/[AEIOUaeiou]/.test(str[0])){
    return str+"way";
  }
  var pl = "";
  while(!/[AEIOUaeiou]/.test(str[0])){
    pl+=str[0];
    str = str.slice(1);
  }
 return str+pl+"ay";
}

console.log(translatePigLatin("Excellent"));
console.log(translatePigLatin("test"));
