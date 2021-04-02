

function findAdjacent(verticeName, vertices, edges){
   return edges.filter(edge=>edge.includes(verticeName)   //=>find edges include given verticeName =>[ [ '23rd&6th', '34th&6th' ], [ '34th&6th', '28th&Bwy' ] ]
   ).map(edge=>edge.find(a=>a!=verticeName)  //map array of edges, return element not equal to give name => [ '23rd&6th', '28th&Bwy' ]
   ).map(verticeName=>findNode(verticeName, vertices) //map array of adjacentName=> return array of(node with adjacentName)=>
   ).filter(n=>n.distance == null) //filter array of vertices which distance is null
    
}

function findNode(nodeName, nodes){
    return nodes.find(n=> n.name===nodeName)
}

function markDistanceAndPredecessor(node, adjacentNodes){
   adjacentNodes.map(adjacentNode=>{
        adjacentNode.distance = node.distance +1
        adjacentNode.predecessor = node
    })
}


function bfs(startingNode, vertices, edges){
    //initiate queue and exploredQueue
    startingNode.distance = 0
    let queue = [startingNode]
    let exploredQueue = []
   
   //if queue.length >0, find the firstNode's adjacentNode, and push adjacentNode into Q, remove currentNode from q and push to explored q
    while(queue.length > 0){
        let currentNode = queue.shift()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        markDistanceAndPredecessor(currentNode,adjacentNodes)
        exploredQueue.push(currentNode)
        queue = queue.concat(adjacentNodes) 
        }
  return exploredQueue

}






