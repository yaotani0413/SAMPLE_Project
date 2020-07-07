<template>
  <div class="newpost">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 102px;
}

.newpost-title {
  margin-top: 50px;
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
  margin-top: 200px;
}

.newpost-message:focus {
  outline: none;
}

.btn {
  background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
  height: 45px;
  width: 150px;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  opacity: 0.7;
}

.newpost-message::placeholder {
  text-align: center;
  line-height: 250px;
}

.newpost-message:focus::placeholder {
  color: transparent;
}
</style>
