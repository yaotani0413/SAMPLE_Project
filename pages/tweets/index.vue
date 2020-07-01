<template>
  <div class="entire">
    <sidebar />
    <div class="sidebar-width" />
    <tweet-screen class="tweet-screen"/>
  </div>
</template>

<script>
import Sidebar from "@/components/layout/Sidebar.vue";
import TweetScreen from "@/components/tweet/TweetScreen.vue";

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
  min-width: 100vw;
  min-height: 100vh;
}

.sidebar-width {
  padding: 225px;
}

.tweet-screen {
  flex: 1;
}
</style>
