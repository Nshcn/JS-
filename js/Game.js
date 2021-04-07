(function () {
  window.Game = function () {
    this.row = 20;
    this.col = 12;
    // 初始化
    this.init();
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
})();
