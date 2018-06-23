<template>
    <div>
        <div v-for="(item,index) in arrlist" :key="index">
            <router-link :to="{path:'/rankdetail',query:{id:item.data.albummid}}" tag="dl" class="songlist">
                <dt>
                    <img :src="`//y.gtimg.cn/music/photo_new/T002R90x90M000${item.data.albummid}.jpg?max_age=2592000`" alt="">
                </dt>
                <dd>
                    <span>{{item.data.songname}}</span>
                </dd>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import jsonp from 'jsonp'
    export default {
        data(){
            return{
                arrlist:[]
            }
        },
        mounted(){
            let url="https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-06-21&topid=4&type=top&song_begin=0&song_num=30&g_tk=1101102400&loginUin=634458474&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0";
            jsonp(url,{
                param:'jsonpCallback',
                prefix:'jp'
            },(err,res)=>{
                this.arrlist=res.songlist;
            })
        }
    }
</script>

<style scoped lang="scss">
.songlist{
    width:100%;
    display:flex;
    margin-top:10px;
    dt{
        margin:0 10px;
        img{
            width:40px;
            height:40px;
        }
    }
    dd{
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 75%;
        margin-right: 8px;
        white-space: nowrap;
        line-height:40px;
    }
}
</style>