<template>
  <div class="signin-box">
    <input type="email" class="mail" placeholder="メールアドレス" />
    <input type="password" class="pass" placeholder="パスワード" />
    <button type="button" class="signin" @click="goTimeline">サインイン</button>
  </div>
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
.signin-box {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 102px;
}

.mail {
  height: 50px;
  width: 600px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 10px;
  font-size: 17px;
}

.mail:focus {
  outline: none;
}

.pass {
  height: 50px;
  width: 600px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 10px;
  font-size: 17px;
}

.pass:focus {
  outline: none;
}

.signin {
  height: 50px;
  width: 600px;
  margin: 0 auto;
  background-color: #ffcd28;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}

.signin:focus {
  outline: none;
}

.signin:hover {
  opacity: 0.8;
}

</style>
