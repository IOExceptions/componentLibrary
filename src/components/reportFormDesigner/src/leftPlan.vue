<template>
    <div class="leftPlan">
        <el-row>
            <el-col :span="24">
                <p>基础字段</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div @click="addInput" class="componentDiv">
                    <i class="iconfont">
                        &#xe601;
                    </i>
                    单行文本
                </div>
            </el-col>
            <el-col :span="12">
                <div class="componentDiv">
                    <i class="iconfont">
                        &#xe601;
                    </i>
                    多行文本
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="componentDiv">
                    <i class="iconfont">
                        &#xe652;
                    </i>
                    计数器
                </div>
            </el-col>
            <el-col :span="12">
                <div class="componentDiv">
                    <i class="iconfont">
                        &#xe600;
                    </i>
                    单选框
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="componentDiv">
                    <i class="iconfont">
                        &#xe645;
                    </i>
                    多选框
                </div>
            </el-col>
            <el-col :span="12">
                <div class="componentDiv">
                    <i class="iconfont">
                        &#xe624;
                    </i>
                    时间选择器
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="componentDiv">
                    <i class="iconfont">
                        &#xe7d4;
                    </i>
                    日期选择器
                </div>
            </el-col>
            <el-col :span="12">
                <div class="componentDiv">
                    <i class="iconfont">
                        &#xe634;
                    </i>
                    评分
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="componentDiv">
                    <i class="iconfont">
                        &#xe617;
                    </i>
                    下拉选择框
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <p>高级字段</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <p>布局字段</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="componentDiv" @click="addGrid">
                    <i class="iconfont">
                        &#xe640;
                    </i>
                    栅格布局
                </div>
            </el-col>
<!--            <el-col :span="12">-->
<!--                <div class="componentDiv">-->
<!--                    <i class="iconfont">-->
<!--                        &#xe634;-->
<!--                    </i>-->
<!--                    评分-->
<!--                </div>-->
<!--            </el-col>-->
        </el-row>
    </div>
</template>

<script>
    import Store from './page/store'
    export default {
        name: 'leftPlan',
        props: {

        },
        inject: {
            designer: {
                default: () => {
                    return null
                }
            }
        },
        data:function(){
            return {

            }
        },
        watch:{

        },
        mounted() {
            console.log(document.body);
        },
        methods:{
            init(){

            },
            //添加栅格布局
            addGrid(){
                var newGridObj={
                    height:30,//行高
                    cols:[{//列对象
                        span:12,
                    },{
                        span:12,
                    }]
                }
                this.designer.templateJson.list.push(newGridObj);
            },
            //添加单行文本框
            addInput(){
                Store.$emit('addComponent','input');
            }
        }
    }
</script>

<style  lang="scss">
    .leftPlan{
        height: 100%;
        .el-col{
            font-size: 16px;
        }
        .componentDiv{
            font-size: 12px;
            background-color:  #f4f6fc;
            margin: 2px;
            padding: 2px;
            line-height: 26px;

            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
        }
        .componentDiv:hover{
            cursor:move;
        }

    }
</style>
