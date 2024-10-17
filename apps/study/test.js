function removeType4Nodes(data) {
  // 如果没有 children，直接返回
  if (!data.children || data.children.length === 0) {
      return;
  }

  let childrenToKeep = [];

  data.children.forEach(child => {
      // 如果子节点类型是 4，把它的子节点挂到当前节点下
      if (child.type === 4) {
          if (child.children && child.children.length > 0) {
              // 把 type = 4 的子节点加到父节点的 children 中
              childrenToKeep.push(...child.children);
          }
      } else {
          // 递归处理子节点
          removeType4Nodes(child);
          childrenToKeep.push(child);
      }
  });

  // 更新当前节点的 children
  data.children = childrenToKeep;
}

// 数据结构
const data = {
  "value": "B2BShareStore",
  "label": "B2B Share Store",
  "type": 1,
  "children": [
      {
          "value": "ussharestore",
          "label": "B2B Share Store United States of America",
          "type": 3,
          "children": [
              {
                  "value": "B2bShareUSEDU",
                  "label": "EDU",
                  "type": 4,
                  "children": [
                      {
                          "value": "1213521470",
                          "label": "GOUCHER COLLEGE",
                          "type": 5
                      }
                  ]
              }
          ]
      }
  ]
};

// 调用函数处理数据
removeType4Nodes(data);

// 输出处理后的数据
console.log(JSON.stringify(data, null, 4));