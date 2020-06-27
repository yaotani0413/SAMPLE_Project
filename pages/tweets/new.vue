<template>
  <div class="newpost">
    <p class="newpost-title">新規投稿</p>
    <textarea class="newpost-message" placeholder="メッセージを入力" cols="10" rows="5"></textarea>
    <button type="button" class="btn" @click="goTimeline">投稿</button>
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
.newpost {
  height: 100vh;
  width: 100vw;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.newpost-title {
  margin-bottom: 50px;
  color: #ffcd28;
  font-weight: bold;
  font-size: 60px;
}

.newpost-message {
  height: 300px;
  width: 600px;
  padding: 24px;
  border-radius: 50px;
  margin-bottom: 50px;
  font-size: 17px;
}

.btn {
  background-color: #ffcd28;
  height: 45px;
  width: 150px;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}
</style>
