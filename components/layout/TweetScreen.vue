<template>
  <div class="main">
    <div class="tweet-container">
      <div class="thumbnail">写真</div>
      <div class="other">
        <div class="user-name">やおたに</div>
        <div class="tweet">テスト投稿いたしました。</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.tweet-container {
  background-color: rgba(255,255,255,0.5);
  height: 100px;
  width: 700px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
}

.thumbnail {
  height: 100%;
  width: 15%;
  background-color: white;
  border-radius: 50%;
  text-align: center;
}

.other {
  width: 90%;
  display: flex;
  flex-direction: column;
}

.user-name {
  height: 25%;
  width: 25%;
  background-color: white;
  margin: 5px 0 0 5px;
  border-radius: 15px;
  text-align: center;
}

.tweet {
  height: 70%;
  background-color: white;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
}
</style>