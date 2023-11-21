<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <compon-aside></compon-aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!-- <h1>main页面</h1> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import componAside from '@/components/componAside'
export default {
  data() {
    return {

    }
  },
  components:{
    componAside
  }
}
</script>

<style lang="scss"></style>