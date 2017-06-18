function removeDupes(arr){
 var map = new Map();
 //loop through elements in arr
 for(var i of arr){
   // if map doesn't have the element, add it as a key with default value 1
   //otherwise a duplicate has been found, increment the key's value in the map
   map.has(i) ? map.set(i,map.get(i)+1) : map.set(i,1);
 }
 //convert map's keys to array and filter the keys to return only those whose value > 1
 return Array.from(map.keys()).filter(x=>map.get(x)>1);
 }


function bubbleSort(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[j]<arr[i]){
        var x = arr[j];
        arr[j] = arr[i];
        arr[i] = x;
      }
    }
  }
  return arr;
}

function rot13(str) { 
  var rotated = [];
  for(var i=0;i<str.length;i++){
    if(str[i].match(/[A-Z]/)){
      if(str.charCodeAt(i)-65+13>=26){
      
        rotated.push(String.fromCharCode(str.charCodeAt(i)+13-26));
    }
      else{ 
        rotated.push(String.fromCharCode(str.charCodeAt(i)+13));
      }
    }
  else{
    rotated.push(str[i]);
  }
  }  

  return rotated.join("");
}

function diffArray(arr1, arr2) {
  var obj = {};
  var newArr = arr1.concat(arr2);
  var myArr = [];
  for(var i=0;i<newArr.length;i++){
    if(!obj[newArr[i]]){
      
      obj[newArr[i]]=1;
      myArr.push(newArr[i]);
    } else {
      delete obj[newArr[i]];
      myArr.splice(myArr.indexOf(newArr[i]),1);
    }
  }
  return myArr;
}

function selectionSort(arr){
  for(var i=0;i<arr.length-1;i++){
    var min = Math.min.apply(null,arr.slice(i,arr.length));
    if(min<arr[i]){
      var x = arr[arr.indexOf(min)];
      arr[arr.indexOf(min)] = arr[i];
      arr[i] = x;
    }
  }
  return arr;
}

//to be completed
function mergeSort(arr){
  if(arr.length<2) return;
  
  else{
    var mergedArray = [];
    const lower = arr.slice(0,Math.floor(arr.length/2));
    const upper = arr.slice(lower.length,arr.length);
    
  }
}





function checkPalindrome(word){
  if(word.length<=1){
      return true;
    }
  else if(word[word.length-1] !== word[0]){
      return false;
    }
  
  else return checkPalindrome(word.slice(1,word.length-1));
}

function recursivePow(num,exp){
  if(exp===0) return 1;
  
  else if(exp>0 && exp % 2===0){
   
    return recursivePow(num,exp/2)*recursivePow(num,exp/2);
  }
  
  else if(exp>0 && exp % 2 !==0){
    
  return num*recursivePow(num,exp-1);
  }
  
  else{
    return 1/recursivePow(num,-exp);
  }
}


function binarySearch(arr,element){
  
  arr = arr.sort();
  let mid = arr[Number.parseInt(arr.length/2)];
  if(element===mid){
      return element+" is in the list.";
    }

    if(element<mid){
      return binarySearch(arr.slice(0,Number.parseInt(arr.length/2)),element);
    }
    else if(element>mid){
      return binarySearch(arr.slice(Number.parseInt(arr.length/2)+1,arr.length),element);
    }
    
    return element+" is not in the list.";
}
  

function rotateArray(arr,times,direction){
  switch(direction){
    case "LEFT".toLowerCase():
      for(let j=0;j<times;j++){
        for(let i=0;i<arr.length-1;i++){
          let x = arr[i+1];
          arr[i+1] = arr[i];
          arr[i] = x;
        }
      }
      break;
    case "RIGHT".toLowerCase():
      for(let k=0;k<times;k++){
        for(let i=arr.length-1;i>0;i--){
          let x = arr[i];
          arr[i] = arr[i-1];
          arr[i-1] = x;
        }
      }
      break;
    default:
      return "Error. Not a valid direction.";

    
  }
  return arr;
  /*
  could also do arr.push(a.shift()) and arr.unshift(a.pop())
  */
}
