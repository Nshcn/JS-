(function () {
  window.Game = function () {
    this.row = 20;
    this.col = 12;
    // 初始化
    this.init();
    //   实例方块
    this.block = new Block();
    //   实例地图
    this.map = new Map();
    //   启动定时器
    this.start();
  };
  Game.prototype.init = function () {
    // 初始化大表格
    var $table = $("<table></table");
    // 渲染表格
    for (var i = 0; i < this.row; i++) {
      // 创建tr
      var $tr = $("<tr></tr>");
      for (var j = 0; j < this.col; j++) {
        //   创建td
        var $td = $("<td></td>");
        $td.appendTo($tr);
      }
      // tr放到table里
      $tr.appendTo($table);
    }
    $table.appendTo("body");
  };
  Game.prototype.setColor = function (row, col, num) {
    //   给对应的有颜色的方块添加类名
    $("tr")
      .eq(row) // eq选择器选取带有指定index值的元素
      .children("td")
      .eq(col)
      .addClass("c" + num);
  };
  // 清屏功能
  Game.prototype.clear = function () {
    for (var i = 0; i < this.row; i++) {
      for (var j = 0; j < this.col; j++) {
        $("tr").eq(i).children("td").eq(j).removeClass();
      }
    }
  };
  Game.prototype.start = function () {
    var self = this;
    this.timer = setInterval(() => {
      // 清屏
      self.clear();
      // 渲染方块
      self.block.render();
      //   渲染地图
      self.map.render(self);
      // 下落
      self.block.checkDown();
    }, 500);
  };
})();
