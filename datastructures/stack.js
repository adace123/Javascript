
function Stack() { 
    this.collection = [];
    this.size = 0;
    this.print = function() {
        console.log(this.collection);
    };
    
    this.push = function(elem){
      this.collection[this.size++] = elem;
      return elem;
    };
  
    this.pop = function(){
      if(this.isEmpty())
      return "Error. No elements in stack.";
      
       var elem = this.collection[this.collection.length-1];
      delete this.collection[this.collection.length-1];
      this.size--;
      return elem;
    };
    
    this.peek = function(){
      return this.collection[this.size-1];
    };
    
    this.isEmpty = function(){
      return this.size === 0;
    };
    
    this.search = function(item){
      return this.collection.includes(item) ? this.collection.indexOf(item) + 1 : -1;
    };
    
    this.clear = function(){
      this.collection = [];
    };
}

let stack = new Stack();
