


// // class node {

// //     constructor(value) {
// //         this.value = value;
// //         this.next = null
// //     }
// // }

// // class linkedlist {

// //     constructor() {
// //         this.head = null
// //     }

// //     append(value) {
// //         const newNode = new node(value)
// //         if (!this.head) {
// //             this.head = newNode;
// //             return
// //         }
// //         let current = this.head;
// //         while (current.next) {
// //             current = current.next;
// //         }
// //         current.next = newNode
// //     }

// //     display() {

// //         let current = this.head;
// //         while (current) {
// //             console.log(current.value);
// //             current = current.next

// //         }
// //     }
// // }

// // let list = new linkedlist()


// // list.append(50)
// // list.append(50)
// // list.append(50)
// // list.append(50)
// // list.append(1000)
// // list.append(50)
// // list.append(50)
// // list.append(50)
// // list.append(50)
// // list.display()





// // class node {
// //     constructor(value) {
// //         this.value = value
// //         this.next = null
// //     }
// // }


// // class linkedlist {
// //     constructor() {
// //         this.head = null
// //     }

// //     add(value) {
// //         let newNode = new node(value)
// //         if (!this.head) {
// //             this.head = newNode
// //             return
// //         }
// //         let current = this.head
// //         while (current) {
// //             current = current.next
// //         }
// //         current.next = newNode
// //     }

// //     display() {
// //         let current = this.head
// //         while (current) {
// //             console.log(current.value)
// //             current = current.next
// //         }
// //     }
// // }





// // let list = new linkedlist()

// // list.add(208)
// // list.display()





// // class node {
// //     constructor(value) {
// //         this.value = value
// //         this.next = null
// //     }
// // }


// // class linkedlist {
// //     constructor() {
// //         this.head = null
// //     }

// //     add(value) {

// //         let newnode = new node(value)

// //         if (!this.head) {
// //             this.head = newnode
// //             return
// //         }

// //         let currentnode = this.head

// //         while (currentnode.next) {
// //             currentnode = currentnode.next
// //         }
// //         currentnode.next = newnode
// //     }

// //     show() {
// //         let current = this.head
// //         let lists = ""
// //         while (current) {
// //             lists += current.value + "  "
// //             current = current.next
// //         }
// //         return lists
// //     }
// // }

// // let list = new linkedlist()

// // list.add(78)
// // list.add(62)
// // list.add(63)
// // list.add(41)
// // list.add(96)
// // list.add(41)
// // list.add(0)
// // list.add(21)

// // console.log(list.show());








// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }



// class linkedlist {
//     constructor() {
//         this.head = null
//     }

//     addFirst(value) {
//         const newNode = new Node(value)
//         newNode.next = this.head
//         this.head = newNode
//     }

//     addLast(value) {
//         const newNode = new Node(value)
//         if (!this.head) {
//             this.head = newNode
//             return
//         }
//         let current = this.head
//         while (current.next) {
//             current = current.next
//         }
//         current.next = newNode
//     }

//     size() {
//         let count = 0
//         let current = this.head
//         while (current) {
//             count++
//             current = current.next
//         }
//         return count
//     }

//     addAt(index, value) {
//         if (index < 0 || index > this.size()) {
//             console.log("invalid index");
//             return
//         }
//         const newNode = new Node(value)

//         let current = this.head
//         for (let i = 0; i < index - 1; i++) {
//             current = current.next
//         }
//         newNode.next = current.next
//         current.next = newNode
//     }

//     removeTop() {
//         if (!this.head) {
//             return
//         }
//         this.head = this.head.next
//     }

//     removeLast() {
//         if (!this.head) {
//             return
//         }
//         let current = this.head;
//         while (current.next.next) {
//             current = current.next;
//         }
//         current.next = null;
//     }

//     removeAt(index) {
//         if (!this.head) {
//             return;
//         }
//         if (index < 0 || index > this.size()) {
//             console.log("invalid index");
//             return;
//         }
//         let current = this.head
//         for (let i = 0; i < index - 1; i++) {
//             current = current.next
//         }
//         current.next = current.next.next
//     }

//     print() {
//         let current = this.head
//         while (current) {
//             console.log(current.value, "  ")
//             current = current.next
//         }
//     }
// }

// let list = new linkedlist()

// list.addLast(2)
// list.addFirst(3)
// list.addFirst(34)
// list.addFirst(43)
// list.addFirst(5)
// list.addAt(3, 90)
// list.removeAt(3)
// list.removeLast()
// list.print()

// console.log("size ", list.size());





console.log(Math.floor(Math.random() * 10000))



