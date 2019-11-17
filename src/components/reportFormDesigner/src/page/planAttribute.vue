<template>
    <div class="planAttribute">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="行属性" name="1">
                <template v-if="JSON.stringify(actionObject)!='{}'">
                    <table class="myTable">
                        <tr>
                            <td>行高：</td>
                            <td>
                                <el-input placeholder="请输入内容" v-model="actionObject.row.height">
                                    <template slot="append">px</template>
                                </el-input>
                            </td>
                        </tr>
                    </table>
                </template>
            </el-collapse-item>
            <el-collapse-item title="列配置项" name="2">
                <template v-if="JSON.stringify(actionObject)!='{}'">
                    <table class="colPlanTab">
                        <tr v-for="(colItem,colIndex) in actionObject.row.cols" :key="colIndex">
                            <td style="width: 30px">
                                <i class="iconfont">
                                    &#xe630;
                                </i>
                            </td>
                            <td style="width: 100px">
                                <el-input-number size="small" v-model="colItem.span"></el-input-number>
                            </td>
                            <td style="width: 30px">
                                <i class="el-icon-delete"  @click="delCol(colItem,colIndex)"></i>
                            </td>
                            <td v-if="colIndex==actionObject.row.cols.length-1">
                                <i class="el-icon-plus" @click="addCol"></i>
                            </td>
                        </tr>
                    </table>
                </template>
            </el-collapse-item>
            actionObject:{{actionObject}}
        </el-collapse>
    </div>
</template>

<script>
    import Store from './store'
    export default {
        name: 'planAttribute',
        inject: {
            designer: {
                default: () => {
                    return null
                }
            }
        },
        props: {
            // actionObject:{
            //     type:Object,
            //     default:function(){
            //         // var obj={
            //         //     type:"row",//1.row:点击的行 2.col：点击的列
            //         //     row:{},//行对象
            //         //     rowIndex:{},//行对象下标
            //         //     col:{},//单元格对象
            //         //     colIndex:{},//单元格对象下标
            //         // }
            //         return {}
            //     }
            // }
        },
        data:function(){
            return {
                activeNames:"1",
                // var obj={
                //     type:"row",//1.row:点击的行 2.col：点击的列
                //     row:{},//行对象
                //     rowIndex:{},//行对象下标
                //     col:{},//单元格对象
                //     colIndex:{},//单元格对象下标
                // }
                actionObject:{}
            }
        },
        watch:{

        },
        mounted() {
            var _than=this;
            Store.$on('setRowAttr', (actionObject) => {
                console.log("=====接收到了====",actionObject);
                _than.upActionObject(actionObject);
            })
        },
        methods:{
            handleChange(val){
                console.log("=====接收到了====",val);
            },
            upActionObject(actionObject){
                this.actionObject=actionObject;
            },
            addCol(){
                this.actionObject.row.cols.push({
                    "span":12
                })
            },
            delCol(colItem,colIndex){
                this.actionObject.row.cols.splice(colIndex,1);
                if(this.actionObject.row.cols.length==0){
                    // this.actionObject.rowIndex //行对象下标
                    Store.$emit('delRow',this.actionObject.rowIndex);
                }
            }
        }
    }
</script>

<style  lang="scss">
    .planAttribute{
        height: 100%;

        .myTable{
            tr{
                td:first-child{
                    width: 50px;
                    text-align: right;
                }
            }
        }

        .colPlanTab{
            tr{
                td{
                    text-align: center;
                }
            }
        }
    }
</style>
