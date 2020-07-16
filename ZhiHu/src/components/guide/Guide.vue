<template>
  <div class="guide">
    <div class="section">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link router-link-active="active" to="/guide/home" tag="dl">
        <dt>
          <i class="icon iconfont icon-shouye"></i>
        </dt>
        <dd>首页</dd>
      </router-link>
      <router-link router-link-active="active" to="/guide/idea" tag="dl">
        <dt>
          <i class="icon iconfont icon-dazhongdianping"></i>
        </dt>
        <dd>想法</dd>
      </router-link>
      <router-link router-link-active="active" to="/guide/college" tag="dl">
        <dt>
          <i class="icon iconfont icon-zixun"></i>
        </dt>
        <dd>大学</dd>
      </router-link>
      <router-link router-link-active="active" to="/guide/msg" tag="dl">
        <dt>
          <i class="icon iconfont icon-xiaoxi"></i>
        </dt>
        <dd>消息</dd>
      </router-link>
      <router-link router-link-active="active" to="/guide/mine" tag="dl">
        <dt>
          <i class="icon iconfont icon-wode"></i>
        </dt>
        <dd>我的</dd>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped lang="scss">
  .guide {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .footer {
      width: 100%;
      height: .5rem;
      background: #ffffff;
      display: flex;
      dl {
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: center;
          justify-content: center;
          &.router-link-active {
              dt {
                  .icon {
                      color: #0084FF;
                  }
              }
              dd {
                  color: #0084FF;
              }
          }
      }
    }
    .section {
      flex: 1;
      overflow-y: scroll;
    }
  }

</style>
