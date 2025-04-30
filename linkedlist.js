


class node {

    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class linkedlist {

    constructor() {
        this.head = null
    }

    append(value) {
        const newNode = new node(value)
        if (!this.head) {
            this.head = newNode;
            return
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode
    }
}