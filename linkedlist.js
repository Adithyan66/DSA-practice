


// class node {

//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class linkedlist {

//     constructor() {
//         this.head = null
//     }

//     append(value) {
//         const newNode = new node(value)
//         if (!this.head) {
//             this.head = newNode;
//             return
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode
//     }

//     display() {

//         let current = this.head;
//         while (current) {
//             console.log(current.value);
//             current = current.next

//         }
//     }
// }

// let list = new linkedlist()


// list.append(50)
// list.append(50)
// list.append(50)
// list.append(50)
// list.append(1000)
// list.append(50)
// list.append(50)
// list.append(50)
// list.append(50)
// list.display()





// class node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }


// class linkedlist {
//     constructor() {
//         this.head = null
//     }

//     add(value) {
//         let newNode = new node(value)
//         if (!this.head) {
//             this.head = newNode
//             return
//         }
//         let current = this.head
//         while (current) {
//             current = current.next
//         }
//         current.next = newNode
//     }

//     display() {
//         let current = this.head
//         while (current) {
//             console.log(current.value)
//             current = current.next
//         }
//     }
// }





// let list = new linkedlist()

// list.add(208)
// list.display()





class node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class linkedlist {
    constructor() {
        this.head = null
    }

    add(value) {

        let newnode = new node(value)

        if (!this.head) {
            this.head = newnode
            return
        }

        let currentnode = this.head

        while (currentnode.next) {
            currentnode = currentnode.next
        }
        currentnode.next = newnode
    }

    show() {
        let current = this.head
        let lists = ""
        while (current) {
            lists += current.value + "  "
            current = current.next
        }
        return lists
    }
}

let list = new linkedlist()

list.add(78)
list.add(62)
list.add(63)
list.add(41)
list.add(96)
list.add(41)
list.add(0)
list.add(21)

console.log(list.show());























