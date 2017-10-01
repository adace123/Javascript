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
  
  //filter out values from setB that are not in this and concat them together
  union(setB) {
    return setB.values().filter(x => !this.has(x)).concat(this.values());
  }
  //return values shared by both sets
  intersection(setB) {
    return this.values().filter(x => setB.has(x));
  }
  //return values not shared by both sets
  difference(setB) {
    return this.values().filter(x => !setB.has(x));
  }
  //if setB has one or more values not in this it is not a subset of this
  subset(setB) {
    return setB.difference(this).length === 0;
  }
  
}
