<template>
  <div class="flex justify-end pt-4 space-x-2 p-12 bg-gray-400 h-2">
    <router-link to="/" class="p-2">首頁</router-link>
    <router-link to="/about" class="p-2">關於我</router-link>
    <router-link to="/ArticleList" class="p-2">文章列表</router-link>
    <div class="p-2">
      <a href="mailto:junlin5525@gmail.com" class="text-blue-500 hover:text-blue-700">聯繫我</a>
    </div>   
  </div>
</template>

<script>
export default {
    setup(){

    }
}
</script>

<style>

</style>