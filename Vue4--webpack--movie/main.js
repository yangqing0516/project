import imgScroll from './modules/imgScroll';
import ajax from './modules/ajax';
import IScroll from './lib/js/iscroll.js';
import jquery from './lib/js/jquery.js';
import './lib/fonts(1)/iconfont.css';
import './css/style.scss';

/* 请求ajax */
ajax({
    url: './data/data.json',
    type: 'get',
    success: function(data) {
        const json = JSON.parse(data);
        render(json);
    }
});

/* 渲染图片内容 */
function render(json) {
    const imgArr = json.data.movie_data;
    const movies = document.querySelector('.movies');
    let imgHtml = `<ul class="ulList">
    ${imgArr.map(function (val){
        return `<li><img src="${val.movie_img_url}"/></li>`
    }).join('')}
    </ul>`
    movies.innerHTML = imgHtml;
    const lis = document.querySelector(".ulList").children;
    scrollFn(lis);
}
/* 图片图片滚动条 */
function scrollFn(lis){
    let num = 0;
    for (let i = 0; i < lis.length; i++) {
        num += lis[i].offsetWidth;
    }
    console.log(document.querySelector(".ulList"));
    new IScroll(".movies", {
        scrollX: true,
        scrollY: false,
        scrollbars: true //检测滚动条
    });
}
