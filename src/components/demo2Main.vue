<template>
    <div class="main">
        <div class="main-header">
            <div class="header-box">
                <div class="tp">
                    <img src="../assets/img/pg.png" alt="">
                </div>
                <div class="bp">
                    <el-form :inline="true" :model="ruleForm" ref="formRef" :rules="rules" class="demo-form-inline">
                        <el-form-item prop="user">
                            <el-input v-model="ruleForm.user" placeholder="您的姓氏" class="xs"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="先生"></el-radio>
                            <el-radio label="女士"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item prop="num">
                            <el-input v-model="ruleForm.num" placeholder="贷款金额（单位：万元）" class="je"></el-input>
                        </el-form-item>
                        <el-form-item prop="tel">
                            <el-input v-model="ruleForm.tel" placeholder="输入手机号" class="sj"></el-input>
                        </el-form-item>
                        <el-form-item prop="yzm">
                            <el-input v-model="ruleForm.yzm" placeholder="输入验证码" class="yzm"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <img src="../assets/img/验证码.png" alt="">
                        </el-form-item>
                            <input class="button" @click="submitForm()" type="button" value="申请贷款"></input>
                    </el-form>
                </div>
            </div>
        </div>
        <div class="main-box">
           <left-content @activeNum="indexNum" :box-config="boxOneConfig" class="leftContent1"></left-content>
           <box-right-1 :num="msg"></box-right-1>
        </div>

        <div class="main-box">
             <left-content :box-config="boxTwoConfig" class="leftContent2"></left-content>
             <box-right-2></box-right-2>
        </div>

        <div class="main-box">
            <left-content :box-config="boxThreeConfig" class="leftContent3"></left-content>
           <box-right-3></box-right-3>
        </div>

        <div class="main-box">
            <left-content :box-config="boxFourConfig" class="leftContent4"></left-content>
            <box-right-4></box-right-4>
        </div>

        <div class="main-box">
            <left-content :box-config="boxFiveConfig" class="leftContent5"></left-content>
             <box-right-5></box-right-5>
        </div>
        
         <div class="main-box">
            <left-content :box-config="boxSixConfig" class="leftContent6"></left-content>
             <box-right-6></box-right-6>
        </div>
        <div class="main-footer">
            <h3>合作伙伴</h3>
            <div class="hzimg">
             <vue-seamless-scroll :data="newsList" :class-option="optionLeft">
                 <img src="../assets/img/合作伙伴1.png" alt="">
                <img src="../assets/img/合作伙伴2.png" alt="">
                <img src="../assets/img/合作伙伴3.png" alt="">
                <img src="../assets/img/合作伙伴4.png" alt="">
                <img src="../assets/img/合作伙伴1.png" alt="">
                <img src="../assets/img/合作伙伴2.png" alt="">
                <img src="../assets/img/合作伙伴3.png" alt="">
                <img src="../assets/img/合作伙伴4.png" alt="">
            </vue-seamless-scroll>
                 
            </div>
        </div>
    </div>
</template>

