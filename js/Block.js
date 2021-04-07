(function () {
  window.Block = function () {
    //  得到随机的方块
    //   第一步罗列所有的类型
    var allType = ["S", "T", "O", "L", "J", "I", "Z"];
    //   第二步从所有的类型中随机得到一种
    this.type = allType[parseInt(Math.random() * allType.length)];
    //   第三步得到随机的类型方块，然后通过这个类型获取当前的类型所有形状总数量，因为不同类型的方块形状数量也不同
    this.allDir = fangkuai[this.type].length;
    //   第四步通过当前的allDir的length随机得到不同的数字
    this.dir = parseInt(Math.random() * this.allDir);
    //   第五步得到随机的方块
    this.code = fangkuai[this.type][this.dir];
    //   初始的行
    this.row = 0;
    //   初始的列，因为要居中显示，所以列要为4
    this.col = 4;
  };
  Block.prototype.render = function () {
    //   渲染四行四列的方块
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        //   如果四乘四矩阵中的某一项不为零，则设置颜色
        if (this.code[i][j] != 0) {
          // 加上row，col校准，使得方块被渲染到中间显示
          game.setColor(i + this.row, j + this.col, this.code[i][j]);
        }
      }
    }
  };
  // 能力判断方法，判读的是对应位置的方块和地图是否有都不为0的情况，如果有返回true,否则返回false
  Block.prototype.check = function (row, col) {
    // check函数的row和col指的是要校验的地图的row和col的位置
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (this.code[i][j] != 0 && game.map.mapCode[row + i][col + j] !== 0) {
          return false;
        }
      }
    }
    return true;
  };
  // 方块下落，需要判断当前的方块能否下落
  Block.prototype.checkDown = function () {
    // 判断当前地图的位置和自己方块的位置是否有重合，this.row + 1指的是预判断
    // 预判断就是在下一次方块将要到达的位置是否有对应的地图不为0
    if (this.check(this.row + 1, this.col)) {
      this.row++;
    } else {
      // 此时就是下落到底的状态，生成新方块
      game.block = new Block();
      // 方块已经到底了，然后要渲染到地图的code中
      this.renderMap();
    }
  };
  // 将已经到底的方块渲染到地图中
  Block.prototype.renderMap = function () {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        //   将现在已有的方块渲染到Map类的mapCode上
        if (this.code[i][j] != 0) {
          // 改变地图的mapCode数据
          game.map.mapCode[this.row + i][this.col + j] = this.code[i][j];
        }
      }
    }
  };
})();
