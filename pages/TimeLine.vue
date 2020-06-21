<template>
  <div class="entire">
    <div class="head">
      <p>SNS的なやつ(仮)</p>
    </div>
    <div class="timeline">
      <div class="main">
      </div>
      <div class="sidebar">
        <div class="sidemenu">
          <button type="button" class="editprofile">プロフィール編集</button>
          <button type="button" class="newpost">新規投稿</button>
          <button type="button" class="logout">ログアウト</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entire {
  height: 100vh;
  width: 100vw;
}

.head p {
  border-bottom: 2px solid #FFCD28;
  margin: 0;
  height: 100px;
  width: 100%;
  text-align: center;
  line-height: 100px;
  color: #FFCD28;
  background-color: #242424;
  font-size: 40px;
  font-weight: bold;
  position: fixed;
}

.timeline {
  background-color: #242424;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.main {
  height: 100%;
  width: 100%;
  flex: 1;
}

.sidebar {
  height: 100%;
  width: 450px;
  border-right: 2px solid #FFCD28;
  position: relative;
  top: 102px;
}

.sidemenu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.editprofile {
  background-color: #FFCD28;
  border-radius: 10px;
  height: 45px;
  width: 350px;
  font-size: 17px;
  margin-top: 25px;
  cursor: pointer;
}

.newpost {
  background-color: #FFCD28;
  border-radius: 10px;
  height: 45px;
  width: 350px;
  font-size: 17px;
  margin-top: 25px;
  cursor: pointer;
}

.logout {
  background-color: #FFCD28;
  border-radius: 10px;
  font-size: 17px;
  height: 40px;
  width: 150px;
  margin-top: 680px;
  cursor: pointer;
}
</style>