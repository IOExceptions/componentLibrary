<template>
    <div class="reportFormDesigner">

        <el-container ref="container">
            <el-aside width="200px"  class="showBorder">
                <leftPlan></leftPlan>
            </el-aside>
            <el-container>
                <el-header  class="showBorder" style="height:40px">Header</el-header>
                <el-main  class="showBorder"  style="background-color: #fafafa;">
                    <formMain :templateJson.sync="templateJson">

                    </formMain>
                </el-main>
            </el-container>
            <el-aside width="300px"  class="showBorder">
                <rightPlan></rightPlan>
            </el-aside>
        </el-container>
<!--        templateJson：{{templateJson}}-->
<!--        <i class="iconfont">-->
<!--            &#xe601;-->
<!--        </i>-->
<!--        <i class="iconfont">-->
<!--            &#xe617;-->
<!--        </i>-->
    </div>
</template>

<script>
    import leftPlan from './leftPlan.vue'
    import rightPlan from './rightPlan.vue'
    import formMain from './formMain.vue'
    export default {
        name: 'reportFormDesigner',
        components:{
            leftPlan,
            rightPlan,
            formMain,
        },
        provide(){
          return {
              designer:this
          }
        },
        props: {

        },
        data:function(){
            return {
                templateJson:{
                    list:[

                    ],
                    config:{//配置

                    }
                }
            }
        },
        watch:{

        },
        mounted() {
            var height=document.documentElement.clientHeight;

            document.getElementsByClassName('el-container')[0].style.height=(height-30)+'px';
            // this.$refs.container.style.height = clientHeight+'px';
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    .reportFormDesigner{


        .showBorder{
            border:1px solid #e4e7ed;
        }
    }
</style>
