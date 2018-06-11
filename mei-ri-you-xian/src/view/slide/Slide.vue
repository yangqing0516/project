<template>
	<div class="swiper-box" ref="swiperBox">
		<swiper class="box-container" :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="items in banner" :key="items.id">
				<img :src="items.path" alt="" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      swiperOption: {
        notNextTick: true, // 可以再第一时间获取到swiper对象
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2000
        }
      }
    };
  },
  props: {
    banner: {
      type: Array,
      require: true
    }
  },
  mounted() {
  
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>