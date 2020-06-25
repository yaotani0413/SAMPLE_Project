<template>
  <div class="entire">
    <sidebar />
    <div class="main"></div>
  </div>
</template>

<script>
import Sidebar from "@/components/layout/Sidebar.vue";

export default {
  components: {
    Sidebar
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
</style>
