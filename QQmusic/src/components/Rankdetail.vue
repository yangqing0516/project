<template>
    <div class="wrap">
        <header class="header">
            <i class="icon iconfont icon-angle-left" @click="back('/rank')">返回</i>
        </header>
        <dl class="listitem">
            <dt>
                <img :src="`//y.gtimg.cn/music/photo_new/T002R300x300M000${id}.jpg?max_age=2592000`" alt="">
            </dt>
            <dd>
                <h3>{{list.name}}</h3>
                <div>
                    <span>专辑:{{list.name}}</span>
                    <span>语种:{{list.lan}}</span>
                </div>
                <div>
                    <span>发行时间:{{list.aDate}}</span>
                </div>
            </dd>
        </dl>
        <h3>推荐歌曲</h3>
        <ul>
            <li v-for="(item,index) in list.list" :key="index">
                <span v-for="(item1,index) in item.singer" :key="index">
                    歌手{{item1.name}} 
                </span>
                <span>歌名{{item.songname}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import jsonp from 'jsonp'
    export default {
        data(){
            return {
                id:'',
                list:{},
                arr:[]
            }
        },
        mounted(){
            this.id=this.$route.query.id;
            let url1="https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid="+this.id+"&g_tk=1101102400&loginUin=634458474&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0";
            jsonp(url1,{
                param:'jsonpCallback',
                prefix:'jp'
            },(err,res)=>{
                this.list=res.data;
            });
        },
        methods:{
            back(val){
                this.$router.push(val)
            }
        }
    }
</script>

<style scoped lang="scss">
.wrap{
    width:100%;
    height:100%;
    overflow:hidden;
    position:absolute;
    top:44px;
    left:0;
    z-index:10;
}
.header{
    width:100%;
    height:44px;
    line-height: 44px;
    background:#fff;
}
.listitem{
    width:100%;
    display:flex;
    margin: 10px;
    overflow:hidden;
    dt{
        width:25%;
        margin-right: 10px;
        img{
            width:100%;
            height:auto;
        }
    }
    dd{
        flex:1;
        line-height:26px;
    }
}
</style>