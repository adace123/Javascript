class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  insert(value){
    if(this.head === null){
      this.head = new Node(value);
    }
    else{
      var node = new Node(value);
      var last = this.head;
      while(last.next){
        last = last.next;
      }
      last.next = node;
    }
  }
  insertAt(index,value){
    if(index>=0 && index<=this.size()){
      if(this.isEmpty()){
      this.setValue(0,value);
      return;
    } 
      else{
        var last = this.head;
        while(last.next){
          if(index-1 === this.toArray().indexOf(last.value)){
            var curr = last.value;
            var values = this.toArray();
            values.splice(index,0,value);
            this.clear();
            this.insertAll(values);
            return;
          }
          last = last.next;
        }
        this.insert(value);
        return;
      }
    } else return "Cannot insert at index "+index;
  }
  insertAll(values){
    for(var i=0;i<values.length;i++){
      this.insert(values[i]);
    }
  }
  print(){
    var last = this.head;
    if(!this.isEmpty()){
    console.log(last.value);
    while(last.next){
      console.log(last.next.value);
      last = last.next;
    }
    }
    else return "List is empty.";
  }
  contains(value){
    if(!this.isEmpty()){
    var last = this.head;
    while(last.next){
      if(last.next.value === value) return true;
      last = last.next;
    }
    return false;
    } else return "List is empty.";
  }
  indexOf(value){
    if(!this.isEmpty()){
      var values = this.toArray();
      for(var i=0;i<values.length;i++){
        if(values[i] === value){
          return i;
        }
      }
      return -1;
    } else return "List is empty.";
  }
  getValue(value){
    if(!this.isEmpty()){
      var values = this.toArray();
      if(values[value] !== undefined){
        return values[value];
      } else return "Index not in list.";
    } else return "List is empty.";
  }
  remove(value){
    if(!this.isEmpty()){
    var last = this.head;
    if(last.value === value){
      this.head = last.next;
      last = this.head;
      return;
    }
    while(last.next){
      if(last.next.next === null && last.next.value === value){
        last.next = null;
        return;
      }
      else if(last.next.value === value){
        var nextNode = last.next.next;
        last.next = nextNode;
        return;
      } 
      
      last = last.next;
      
    }
    return "No such value.";
    } else return "List is empty.";
  }
  size(){
    if(this.isEmpty()) return 0;
    var count = 0;
    var last = this.head;
    while(last.next){
      count++;
      last = last.next;
    }
    return count+1;
  }
  clear(){
    this.head = null;
  }
  isEmpty(){
    return this.head === null;
  }
  toArray(){
    if(this.isEmpty()) return [];
    var values = [];
    var last = this.head;
    while(last.next){
      values.push(last.value);
      last = last.next;
    }
    values.push(last.value);
    return values;
  }
  sort(){
    var values = bubbleSort(this.toArray());
    this.clear();
    for(var i=0;i<values.length;i++){
      this.insert(values[i]);
    }
    return this;
  }
  pop(){
    if(!this.isEmpty()){
      var values = this.toArray();
      this.remove(values[values.length-1]);
      return values[values.length-1];
    } else return "List is empty.";
  }
  push(value){
    if(!this.isEmpty()){
      list.insert(value);
    }else return "List is empty.";
  }
  setValue(index,newValue){
    if(this.isEmpty()){
      this.insert(newValue);
      return;
    }
    if(this.indexOf(index)+1>-1){
      if(index === 0){
        this.head.value = newValue;
        return;
      }
      var count = 0;
      var last = this.head;
      
      while(last.next){
        if(count+1 === index){
          last.value = newValue;
          return;
        }
        
        last = last.next;
        count++;
      }
      last.value = newValue;
    } else return "Index not in list.";
  }
  clone(){
    return this;
  }
  peek(){
    return this.head;
  }
  poll(){
    var head = this.head;
    this.head = this.head.next;
    return head;
  }
}

var list = new LinkedList();
for(var i=4;i>=0;i--){
  list.insert(i);
}

list.poll();
list.print();

function bubbleSort(arr){
  for(var i = 0;i<arr.length-1;i++){
    for(var j = i+1; j<arr.length;j++){
      if(arr[j] < arr[i]){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
