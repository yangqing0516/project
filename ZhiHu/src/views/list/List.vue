<template>
  <div class="page_list">
    <router-link tag="div" :to="{name: 'Detail', params:{data:data,id: index}}" class="list" v-for="(item,index) in data" :key="index">
      <p>{{item.target.question.author.headline}}</p>
      <h2>{{item.target.question.title}}</h2>
      <div class="describe">
        <h4>
          {{item.target.excerpt_new}}
        </h4>
      </div>
      <h3>
        <span>
          <i>{{item.target.question.answer_count}}</i>
          <em>赞同</em>
        </span>
        <span>
          <i>{{item.target.question.follower_count}}</i>
          <em>评论</em>
        </span>
      </h3>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: ''
      }
    },
    mounted() {
      let storage = window.localStorage;
      if (storage.item) {
        this.data = JSON.parse(storage.getItem('item'));
      } else {
        axios.get('/list').then((result) => {
          this.data = result.data.data;
          console.log(this.data);
        }).catch((err) => {
          console.log('err')
        });
      }
    }
  }

</script>

<style scoped lang="scss">
  .page_list {
    width: 100%;
  }

  .list {
    width: 100%;
    height: auto;
    padding: .05rem;
    margin-top: .05rem;
    background: #ffffff;
    p {
      color: #999999;
      padding: .05rem 0;
    }
    h2 {
      font-weight: 800;
      font-size: .14rem;
    }
    .describe {
      width: 100%;
      display: flex;
      h4 {
        flex: 1;
      }
      span {
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

</style>
