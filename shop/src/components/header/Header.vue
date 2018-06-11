<template>
    <div class="myHeader">
        <div class="heads">
            <span><i class="icon iconfont icon-angle-left"></i></span>
            <span>{{tit}}</span>
            <span><i class="icon iconfont icon-xiaoxi"></i><em></em></span>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["tit"]
    }
</script>
<style lang="" scoped>
    .heads {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        padding: 0 10px;
        background: #fff;
    }

    .heads span {
        position: relative;
    }

    .heads span em {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: red;
        position: absolute;
        right: 0;
        top: 0;
    }
</style>