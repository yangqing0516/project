import ajax from './server/ajax.js';
import './src/css/style.css';
import './src/css/style.scss';
import './src/css/swiper-3.4.2.min.css';
import './src/static/fonts(1)/iconfont.css';
import Swiper from './src/static/js/swiper-3.4.2.min.js';


console.log(ajax);
ajax({
    url: './src/static/data/data.json',
    type: 'get',
    success: function (data) {  
        var res = JSON.parse(data);
        console.log(res);
    }
})

new Swiper('.slide',{
    autoplay: 1000,
    loop: true,
    pagination: '.page'
});

