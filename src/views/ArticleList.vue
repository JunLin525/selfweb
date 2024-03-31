<template>
  <div>
    <Header/>
  </div>
  <div class="text-left p-8 text-4xl">
    文章列表
  </div>
  <div class="text-left px-8 text-xl">
    <router-link to="/ArticleListOne" >寫在2024第一季</router-link>
    <div class="text-sm py-1">作為第一篇初始文章，總想寫點什麼</div>
  </div>
</template>

<script>
import Header from '@/components/AppHeader.vue'
export default {
name: 'ArticleList',
components: {
    Header
}
}
</script>

<style>

</style>