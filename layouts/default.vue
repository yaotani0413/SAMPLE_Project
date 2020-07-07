<template>
  <div class="main">
    <the-header />
    <div class="header-padding" />
    <nuxt />
    <!-- <footer class="footer"></footer> -->
  </div>
</template>

<script>
import TheHeader from "@/components/layout/Header.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheHeader
  }
};
</script>

<style lang="scss" scoped>

.header-padding {
  padding-top: 100px;
}

.main {
  display: flex;
  flex-direction: column;
  font-family: fantasy;
  background-color: #242424;
  min-height: 100vh;
  background-image: url(~@/assets/background.jpeg);
}

// .footer {
//   height: 50px;
//   background: red;
// }
</style>
