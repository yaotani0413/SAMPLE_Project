<template>
  <header class="header">
      <h1 class="header__title" @click="goTimeline">Let's mutter.</h1>
  </header>
</template>

<script>
export default {
  methods: {
    goTimeline() {
      this.$router.push('/tweets')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 10; /* todo: 必要に応じて変更 */
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  border-bottom: 2px solid #ffcd28;
}

.header__title {
  margin: 0;
  text-align: center;
  line-height: 100px;
  font-size: 70px;
  font-weight: bold;
  color: #FF7C00;
  background: -webkit-linear-gradient(top, #FFB76B 0%, #FFA73D 50%, #FF7C00 51%, #FF7F04 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>