<template>
    <el-row>
        <!-- 左侧内容 -->
        <el-col :span="8">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/logo.png" alt="">
                    <div class="user-info">
                        <p class="name">admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login">
                    <p>上次登录时间:<span>2022-12-12</span></p>
                    <p>上次登录地点:<span>贵阳</span></p>
                </div>
            </el-card>
        </el-col>
        <!-- 右侧内容 -->
        <el-col :span="16">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="less">
.box-card {
    .user {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;

        img {
            width: 120px;
            height: 120px;
            margin-right: 40px;
        }

        .user-info {
            .name {
                font-size: 32px;
                margin-bottom: 10px;
            }

            .access {
                color: #999999;
            }
        }
    }

    .login {
        p {
            line-height: 28px;
            font-size: 14px;
            color: #999999;
            span{
                color: #666666;
                margin-left: 60px;
            }
        }
    }
}
</style>