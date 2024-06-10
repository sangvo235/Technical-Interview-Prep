/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {

    if (root === null) return [];

    let queue = [root];
    let results = [];

    while (queue.length) {
        let levelSize = queue.length;

        while(levelSize) {
            let currentNode = queue.shift();

            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)

            if (levelSize === 1) results.push(currentNode.val);
            levelSize--;
        }
    }
    return results;
    
};

// Time Complexity: O(n)
// Space Complexity: O(n)