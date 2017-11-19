class HashTable {

  constructor(){
   this.collection = {};
   this.size = 0;
  }
  
  hash(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
    return hash;
  }
  
  add(k ,v){
    let hashed = this.hash(k);
    let hasProp = false;
    if(!this.collection[hashed]){
    this.collection[hashed] = [{[k]:v}];
    this.size++;
    } else {
      for(let i=0;i<this.collection[hashed].length;i++){
        if(this.collection[hashed][i][k]){
          hasProp = true;
          this.collection[hashed][i][k] = v;
        }
      }
      if(!hasProp)
     this.collection[hashed].push({[k]:v});
    }
    return this.collection[hashed];
  }
  
  remove(k){
    let hashed = this.hash(k);
    if(this.collection[hashed]){
      for(let i=0;i<this.collection[hashed].length;i++){
        if(this.collection[hashed][i][k]){
          this.collection[hashed].splice(i,1);
        }
      }
      if(this.collection[hashed].length === 0){
        delete this.collection[hashed];
        this.size--;
      }
    }
  }
  
  contains (k) {
    return this.lookup(k) === null ? false : true;
  }

  keys(){
   return Object.keys(this.collection);
  }

  values(){
    return Object.values(this.collection).reduce((a,b)=> a.concat(b),[]).reduce((a,b)=>a.concat(Object.values(b)),[]);
  }

  isEmpty() {return this.size === 0;}
  
  lookup(k){
   var hashed = this.hash(k);
   if(this.collection[hashed]){
    for(var i = 0; i<this.collection[hashed].length; i++){
      if(this.collection[hashed][i][k]){
        return this.collection[hashed][i][k];
      }
    }
   }
   return null;
  }
}

var ht = new HashTable();
ht.add("string",1);
 ht.add("string",2);
 ht.add("string",3)
 ht.add("x", true);
 ht.collection
