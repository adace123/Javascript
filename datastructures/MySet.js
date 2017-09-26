class MySet {
  
  constructor(...values) {
    this.collection = [];
    if(values.length > 0) { 
      for(let value of values) {
        this.add(value);
      } 
    }
  }
  
  has(element) {
    return this.collection.includes(element);
  }
  
  values() {
    return this.collection;
  }
  
  add(element) {
    if(!this.collection.includes(element)) {
      this.collection.push(element);
      return true;
    } 
    return false;
  }
  
  remove(element) {
    if(this.has(element)) {
      this.collection.splice(this.collection.indexOf(element), 1);
    }
  }
  
  size() {
    return this.collection.length;
  }
  
  
  union(setB) {
    return setB.values().filter(x => !this.has(x)).concat(this.values());
  }
  
  intersection(setB) {
    return this.values().filter(x => setB.has(x));
  }
  
  difference(setB) {
    return this.values().filter(x => !setB.has(x));
  }
  
  subset(setB) {
    return setB.difference(this).length === 0;
  }
  
}
