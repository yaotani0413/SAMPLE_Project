<template>
  <div class="signin-box">
    <input type="email" class="mail" placeholder="メールアドレス">
    <input type="password" class="pass" placeholder="パスワード">
    <button type="button" class="signin">サインイン</button>
  </div>
</template>

<style lang="scss" scoped>
.signin-box {
  height: 100vh;
  width: 100vw;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mail {
  height: 50px;
  width: 600px;
  text-align: center;
  margin-top: 250px;
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

.signin {
  height: 50px;
  width: 600px;
  background-color: #FFCD28;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}

</style>