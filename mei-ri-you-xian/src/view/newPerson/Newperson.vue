<template>
    <div class="prdCard">
        <div class="prdCard-L">
            <div>
                <img src="https://j-image.missfresh.cn/img_20180517013835010.png" alt="">
            </div>
        </div>
        <div class="prdCard-R">
            <div class="prdCard-R-top">
                <img src="https://j-image.missfresh.cn/img_20180517014223439.png" alt="">
            </div>
            <ul class="prdCard-R-bot">
                <li><img src="https://j-image.missfresh.cn/img_20180517013627818.png" alt=""></li>
                <li><img src="https://j-image.missfresh.cn/img_20180518134408478.png" alt=""></li>	
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.prdCard {
  width: 92%;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 0  0.15rem 0;
  border-bottom: 1px solid #cccccc;
}

.prdCard .prdCard-L {
  flex: 6;
}
.prdCard .prdCard-L img {
  width: 1.58rem;
  height: 1.18rem;
  display: block;
}

.prdCard .prdCard-R {
  flex: 4;
  display: flex;
  height: 1.18rem;
  flex-direction: column;
}

.prdCard .prdCard-R .prdCard-R-top,
.prdCard .prdCard-R .prdCard-R-bot {
  flex: 1;
}

.prdCard .prdCard-R .prdCard-R-top img {
  width: 1.3rem;
  height: 0.6rem;
  display: block;
}

.prdCard .prdCard-R .prdCard-R-bot {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.prdCard .prdCard-R .prdCard-R-bot li img {
  width: 0.63rem;
  height: 0.53rem;
  display: block;
}
</style>
