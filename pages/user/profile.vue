<template>
  <div class="profile">
    <div class="profile__thumbnail"><img src="@/assets/thumbnail.png" alt="サムネイル" class="image"/></div>
    <div class="user-name"></div>
    <div class="introduce"></div>
    <button class="profile_edit" @click="goprofileedit">編集</button>
  </div>
</template>

<script>
export default {
  methods: {
    goprofileedit() {
      this.$router.push('/user/profileedit')
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  align-items: center;
}

.profile__thumbnail {
  background-color: white;
  width: 350px;
  height: 350px;
  margin-bottom: 30px;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  border-radius: 50%;
  border: 2px solid red;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.user-name {
  background-color: white;
  height: 50px;
  width: 300px;
  border-radius: 10px;
  font-size: 17px;
  margin-bottom: 20px;
}

.introduce {
  background-color: white;
  height: 200px;
  width: 600px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.profile_edit {
  height: 45px;
  width: 150px;
  background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}

.profile_edit:focus {
  outline: none;
}
.profile_edit:hover {
  opacity: 0.7;
}


</style>