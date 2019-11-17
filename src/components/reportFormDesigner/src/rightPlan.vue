<template>
    <div class="rightPlan">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="属性" name="first">
                <planAttribute></planAttribute>
            </el-tab-pane>
            <el-tab-pane label="表单属性" name="second">表单属性</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import planAttribute from './page/planAttribute'
    export default {
        name: 'rightPlan',
        components:{
            planAttribute,
        },
        props: {

        },
        data:function(){
            return {
                activeName:"first",
            }
        },
        watch:{

        },
        mounted() {

        },
        methods:{
            handleClick(){

            }
        }
    }
</script>

<style  lang="scss">
    .rightPlan{
        height: 100%;

        .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2), .el-tabs--bottom .el-tabs__item.is-top:nth-child(2), .el-tabs--top .el-tabs__item.is-bottom:nth-child(2), .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
            padding-left: 20px;
        }

        .el-tabs__header {
            padding: 0;
            position: relative;
            margin: 0 0 0px;
        }

        .el-collapse-item__header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 36px;
            background-color: #FFF;
            color: #303133;
            cursor: pointer;
            border-bottom: 1px solid #EBEEF5;
            font-size: 13px;
            font-weight: 500;
            -webkit-transition: border-bottom-color .3s;
            transition: border-bottom-color .3s;
            outline: 0;
            padding-left: 10px;
        }
    }
</style>
