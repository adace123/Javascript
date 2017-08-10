Array.prototype.pipe = function(func) {
  return func(this);
}


const range = (start,end,step = 1) => {
  let fillSize = step > 1 ? Math.round((end-start+1)/step) : (end-start+1);
  let rangeBuilder = (val,index) => step > 1 ? val + (index * step) : index + val;
  return new Array(fillSize).fill(start).map(rangeBuilder);
};


const chunk = (arr, size = 1) => {
  let chunkedArr = [];
  for(let i = 0;i<arr.length;i+=size) {
    chunkedArr.push(arr.slice(i,size+i))
  }
  return chunkedArr;
}


const zip = (...arrays) => {
  if(new Set(arrays.map(arr => arr.length)).size > 1)
  throw new Error("Array lengths must be the same.");
  
  let zipperArr = []
  let count = 0;

  while(count < arrays[0].length){
    zipperArr[count] = [];
  for(let i = 0;i < arrays.length;i++) {
      zipperArr[count].push(arrays[i][count]);
  } 
    count++;
  }
  
 return zipperArr; 
}


const partition = (arr, predicate) => {
  let trueValues = [], falseValues = [];
  if(Array.isArray(predicate)) {
    arr.forEach(obj => {
      if(obj[predicate[0]] === predicate[1]) {
        trueValues.push(obj);
      } else falseValues.push(obj);
    });
  } 
  
  else if(typeof predicate === 'object') {
    arr.forEach(obj => {
      let truecount = 0;
      for(let [key,value] of Object.entries(predicate)) {
        if(obj[key] === value) truecount++;
      }
      if(truecount === Object.keys(predicate).length) {
        trueValues.push(obj);
      } else falseValues.push(obj);
    });
  }
  
  else if(typeof predicate === 'string') {
    arr.forEach(obj => {
      if(obj[predicate]) {
        trueValues.push(obj);
      } else falseValues.push(obj);
    });
  }
  
  else if(typeof predicate === 'function') {
    arr.forEach(obj => {
      if(predicate(obj)) {
        trueValues.push(obj);
      } else falseValues.push(obj);
    });  
  }
  
  return [trueValues,falseValues];
}

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

partition(users, function(o) { return o.active; })

const squares = (arr) => arr.map(x => x ** 2);

const evens = (arr) => arr.filter(x => x % 2 === 0);

range(1,20).pipe(squares).pipe(evens);
