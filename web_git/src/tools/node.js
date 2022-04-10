class Node{
  parentNode;
  parentNodes;

  /**
   * 获取指定对象的所有父对象
   * @param node
   * 当前节点，要查找其所有父节点的节点
   * @param arr
   * 节点跟数组，必须是数组形式，一个节点包含子节点，则键必须是用children
   * @param key
   * 查找定位当前节点的键
   * @param value
   * 查找定位当前节点的值
   * @returns {Array}
   * 所有父节点对象的列表
   */
  parent(node, arr, key, value)
  {
    // 初始化相关参数
    this.findNode = null;
    this.parentNode = null;
    this.parentNodes = [];
    // 将当前对象从左侧入栈this.parentNodes
    this.parentNodes.unshift(node);
    console.log('++++')
    console.log(node.title)
    console.log(node.id)
    console.log('++++')
    // 调用this.findParents()递归查找，结果会存储到this.parentNodes中
    this.findParents(arr, key, value);
    // 返回查找结果
    return this.parentNodes;
  }
  /**
   * 查找对象的所有父对象
   * @param arr
   * @param key
   * @param value
   */
  findParents(arr, key, value)
  {
    console.log('findParents')
    // 遍历数组
    for(let i = 0, j = arr.length; i < j; i++)
    {
      // 调用findParent
      this.findParent(this, arr[0], key, value);
    }
    // 调用findParent之后，this.parentNode有两个可能的值
    // 1.对象没有父对象，那么this.parentNode的值是null
    // 2.对象存在父对象，那么this.parentNode的值是父对象
    // 如果存在父对象
    if(this.parentNode !== null)
    {
      // 把父对象左侧入栈this.parentNodes
      this.parentNodes.unshift(this.parentNode);
      // TODO 需要配置key的值，一般都是ID的值，根节点默认id=0
      // 按照约定，跟节点的属性key对应的值是0
      // 如果当前父对象的属性Key对应的值不是0，说明当前的父对象也存在其父对象
      if(this.parentNode[key] !== '1')
      {
        // 调用自身递归遍历查找当前父对象的父对象
        // 遍历终止条件：不存在父对象，或者父对象不存在其父对象，最终返回一个对象数组，层级从做到右从父级到子级
        this.findParents(arr, key, this.parentNode[key]);
      }
    }
  }
  /**
   * 查找对象的父对象
   * @param _this
   * @param obj
   * @param key
   * @param value
   */
  findParent(_this, obj, key, value)
  {
    // 如果当前对象包含子对象并且子对象的数量大于0
    if(obj.children && obj.children.length > 0)
    {
      // 循环遍历当前对象的子对象
      for(let i = 0, j = obj.children.length; i < j; i++)
      {
        // 如果当前对象的子对象key属性的值等于value，那么当前对象就是要查找的父对象
        if(obj.children[i][key] === value)
        {
          // 保存父对象
          console.log('---->')
          console.log(obj.children[i][key])
          console.log(value)
          console.log(obj.title)
          console.log('<----')
          _this.parentNode = obj;
          // 跳出循环
          break
        }
        // 否则就继续递归查找
        _this.findParent(_this, obj.children[i], key, value);
      }
    }
  }
  setArr(arr, key, value)
  {
    // 遍历数组
    for(let i = 0, j = arr.length; i < j; i++)
    {
      // 更新对象属性
      arr[i][key] = value;
      // 如果当前对象包含子对象，并且子对象的个数大于0
      if(arr[i].children && arr[i].children.length > 0)
      {
        // 递归当前那对象的子对象数组
        this.setArr(arr[i].children, key, value);
      }
    }
  }
  setObj(obj, key, value)
  {
    // 更新对象属性
    obj[key] = value;
    // 如果当前对象包含子对象，并且子对象的个数大于0
    if(obj.children && obj.children.length > 0)
    {
      // 遍历每一个当前对象的子对象
      for(let i = 0, j = obj.children.length; i < j; i++)
      {
        // 递归子对象
        this.setObj(obj.children[i], key, value);
      }
    }
  }
  child(node, id)
  {
    let childIds = [];
    this.findChild(node, id, childIds);
    return childIds;
  }
  findChild(node, id, childIds)
  {
    childIds.push(node[id]);
    if(!node.children)
    {
      return
    }
    for(let i = 0, j = node.children.length; i < j; i++)
    {
      childIds.push(node.children[i][id]);
      if(node.children[i].children)
      {
        this.findChild(node.children[i], id, childIds);
      }
    }
  }
  node(data, key, value)
  {
    let _this = this;
    if(data instanceof Array)
    {
      this.findNodeFromArray(_this, data, key, value);
    }
    if(data instanceof Object)
    {
      this.findNodeFromObject(_this, data, key, value);
    }
    return this.findNode;
  }
  findNodeFromArray(_this, arr, key, value)
  {
    for(let i = 0, j = arr.length; i < j; i++)
    {
      if(arr[i][key] === value)
      {
        _this.findNode = arr[i];
        break
      }
      if(arr[i].children && arr[i].children.length > 0)
      {
        this.findNodeFromArray(_this, arr[i].children, key, value)
      }
    }
  }
  findNodeFromObject(_this, node, key, value)
  {
    if(node[key] === value)
    {
      _this.findNode = node;
      return
    }
    if(node.children && node.children.length > 0)
    {
      for(let i = 0, j = node.children.length; i < j; i ++)
      {
        this.findNodeFromObject(_this, node.children[i], key, value);
      }
    }
  }
}
/**
 * 构建安装
 */
export default {
  install: function (Vue) {
    Vue.prototype.node = new Node()
  }
}
