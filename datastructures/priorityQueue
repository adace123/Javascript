function PriorityQueue () {
    this.collection = [];
    this.numItems = 0;
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function(arr){
      this.numItems++;
      this.collection.push(arr);
    };
  
   this.dequeue = function(){
      if(this.isEmpty()){
        throw new Error("The queue is empty.");
      }
     this.numItems--;
      var min = this.collection[0];
      for(var i = 0; i < this.collection.length; i++){
        if(this.collection[i][1] < min[1]){
            min = this.collection[i];
        }
      }
      return this.collection.splice(this.collection.indexOf(min),1)[0][0];
    };
  
    this.front = function(){
     return this.isEmpty() ? new Error("The queue is empty") : this.collection[0][0];
    };
  
    this.isEmpty = function(){
      return this.numItems===0;
    };
  
    this.size = function(){
      return this.numItems;
    };
    
    this.clear = function(){
      this.collection = [];
    };
}
