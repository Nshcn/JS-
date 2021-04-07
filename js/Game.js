(function () {
  window.Game = function () {
    this.row = 20;
    this.col = 12;
    // 初始化
    this.init();
    //   实例方块
    this.block = new Block();
    //   实例地图
    this.map = new Map(this);
    //   启动定时器
    this.start();
    //   事件监听
    this.bindEvent();
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
  Game.prototype.bindEvent = function () {
    // 备份
    var self = this;

    $(window).keydown(function (event) {
      console.log(event.keyCode);
      // console.log(event.keydown);
      if (event.keyCode == 37) {
        //判断时候有向左移动的能力
        self.block.checkLeft();
      } else if (event.keyCode == 39) {
        //判断时候有右左移动的能力
        self.block.checkRight();
      } else if (event.keyCode == 32) {
        // 一键到底，空格到底
        self.block.checkBlockEnd();
      } else if (event.keyCode == 38) {
        // 键盘上用来切换方向
        self.block.checkRot();
      }
    });
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
