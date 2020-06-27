<template>
  <div class="entire">
    <sidebar />
    <tweet-screen class="tweet-screen"/>
  </div>
</template>

<script>
import Sidebar from "@/components/layout/Sidebar.vue";
import TweetScreen from "@/components/layout/TweetScreen.vue";

export default {
  components: {
    Sidebar,
    TweetScreen
  }
};
</script>

<style lang="scss" scoped>
.entire {
  display: flex;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: #242424;
}

.tweet-screen {
  flex: 1;
}
</style>
