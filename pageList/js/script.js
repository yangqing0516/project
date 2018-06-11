class pageFn {
  constructor(opt) {
    this.opt = opt;
    this.opt.ele = opt.el;
    this.opt.data = opt.dataJson;
    this.opt.pageNum = opt.pageContent;
    this.opt.ckFn = opt.cb;
    this.init();
  }

  // 初始化状态
  init() {
    // 通过pageNum 计算出 一共有多少页
    let count = Math.ceil(this.opt.data.length / this.opt.pageNum);
    this.render(0, count);
    this.event(count);
    this.clickPage(0, count);
  }

  // 渲染内容列表和分页器
  render(ind, count) {
    var data = this.opt.data;
    // 遍历所有的数据---->渲染内容列表
    let contStr = `${data.map((val, i) => {
      //  ?
      if (i >= ind * this.opt.pageNum && i < (ind + 1) * this.opt.pageNum - 1) {
        return `<tr>
                    <td>${val.name}</td>
                    <td>${val.address}</td>
                    <td>${val.age}</td>
                </tr>`;
      }
    })}`;
    $("tbody").html(contStr);
  }
  // 渲染分页器
  clickPage(ind, count) {
    var pageStr = "";
    for (let i = ind; i < count; i++) {
      if (i === 0) {
        pageStr += `<span class="active">${i + 1}</span>`;
      } else {
        pageStr += `<span>${i + 1}</span>`;
      }
    }

    $(".page-list").html(pageStr);
  }
  // 点击分页器改变数据
  event(count) {
    let that = this;
    let num = 0;
    // ?为什么不能用箭头函数
    $(".page-list").on("click", "span", function() {
      let ind = $(this).index();
      num = ind;
      that.change(ind);
      that.render(ind, count);
    });

    // 点击上一页
    $(".pre").on("click", function() {
      num--;
      if (num < 0) {
        num = 0;
      }
      that.change(num);
      that.render(num);
    });

    // 点击下一页
    $(".next").on("click", function() {
      num++;
      if (num > count) {
        num = count;
      }
      that.render(num)
      that.change(num);
    });
  }

  change(ind) {
    $(".page-list")
      .find("span")
      .eq(ind)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
}
