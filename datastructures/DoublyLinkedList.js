class DoublyLinkedList {
  
 constructor() {
   this.head = null;
   this.tail = null;
 }
 
 add(element) {
   //if head is null, head becomes new Node with null previous pointer
   if(this.head === null) {
     this.head = new Node(element,null);
   } else {
     //iterate through linked list until next pointer is null
     let h = this.head;
      while(h.next !== null) {
        h = h.next;
      } 
      //set tail to new Node with previous Node as current Node
      this.tail = new Node(element,h);
     //current Node's next pointer points to tail
      h.next = this.tail;
   }
 }
 
 remove(element) {
   if(this.head === null) {
     return null;
   }
   //check if element == head.data or tail.data
   else if(this.head.data === element) {
     let head = this.head;
     this.head = this.head.next;
     return head.data;
   } 
   else if(this.tail.data === element) {
     let tail = this.tail;
     this.tail.prev.next = null;
     return tail.data;
   } else {
     //iterate through linkedlist until current Node.next is null
     let h = this.head;
     while(h.next) {
       h = h.next;
       if(h.data === element) {
         //if element found then set current node's previous pointer to current node's next pointer and return current node's data
         let next = h.next;
         let prev = h.prev;
         let removeElement = h;
         h = h.prev;
         h.next = next;
         return removeElement.data;
       }
     }
     return null;
   }
 }
 
 reverse() {
   if(this.head === null) {
     return null;
   }
   //get reveresd array from linkedlist values
  let values = this.values().reverse();
   //reset linkedlist to null
   this.head = null;
   this.tail = null;
   //add reversed  array to linkedlist
   for(let value of values) {
     this.add(value);
   }
   return this.head;
 }
 
 values() {
   let head = this.head;
   let vals = [head.data];
   while(head.next) {
     head = head.next;
     vals.push(head.data);
   }
   return vals;
 }
 
}
//each Node object has data and references to both previous and next nodes
class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}
