<template>
  <div class="home">
    <div class="header">
      <form action="">
        <i class="icon iconfont icon-fangdajing"></i>
        <input type="text" placeholder="高考志愿填报">
      </form>
      <p>
        <span>
          <i class="icon iconfont icon-gongzuojilu"></i>
        </span>
        <span>提问</span>
      </p>
    </div>
    <div class="nav">
      <router-link router-link-active="active" tag="span" to="/guide/home/follow">关注</router-link>
      <router-link router-link-active="active" tag="span" to="/guide/home/recommend">推荐</router-link>
      <router-link router-link-active="active" tag="span" to="/guide/home/hotList">热榜</router-link>
    </div>
    <div class="section">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped lang="scss">
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      width: 100%;
      height: .5rem;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        flex-basis: .7rem;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        span {
          color: #0084FF;
          .icon {
            color: #0084FF;
            vertical-align: middle;
          }
        }

      }
      form {
        position: relative;
        flex: 1;
        height: .5rem;
        line-height: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 90%;
          border: 0;
          height: .25rem;
          background: #EBEBEB;
          color: #999999;
          border-radius: .04rem;
          padding-left: .35rem;
        }
        .icon {
          position: absolute;
          left: .25rem;
          top: .0125rem;
          color: #999;
        }

      }
    }
    .nav {
      width: 100%;
      height: .5rem;
      display: flex;
      span {
        flex: 1;
        text-align: center;
        line-height: .5rem;
        background: #ffffff;
        color: #999999;
        font-size: .14rem;
        font-weight: 800;
        &.router-link-active {
          color: #1A1A1A;
          border-bottom: 2px solid #1A1A1A;
        }
      }
    }
    .section{
        flex: 1;
        overflow-y: scroll;
    }
  }

</style>
