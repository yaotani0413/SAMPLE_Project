<template>
  <header class="header">
      <h1 class="header__title">SNS的なやつ(仮)</h1>
  </header>
</template>

<style lang="scss" scoped>
.header {
  z-index: 10; /* todo: 必要に応じて変更 */
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100px;
  background-color: #242424;
}

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
</style>