

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    append(value) {
        let newNode = new Node(value)
        if (!this.tail) {
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }
        let curr = this.tail
        curr.next = newNode
        newNode.prev = curr
        this.tail = newNode
    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removelast() {
        if (!this.head) {
            return
        }
        let curr = this.head
        while (this.tail !== curr.next) {
            curr = curr.next
        }
        curr.next = null
        this.tail = curr
    }
    display() {
        if (!this.head) {
            return console.log("empty");

        }
        let curr = this.head

        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
    printBackword() {
        let curr = this.tail
        while (curr) {
            console.log(curr.value);
            curr = curr.prev
        }
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)





list.printBackword()

