<template>
    <nav class="sidebar">
      <button type="button" class="menu-button" @click="goProfile">プロフィール編集</button>
      <button type="button" class="menu-button" @click="goNewpost">新規投稿</button>
      <button type="button" class="menu-button" @click="returnTop">ログアウト</button>
    </nav>
</template>

<script>
export default {
  methods: {
    goProfile() {
      this.$router.push('/user/profile')
    },
    goNewpost() {
      this.$router.push('/tweets/new')
    },
    returnTop() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #ffcd28;
  position: fixed;
  min-height: 100vh;
  background-color: #242424;
}

.menu-button {
  background-color: #ffcd28;
  border-radius: 10px;
  height: 45px;
  width: 350px;
  font-size: 17px;
  margin-top: 25px;
  cursor: pointer;
}

.menu-button:focus {
  outline: none;
}

.menu-button:hover {
  opacity: 0.7;
}

</style>
