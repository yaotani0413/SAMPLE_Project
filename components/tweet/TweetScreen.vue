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
          name: "ただ たけひろ",
          text: "晩御飯食べたい",
          image_url:
            "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png"
        },
        {
          id: 2,
          name: "やまだたろう",
          text: "晩御飯食べたい",
          image_url:
            "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png"
        },
        {
          id: 3,
          name: "じょぶ",
          text: "晩御飯食べたい",
          image_url:
            "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png"
        },
        {
          id: 4,
          name: "ただ たけひろ",
          text: "晩御飯食べたい",
          image_url:
            "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png"
        },
        {
          id: 5,
          name: "ただ たけひろ",
          text: "晩御飯食べたい",
          image_url:
            "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png"
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
  justify-content: center;
  align-items: center;
}
</style>
