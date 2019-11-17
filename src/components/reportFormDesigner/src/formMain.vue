<template>
    <div class="formMain">
        <div class="form_des">
            <el-row v-for="(rowItem,rowIndex) in templateJson.list" :key="'row_'+rowIndex" >
                <el-col :span="colItem.span" v-for="(colItem,colIndex) in rowItem.cols" :id="'row_'+rowIndex+'_col_'+colIndex" :key="'row_'+rowIndex+'_col_'+colIndex"   :style="{'height':(rowItem.height+6)+'px'}">
                    <div @click.stop="setRowAttr(rowItem,rowIndex,colItem,colIndex)" style="display: inline-block" class="content" :style="{'height':(rowItem.height)+'px'}">

                    </div>
                </el-col>
            </el-row>
        </div>
        templateJson:{{templateJson}}
    </div>
</template>

<script>
    import Store from './page/store'
    import $ from 'jquery';
    export default {
        name: 'formMain',
        props: {
            templateJson:{
                type:Object
            }
        },
        data:function(){
            return {
                //当前选中单元格信息
                actionObject:{},
            }
        },
        watch:{

        },
        mounted() {
            console.log(document.body);
            var _than=this;
            Store.$on('addComponent', (type) => {
                console.log("=====接收到了addComponent====",type);
                _than.createComponent(type);
            })
            Store.$on('delRow', (rowIndex) => {
                _than.templateJson.list.splice(rowIndex,1);
            })
        },
        methods:{
            //添加组件
            createComponent(type){
                if(this.type=='input'){
                    console.log("=====添加输入框====",type);

                }
            },
            //设置行属性
            setRowAttr(rowItem,rowIndex,colItem,colIndex){
                console.log("=====点击了====",rowItem);
                var activ=$('.activ');
                for(var key=0;key<activ.length;key++){
                    $(activ[key]).removeClass('activ');
                }
                $('#row_'+rowIndex+'_col_'+colIndex).addClass('activ');

                this.$set(this.actionObject,'type','col');
                this.$set(this.actionObject,'row',rowItem);
                this.$set(this.actionObject,'rowIndex',rowIndex);
                this.$set(this.actionObject,'col',colItem);
                this.$set(this.actionObject,'colIndex',colIndex);
                Store.$emit('setRowAttr',this.actionObject);
            }
        }
    }
</script>

<style  lang="scss">
    .formMain{
        height: 100%;
        .form_des{
            height: 100%;
            background: #fff;
            border: 1px dashed #999;
            min-height: 100%;
            margin: 10px;
            .el-row{
                .el-col{
                    .content{
                        width:100%;
                        background-color: #ffffff;
                        border:1px dashed hsla(0,0%,66.7%,.5);
                    }
                    padding: 2px 0px 2px 2px;
                }
                .el-col:last-child{
                    .content{
                        width: calc(100% - 6px);
                    }

                }
                .el-col:hover{
                    background-color: orange;
                }
                .activ{
                    background-color: orange;
                }
            }
            /*.el-row:hover{*/
            /*    background-color: orange;*/
            /*}*/


        }
    }
</style>
