<template>
  <div class="main">
    <tweet
      v-for="tweet in tweets"
      :key="tweet.id"
      :name="tweet.name"
      :text="tweet.text"
      :image-url="tweet.image_url"
    />
  </div>
</template>

<script>
import Tweet from "@/components/tweet/Tweet.vue";

export default {
  components: {
    Tweet
  },
  data() {
    return {
      tweets: [
        {
          id: 1,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        },
        {
          id: 2,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        },
        {
          id: 3,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        },
        {
          id: 4,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        },
        {
          id: 5,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        },
        {
          id: 6,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        },
        {
          id: 7,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        },
        {
          id: 7,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        },
        {
          id: 8,
          name: "たなか たろう",
          text: "晩御飯食べたい",
          image_url:
            require('@/assets/thumbnail.png')
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
