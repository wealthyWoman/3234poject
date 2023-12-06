<template>
    <el-row>
        <!-- 左侧内容 -->
        <el-col :span="8" style="padding-right: 10px;">
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
            <el-card style="margin-top: 20px;height: 460px;">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column v-for="(val, key) in tabLabel" :key="key" :prop="key" :label="val" />
                </el-table>
            </el-card>
        </el-col>
        <!-- 右侧内容 -->
        <el-col :span="16" style="padding-left: 10px;">
            <div class="num">
                <el-card v-for="item in  contData " :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detial">
                        <p class="pp1">￥{{ item.value }}</p>
                        <p class="pp2">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px;">
                <!-- 折线图 -->
                <div ref="echars1" style="height: 280px;"></div>
            </el-card>
            <div class="graph">
                <el-card style="height: 260px;"></el-card>
                <el-card style="height: 260px;"></el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { getData } from '../api/index'
import * as echars from 'echarts'

export default {
    data() {
        return {
            tableData: [
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 200,
                    totaBuy: 300,
                },
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 200,
                    totaBuy: 300,
                },
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 200,
                    totaBuy: 300,
                },
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 200,
                    totaBuy: 300,
                },
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 200,
                    totaBuy: 300,
                },
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 200,
                    totaBuy: 300,
                }
            ],
            tabLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totaBuy: '总购买'

            },
            contData: [
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                }

            ]

        }
    },
    mounted() {
        getData().then((data) => {
            const { tableData } = data.data
            console.log(data);
            this.tabLabel = tableData


            // //基于准备好的dom，初始化echart实例
            // echars.init(this.$refs.echars1)
            // //指定图表的配置项和数据
            // var echarsOption = {}
            // //处理xAxis数据
            // const { orderData } = data.data
            // const xAxis = Object.keys(orderData.data[0])
            // const xAxisData = {
            //     data: xAxis
            // }
            // echarsOption.xAxis = xAxisData
            // echarsOption.yAxis = {}
            // echarsOption.legend = xAxisData
            // echarsOption.series = []
            // xAxis.forEach(key => {  //遍历拿到数组中的每一项
            //     echarsOption.series.push({
            //         name: key,
            //         data: orderData.data.map(item => item[key]),
            //         type: 'line'
            //     })
            // })
            // console.log(echarsOption);
            // //使用刚指定的配置和数据显示图标
            // echars1.setOption(echarsOption)

        })
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

            span {
                color: #666666;
                margin-left: 60px;
            }
        }
    }
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .icon {
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }

    .detial {
        display: flex;
        flex-direction: column; //改变主轴为上下方向
        justify-content: center;
        margin-left: 15px;

        .pp1 {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
        }

        .pp2 {
            color: #999999;
            font-size: 14px;
            text-align: center;
        }
    }

    .el-card {
        width: 30%;
        margin-bottom: 20px;
    }
}

.graph {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .el-card {
        width: 48%;
    }
}
</style>