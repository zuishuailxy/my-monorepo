class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const findPath = (root, target) => {
  const path = [];

  const _dfs = (node) => {
    if (!node) return false;
    path.push(node);
    if (node.val === target) return true;
    if (_dfs(node.left) || _dfs(node.right)) return true;

    path.pop();
    return false;
  };

  _dfs(root);
  return path;
};

const target = 5;
const path = findPath(root, target);

console.log("Path to target", target, ":", path);
path.forEach((node) => console.log(node.val));
