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
})();
