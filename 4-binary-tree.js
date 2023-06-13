class Node {
    constructor(value) {
        this.nodeValue = value;
        this.left = null;
        this.right = null;
    }

    add(value) {
        if (this.nodeValue === null) {
            this.nodeValue = value;
            return
        }
        if (value < this.nodeValue){
            !this.left
                ? this.left = new Node(value, this)
                : this.left.add(value);
        } else {
            !this.right
                ? this.right = new Node(value, this)
                : this.right.add(value);
        }
    }

    print() {
        const result = recursion(this);

        function recursion(tree){
            const left = tree.left ? recursion(tree.left) : null
            const right = tree.right ? recursion(tree.right) : null
            return {
                value: tree.nodeValue,
                left,
                right,
            }
        }

        return console.log(result);
    }
}

function binaryRecursionSearchTree(item, tree) {
    const result = [];
    return recursion(tree);
    function recursion(tree) {
        result.push(tree.nodeValue);
        switch (true){
            case item === tree.nodeValue:
                return console.log(result);
            case  item < tree.nodeValue:
                return tree.left ? recursion(tree.left) : console.log("Not found")
            case  item > tree.nodeValue:
                return tree.right ? recursion(tree.right) : console.log("Not found")
        }
    }

}


const arr = [1,4,2,3,6,5,8,6,9,7,5,4,154,45];
const tree = new Node(null);
arr.forEach(item => tree.add(item));

tree.print();
binaryRecursionSearchTree(5, tree);