<script>
import {infoList, rtb, rtbOne,guwenList,  ulList, boxOneConfig, boxTwoConfig, boxFiveConfig, boxFourConfig, boxThreeConfig, boxSixConfig  } from '../config/main-config'
import LeftContent from './leftContent.vue'
import BoxRight1 from './boxRight1.vue'
import BoxRight2 from './boxRight2.vue'
import BoxRight3 from './boxRight3.vue'
import BoxRight4 from './boxRight4.vue'
import BoxRight5 from './boxRight5.vue'
import BoxRight6 from './boxRight6.vue'
import vueSeamlessScroll  from 'vue-seamless-scroll'
export default {
    data() {
        return {
           ruleForm: {
              user: '',
                region: '',
                num: '',
                tel:'',
                yzm:''
            },
            rules: {
                user: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                num: [
                    { required: true, message: '请填写贷款金额', trigger: 'blur' }
                ],
                tel: [
                    { required: true, message: '请填写手机号码', trigger: 'blur' },
                    { min: 11, max: 11, message: '请输入真确的手机号码', trigger: 'blur' }
                ],
                yzm: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ]
                },
           infoList,
           rtb, 
           rtbOne,
           ulList,
           boxOneConfig,
           boxTwoConfig,
           boxThreeConfig,
           boxFourConfig,
           boxFiveConfig,
           boxSixConfig,
           guwenList,
            msg:'',
            newsList: [{
                      'title': 'A simple, seamless scrolling for Vue.js'
                    }]
        }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      indexNum(data){
          console.log(data)
            this.msg=data
      },
     submitForm() {
        this.$refs.formRef.validate((valid) => {
            console.log(valid);
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    components: {
        LeftContent,
        BoxRight1,
        BoxRight2,
        BoxRight3,
        BoxRight4,
        BoxRight5,
        BoxRight6,
        vueSeamlessScroll
    },
    computed: {
                optionLeft () {
                    return {
                            direction: 2,
                            limitMoveNum: 1
                        }
                }
             },
    // mounted(){
    //     //在mounted 声明周期中创建定时器
    //     const timer = setInterval(()=>{
    //         // 这里调用调用需要执行的方法，1为自定义的参数，由于特殊的需求它将用来区分，定时器调用和手工调用，然后执行不同的业务逻辑
    //         console.log(this.optionLeft.direction)
    //        if (this.direction.direction==2) {
    //            this.direction.direction==3
    //        }else if(this.direction.direction==3){
    //            this.direction.direction==2
    //        }
    //     }, 1000)
    // }
}
</script>
<style lang="scss">
@keyframes mymove
{
from {margin-top:0px;}
25% {margin-top:-10px;}
50%{margin-top:0px;}
75%{margin-top:-6px;}
to{margin-top:0px}
}
    .main{
        background-color:#f5f5f5;
        width: 100%;
        margin:0 auto;
        .main-header {
            .header-box {
             width: 100%;
             margin:0 auto;
             position: relative;
            .bp{
            width: 1200px;
            padding-left: 20px;
            background-color:#fff;
            height:106px;
            margin: 0px auto;
            box-shadow:1px 1px 5px rgba(0,0,0,0.3);
            position: relative;
            left: 10px;
            form{
                height: 106px;
                margin-left:5px;
                padding-top:37px;
                .el-form-item{
                    .el-form-item__content{
                        .xs{
                            width:182px;
                            input{
                                padding-left:20px;
                            }
                        }
                        .je{
                         width: 210px;
                         input{
                                padding-left:20px;
                            }
                        }
                        .sj{
                            margin-left: -4px;
                            width: 210px;
                            input{
                                padding-left:20px;
                            }
                        }
                        .yzm{
                            width: 105px;
                            margin-left: 17px;
                            input{
                                padding-left:20px;
                            }
                        }
                    }
                }
                img{
                    margin-left:6px;
                    margin-top:6px;
                }
                .button{
                    width:200px;
                    height:106px;
                    float: right;
                    margin-top: -37px;
                    background-color:#ffa500;
                    border:none;
                    color:#fff;
                    font-size:22px;
                    position: absolute;
                    right: 0;
                }
                .el-form-item{
                    .el-radio-group{
                        .el-radio{
                            margin:0 0 0 8px;
                            .el-radio__input{
                                margin-top: -4px;
                                .el-radio__inner{
                                    width:10px;
                                    height:10px;
                                    border: 1px solid #999;
                                    box-shadow: inset 0 0 5px 1px rgba(0,0,0,.24);
                                }
                            }
                            .el-radio__label{
                                padding-left: 3px;
                            }
                        }
                    }
                }
            }
         }
            .tp{
                float:left;
                padding-left:234px;
                margin-top:-2px;
                position: absolute;
                z-index:5;
            }
            .tp:hover{
                animation:mymove 1s 1;
            }
        }
        }
      .main-box{
        width: 1200px;
        margin: 0px auto;
        height:541px;
        margin-top:51px;
        border-top:1px solid #fbbe4c;
        margin-bottom: 59px;
        display:flex;
        position: relative;
        left: 10px;
        .box-left{
            width: 240px;
            height:100%;
             background: url(../assets/img/左侧选项卡1.png) no-repeat;
             background-size: 100% 100%;
             margin-left:-2px;
            // .left-connter{
            //     display: flex;
            //     // justify-content: space-around;
            //     flex-wrap:wrap;
            //     span{
            //         display: inline-block;
            //         width: 90px;
            //         height:25px;
            //         line-height:25px;
            //         text-align:center;
            //         // border: 1px solid #000;
            //         // margin-top: 10px;
            //     }
            // }
        }

        .leftContent1{
          background: url(../assets/img/左侧选项卡1.png) no-repeat;
           background-size: 100% 100%;
        }
        .leftContent2 {
            background: url(../assets/img/左侧选项卡2.png) no-repeat;
           background-size: 100% 100%;
        }
        .leftContent5{
            background: url(../assets/img/左侧选项卡5.png) no-repeat;
            background-size: 100% 100%;
       }
        .leftContent4{
            background: url(../assets/img/左侧选项卡4.png) no-repeat;
            background-size: 100% 100%;
        }
        .leftContent6{
            background: url(../assets/img/左侧选项卡6.png) no-repeat;
            background-size: 100% 100%;
        }
      }
       .main-footer{
        width: 1200px;
        margin: 0px auto;
        font-size:20px;
        padding-bottom:57px;
        h3{
            font-size:24px;
            font-weight:500;
        }
        .hzimg{
            display:flex;
            justify-content:space-between;
            margin-top:30px;
            margin-left:3px;
            overflow: hidden;
            height:55px;
            img{
                width:250px;
                margin-right:45px;
            }
        }
    }
    }

</style>