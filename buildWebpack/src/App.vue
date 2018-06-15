<template>
    <div class="wrap">
        <header>
            <a href="#">
                <img src="./image/logo1.png" />
            </a>
            <form action="">
                <input type="text" placeholder="搜索目的地/攻略/游记" />
                <a href="#">
                    <i class="icon iconfont icon-fangdajing"></i>
                </a>
            </form>
            <a href="#">
                登录
            </a>
        </header>
        <section>
            <!--轮播-->
            <div class="swiper-box" ref="swiperBox">
                <swiper class="box-container" :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="items in data.slide" :key="items.id">
                        <!-- :key="items.id" 必须加，不加则报错-->
                        <img :src="items" alt="" />
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <!--旅行列表-->
            <div class="nav-li">
                <dl v-for="(item, index) in data.icon" :key="index">
                    <dt>
                        <img :src="item.ico" alt="">
                    </dt>
                    <dd>{{item.tit}}</dd>
                </dl>
            </div>
            <div class="navBars">
                < &nbsp;推荐攻略 &nbsp;>
            </div>
            <!--内容块-->
            <div class="content">
                <div class="content_page" v-for="(item, index) in data.data" :key="index">
                    <div class="title">
                        <h1>{{item.title}}</h1>
                        <span>峰首</span>
                    </div>
                    <dl>
                        <dt>
                            <img :src="item.url" />
                        </dt>
                        <dd>
                            <h1>{{item.describe}}</h1>
                            <p>
                                <span>{{item.see}}</span>
                                <b>
                                    <em>{{item.name}}</em>
                                    <img :src="item.photo"/>
                                </b>
                            </p>
                        </dd>
                    </dl>
                </div>
            </div>
            <!--logo-->
            <div class="logo">
                <img src="./image/logo.png" />
            </div>
        </section>
    </div>
</template>

<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper';
    import axios from 'axios';
    export default {
        data() {
            return {
                data: [],
                swiperOption: {
                    notNextTick: true, // 可以再第一时间获取到swiper对象
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    paginationType: 'bullets'
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods: {
            init() {
                axios.get('/api').then(res => {
                    this.data = res.data;
                    console.log(this.data);

                })
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style>
</style>