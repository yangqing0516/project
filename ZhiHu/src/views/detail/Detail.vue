<template>
  <div class="detail">
    <div class="header">
      <span @click="goBack">
        <i class="icon iconfont icon-angle-left"></i>
      </span>
      <h2>{{lists.target.question.title}}</h2>
    </div>
    <div class="describe">
      <h4>
        {{lists.target.excerpt_new}}
      </h4>
    </div>
    <div class="footer">
      <i>{{lists.target.question.answer_count}}</i>
      <em @click="add">
        <i class="icon iconfont icon-dianzan"></i>
      </em>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        lists: '',
        ind: ''
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      add() {
        this.lists.target.question.answer_count++;
      }
    },
    mounted() {
      this.ind = this.$route.params.id;
      console.log(this.ind);
      this.lists = this.$route.params.data[this.ind];
      console.log(this.lists);
    },
    beforeUpdate() {
      this.$route.params.data.map(value => {
        let id = value.id.slice(0, 1);
        if (id === this.ind) {
          value.target.question.answer_count = this.lists.target.question.answer_count;
        }
        return value;
      });
      let storage = window.localStorage;
      storage.setItem('item', JSON.stringify(this.$route.params.data))
    }
  }

</script>

<style scoped lang="scss">
  .detail {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    .header {
      width: 100%;
      height: .5rem;
      display: flex;
      align-items: center;
      span {
        width: .5rem;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        .icon {
          font-size: .2rem;

        }
      }
      h2 {
        width: 3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .14rem;
      }
    }
    .describe {
      flex: 1;
    }
    .footer {
      width: 100%;
      height: .5rem;
      background: skyblue;
      display: flex;
      align-items: center;
      em {
        display: inline-block;
        width: .3rem;
        height: .3rem;
        padding: .05rem;
      }
    }
  }

</style>
