/*********************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/


// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
  
  // Constructor to create a new BST 
  function BinarySearchTree() {
    this.root = null;
  }
  
  BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
    // your code goes here
    let root = this.root, max = -1;
  
    if(!root) return max;
    
    let currentNode = root;
  
    
    while(currentNode !== null){
      if(currentNode.key > num){
        if(!currentNode.left) break;
        else{
          currentNode = currentNode.left;
          max = Math.max(currentNode.key, max)
        }
      }else{
        if(!currentNode.right) break;
        else{
          currentNode = currentNode.right
          max = Math.max(currentNode.key, max)
        }
      }
    }
    return max;
  }
  
  // Creates a new node by a key and inserts it to the BST
  BinarySearchTree.prototype.insert = function(key) {
    var root = this.root;
  
    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }
  
    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert the new node
    var currentNode = root;
    var newNode = new Node(key);
  
    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
  }
  
  /*********************************************
   * Driver program to test above function     *
   *********************************************/
  
  // Create a Binary Search Tree
  var bst = new BinarySearchTree();
  bst.insert(20);
  bst.insert(9);
  bst.insert(25);
  bst.insert(5);
  bst.insert(12);
  bst.insert(11);
  bst.insert(14);
  
  var result = bst.findLargestSmallerKey(17);
  
  console.log("Largest smaller number is " + result);
  