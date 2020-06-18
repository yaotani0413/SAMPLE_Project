<template>
  <div class="signup-box">
    <input type="text" class="name" placeholder="ニックネーム">
    <input type="email" class="mail" placeholder="メールアドレス">
    <input type="password" class="pass" placeholder="パスワード">
    <button type="button" class="signup">サインアップ</button>
  </div>
</template>

<style lang="scss" scoped>
.signup-box {
  height: 100vh;
  width: 100vw;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  height: 50px;
  width: 600px;
  text-align: center;
  margin-top: 250px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-size: 17px;
}

.mail {
  height: 50px;
  width: 600px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 10px;
  font-size: 17px;
}

.pass {
  height: 50px;
  width: 600px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 10px;
  font-size: 17px;
}

.signup {
  height: 50px;
  width: 600px;
  background-color: #FFCD28;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}
</style>