module.exports = function ajax(opt) {
    var type = opt.type ? opt.type : 'get';
    var async = opt.async === undefined ? true : opt.async;
    var str = '';
    //将对象转换成字符串
    if (typeof opt.data === 'object' && opt.data) {
        for (var k in opt.data) {
            str += k + '=' + opt.data[k] + "&";
        }
        opt.data = str.slice(0, -1);
    }


    //创建XMLHttpRequest对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest(); //非IE浏览器
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP"); //IE浏览器
    }



    //连接服务器
    //请求方式为get并且需要传递数据
    var dataGet = type === 'get' && opt.data ? '?' + opt.data : '';
    xhr.open(type, opt.url + encodeURI(dataGet), async)

    //判断请求状态
    xhr.onreadystatechange = function() { //请求状态发生改变时
        if (xhr.readyState === 4) { //接收响应数据
            if (xhr.status === 200) { //成功接收到响应数据时
                opt.success && opt.success(xhr.responseText) //请求成功
            } else {
                opt.error && opt.error() //请求失败 
            }
        }
    };

    //设置请求表头,必须写在send之前
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    //发送请求
    var dataPost = type === 'post' && opt.data ? opt.data : null;
    xhr.send(encodeURI(dataPost)); //发送数据
}