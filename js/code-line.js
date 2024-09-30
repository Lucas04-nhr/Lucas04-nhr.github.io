// 代码框显示行数
$(document).ready(function () {
  function get_count(code_text) { //计算代码行数
    const lines = code_text.split('\n');
    return lines.length; // 包括空行
  }

  function create_ul(code_text) { //根据行数生成ul标签
    const lines = code_text.split('\n');
    const res_ul = $('<ul class="code-number"></ul>');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // 检查每行是否为空，空行也计入行号
      const li = $(`<li>${i + 1} ${line ? '' : ' '}</li>`);
      res_ul.append(li);
    }
    
    return res_ul;
  }

  const code_pre = $(".highlighter-rouge pre.highlight"); //代码框
  code_pre.each(function (index, dom) {
    if ($(dom).parents(".language-plaintext")[0]) { //如果是普通文本框
      $(dom).css("cssText", "padding-left: 16px !important;");
      return; //不显示行数
    }
    const code_text = $(dom).children('code').text(); //文本内容
    $(dom).append(create_ul(code_text)); //循环添加
  });
});
