<template>
    <div>
        <header class="header">
            QQ音乐生活馆
        </header>
        <div class="section">
            <router-link to="/rank" tag="span">排行榜</router-link>
            <router-link to="/list" tag="span">歌单</router-link>
            <router-link to="/hot" tag="span">热门音乐</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import './static/css/reset.css'
import './static/fonts(1)/iconfont.css'
    export default {
        
    }
</script>

<style scoped lang="scss">
.header{
    width:100%;
    height:44px;
    line-height: 44px;
    text-align:center;
    background: #31c27c;
    color:#fff;
}
.section{
    width:100%;
    height:44px;
    display:flex;
    align-items:center;
    span{
        flex:1;
        text-align:center;
        height:44px;
        line-height: 44px;
        &.router-link-active{
            color: #31c27c;
            border-bottom:2px solid #31c27c;
        }
    }
}

</style>