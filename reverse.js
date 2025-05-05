


class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    add(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
    }

    print() {
        if (!this.head) {
            console.log("empty");
            return
        }
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }

    reverse() {
        if (!this.head) {
            console.log("empty");
            return
        }
        let prev = null
        let curr = this.head
        let coming

        while (curr) {
            coming = curr.next
            curr.next = prev
            prev = curr
            curr = coming
        }
        this.head = prev
    }
}

let newNode = new LinkedList()

newNode.add(3)
newNode.add(6)
newNode.add(9)
newNode.add(12)
newNode.reverse()
newNode.print()