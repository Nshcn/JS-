(function () {
  window.Game = function () {
    this.row = 20;
    this.col = 12;
    // 初始化
    this.init();
    //   实例方块
    this.block = new Block();
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
  Game.prototype.start = function () {
    var self = this;
    this.timer = setInterval(() => {
      self.block.render();
    }, 500);
  };
})();
