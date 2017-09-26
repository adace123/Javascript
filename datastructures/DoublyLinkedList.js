class DoublyLinkedList {
  
 constructor() {
   this.head = null;
   this.tail = null;
 }
 
 add(element) {
   if(this.head === null) {
     this.head = new Node(element,null);
   } else {
     let h = this.head;
      while(h.next !== null) {
        h = h.next;
      } 
      this.tail = new Node(element,h);
      h.next = this.tail;
   }
 }
 
 remove(element) {
   if(this.head === null) {
     return null;
   }
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
     let h = this.head;
     while(h.next) {
       h = h.next;
       if(h.data === element) {
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
  let values = this.values().reverse();
   this.head = null;
   this.tail = null;
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

class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}
