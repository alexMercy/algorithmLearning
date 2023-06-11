const graph = {
    A: ['B', 'C'],
    B: ['D', 'Z', 'Y'],
    C: ['X'],
    D: ['F'],
    F: ['G']
}
let count = 0;

console.log(findWay('A','G', graph), count)

function findWay(from, to, graph) {
    const queue = [from];
    const routes = new Map();
    routes.set(from, '');

    while (queue.length) {
        const node = queue.pop();
        const neighbours = graph[node];
        if(!neighbours) continue;
        for (const neighbour of neighbours) {
            count++;
            routes.set(neighbour, node);
            if(neighbour === to) {
               return recursion(routes, neighbour);
            }
            queue.push(neighbour)
        }
    }

    return "No Way";
}

function recursion(routes, node) {
    count++
    if (!node) return [];
    return [...recursion(routes,routes.get(node)),node]
}