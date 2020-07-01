<template>
  <div class="profile-box">
      <p class="profile-edit">プロフィール編集</p>
    <input type="text" class="name" placeholder="ニックネーム">
    <input type="email" class="mail" placeholder="メールアドレス">
    <input type="password" class="pass" placeholder="パスワード">
    <button type="button" class="update" @click="goTimeline">更新</button>
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
.profile-box {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 102px;
}

.profile-edit {
  margin-top: 50px;
  margin-bottom: 50px;
  color: #FFCD28;
  font-weight: bold;
  font-size: 60px;
}

.name {
  height: 50px;
  width: 600px;
  text-align: center;
  margin-bottom: 30px;
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
  margin-bottom: 30px;
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
  margin-bottom: 30px;
  border-radius: 10px;
  font-size: 17px;
}

.pass:focus {
  outline: none;
}

.update {
  height: 45px;
  width: 150px;
  background-color: #FFCD28;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}

.update:focus {
  outline: none;
}

.update:hover {
  opacity: 0.7;
}
</style>