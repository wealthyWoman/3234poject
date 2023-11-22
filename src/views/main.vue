<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <compon-aside></compon-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <compon-header></compon-header>
                </el-header>
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
import componHeader from '@/components/componHeader.vue';
export default {
    data() {
        return { }
    },
    components: {
        componAside,
        componHeader
    }
}
</script>

<style lang="less">
.el-header{
    padding: 0;
    margin: 0;
}
</style>