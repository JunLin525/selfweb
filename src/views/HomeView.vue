<template>
  <div class="home min-h-screen">
    <Header/>
      <div class="text-left p-4 m-4 ">
        我是Sh，一個新手全端工程師。主要使用python作為後端語言。
        前端使用Vue為主，略懂部分React。
        <br/>
        這是一個有關自己開發故事跟紀錄的部落格，偶爾會寫點自己在工作上或開發上的一些紀錄
        <br/>
        可能偶有錯誤都歡迎提出交流。
    </div>
  </div>
  <Footer/>
  
</template>

<script>
// @ is an alias to /src
import Header from '@/components/AppHeader.vue'
import Footer from '@/components/AppFooter.vue'
export default {
  name: 'HomeView',
  components: {
    Header,Footer
  }
}
</script>
