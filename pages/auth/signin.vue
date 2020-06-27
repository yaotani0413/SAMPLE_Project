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
  background-color: #242424;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.pass {
  height: 50px;
  width: 600px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 10px;
  font-size: 17px;
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
</style>
