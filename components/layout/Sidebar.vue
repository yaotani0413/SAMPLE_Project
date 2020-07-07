<template>
    <nav class="sidebar">
      <button type="button" class="menu-button" @click="goProfile">プロフィール</button>
      <button type="button" class="menu-button" @click="goNewpost">新規投稿</button>
      <button type="button" class="menu-button logout" @click="returnTop">ログアウト</button>
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
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #ffcd28;
  position: fixed;
  min-height: 100vh;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
}

.menu-button {
  background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
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

.logout {
  margin-top: 680px;
}

</style>
