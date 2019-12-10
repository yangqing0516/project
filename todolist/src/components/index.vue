<template>
    <div class="index">
        <header-input/>
        <List/>
    </div>
</template>

<script>
import HeaderInput from "./HeaderInput.vue";
import List from "./List.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {
    HeaderInput,
    List
  }
};
</script>

<style lang="scss">
.index {
  width: 100%;
  height: 100%;
  background: rgb(221, 212, 212);
}
</style>
