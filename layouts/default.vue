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

.header-padding {
  padding-top: 100px;
}

.main {
  display: flex;
  flex-direction: column;
}

// .footer {
//   height: 50px;
//   background: red;
// }
</style>
