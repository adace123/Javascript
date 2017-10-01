class BinarySearchTree {
  constructor() {
    this.root = null;
    this.head = this.root;
  }
  //findMax and findMin are implemented iteratively; each create reference to root and 
  //reassign that reference to its next member on each loop iteration until end of tree is reached
  finxMax(){
    if(!this.root) {
        return null;
      }
      let max = this.root.value;
      let root = this.root;
      while(root.right){
        root = root.right;
        if(root.value > max) {
          max = root.value;
        }
      }
      return max;
  }
  
  findMin() {
    if(!this.root) {
        return null;
      }
      let min = this.root.value;
      let root = this.root;
      while(root.left){
        root = root.left;
        if(root.value < min) {
          min = root.value;
        }
      }
      return min;
  }
  
  contains(value,node = this.root) {
    
    if(!this.root){
      return null;
    } 
    if(value === node.value) {
      return true;
    }
    if(node.left && value < node.value) {
      return this.contains(value,node.left);
    } 
    else if(node.right && value > node.value) {
      return this.contains(value,node.right);
    }
    else return false;
  }
  
  add(value,node = this.root) {
    //root is new node if null
    if(!this.root){
      this.root = new Node(value);
      return this.root;
    } 
    
    else {
      //if value is less than current node value and node.left is null then node.left is new node
      //otherwise if current node's left node is not null then call add recursively passing in node.left
      if(value < node.value) {
        if(!node.left) {
          node.left = new Node(value);
        }
        else this.add(value,node.left);
        //repeat checks for right node
      } else {
        if(!node.right) {
          node.right = new Node(value);
        }
        else this.add(value,node.right);
      }
    }
  }
  
}
//each Node object has value and references to left and right nodes
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let bst = new BinarySearchTree();
bst.add(9);
bst.add(5);
bst.add(12);
bst.add(7);
