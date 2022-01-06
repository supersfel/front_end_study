//practice.ts

class Queue<T> {
    list : T[] = []; //T로이루어진 배열

    get length() {
        return this.list.length;
    }


    enqueue(item : T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);

while (queue.length > 0) {
    console.log(queue.dequeue());
}

