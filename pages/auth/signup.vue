<template>
  <div class="signup-box">
    <input type="text" class="name" placeholder="ニックネーム">
    <input type="email" class="mail" placeholder="メールアドレス">
    <input type="password" class="pass" placeholder="パスワード">
    <button type="button" class="signup" @click="goTimeline">サインアップ</button>
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
.signup-box {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 102px;
}

.name {
  height: 50px;
  width: 600px;
  text-align: center;
  margin-top: 250px;
  margin-bottom: 50px;
  border-radius: 10px;
  font-size: 17px;
}

.name:focus {
  outline: none;
}

.mail {
  height: 50px;
  width: 600px;
  text-align: center;
  margin-bottom: 50px;
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
  margin-bottom: 50px;
  border-radius: 10px;
  font-size: 17px;
}

.pass:focus {
  outline: none;
}

.signup {
  height: 50px;
  width: 600px;
  background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}

.siguup:focus {
  outline: none;
}

.signup:hover {
  opacity: 0.7;
}

input:focus::placeholder {
  color: transparent;
}
</style>