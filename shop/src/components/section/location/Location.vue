<template>
    <div class="myLocation">
        <div class="location">
            <em>路飞   135****5354</em>
            <p>
                <span><i class="icon iconfont icon-dizhi-01"></i></span>
                <span>了对方会埃里克森的放假和我楼上的发挥克里斯多夫</span>
                <span><i class="icon iconfont icon-angle-right"></i></span>
            </p>
        </div>
        <div class="bgImg"><img src="../../../assets/bg.png" alt="" /></div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="" type="text/css" scoped>
	.myLocation {
		background: #fff;
	}
	
    .location {
        width: 100%;
    }

    .location em {
    	display: inline-block;
        font-style: normal;
        height: 50px;
        line-height: 50px;
        padding-left: 40px;
    }

    .location p {
        display: flex;
        height: 50px;
        padding: 0 5px;
        justify-content: space-between;
        align-items: center;
    }

    .location p span:nth-of-type(2) {
        font-size: 14px;
        vertical-align: middle;
    }
    
    .bgImg {
    	width: 100%;
    	height: auto;
    }
    
    .bgImg img {
    	width: 100%;
    	height: 13px;
    	display: block;
    	margin-top: 7px;
    }
</style>