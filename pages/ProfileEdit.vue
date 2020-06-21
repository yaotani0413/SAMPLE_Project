<template>
  <div class="profile-box">
      <p class="profile-edit">プロフィール編集</p>
    <input type="text" class="name" placeholder="ニックネーム">
    <input type="email" class="mail" placeholder="メールアドレス">
    <input type="password" class="pass" placeholder="パスワード">
    <button type="button" class="update">更新</button>
  </div>
</template>

<style lang="scss" scoped>
.profile-box {
  height: 100vh;
  width: 100vw;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-edit {
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

.update {
  height: 45px;
  width: 150px;
  background-color: #FFCD28;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}
</style>