<template>
  <div class="main">
    <Header />
    <div class="header-padding" />
    <nuxt />
    <!-- <footer class="footer"></footer> -->
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.header__title {
  border-bottom: 2px solid #ffcd28;
  margin: 0;
  width: 100%;
  text-align: center;
  line-height: 100px;
  color: #ffcd28;
  font-size: 40px;
  font-weight: bold;
}

.header-padding {
  padding-top: 100px;
}

.main {
  display: flex;
  flex-direction: column;
}
.header {
  z-index: 10; /* todo: 必要に応じて変更 */
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100px;
  background-color: #242424;
}

// .footer {
//   height: 50px;
//   background: red;
// }
</style>
