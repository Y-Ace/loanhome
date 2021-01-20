<template>
 <div class="box-right2">
                <div class="rtop">
                    <div class="rtb" v-for="(item, i) in rtbOne" :key="i">
                        <img v-if="i===0|i===3" src="../assets/img/NEW.png" alt="">
                        <img v-if="i===1|i===4" src="../assets/img/hot.png" alt="">
                        <div v-if="i===2|i===5" style="height:50px"></div>
                        <h4>{{item.title}}</h4>
                        <h6>{{item.text}}<span>{{item.shu}}</span></h6>
                        <span><a herf="javascript:;">查看详情</a> ></span>
                    </div>
                </div>
                <div class="rbottom">
                   <div class="yh1">
                       <h4>平安银行车抵贷</h4>
                       <h6>放贷快 额度高 月薪底</h6>
                       <img src="../assets/img/形状-26.png" alt="">
                   </div>
                   <div class="yh2">
                       <h4>平安银行车抵贷</h4>
                       <h6>放贷快 额度高 月薪底</h6>
                       <img src="../assets/img/形状-26.png" alt="">
                   </div>
                </div>
            </div>
</template>
<script>
import {rtbOne } from '../config/main-config'
export default {
    name: 'BoxRight2',
    data() {
        return {
          rtbOne
        }
    }
}
</script>
<style lang="scss">
@keyframes bgchange{
	from{background-size: 300px 200px;}
	to{background-size: 320px 210px;}
}
  .box-right2{
       width: 960px;
       height:100%;
       background: #e8e8e8;
       .rtop{
            margin-top:10px;
            display: flex;
            flex-wrap:wrap;
             .rtb:hover{
                    h4{
                        color:#cc7f11;
                    }
                    animation: bgchange .5s 1;
                    animation-fill-mode: forwards;
                }
            .rtb{
                margin-top: 10px;
                margin-left:15px;
                width: 300px;
                height:190px;
                background: url(../assets/img/攻略2.png) no-repeat;
                background-size: 300px 200px;
                h4{
                    font-size: 20px;
                    margin: -4px 0 14px 40px;
                }
                 h6{
                        font-size:13px;
                        color:#ff9728;
                        margin-left:41px;
                        font-weight:500;
                        margin-bottom:43px;
                        span{
                            font-size:25px;
                            margin-left:10px;
                        }
                    }
                    span{
                        margin-left:41px;
                        a{
                            font-size:13px;
                        }
                    }
            }
            .rtb:nth-child(1),.rtb:nth-child(4){
                background: url(../assets/img/f1.png) no-repeat;
                background-size: 105% 207px;
                background-position-x: -5px;
                background-position-y: -8px;


            }
            .rtb:nth-child(2),.rtb:nth-child(5){
                background: url(../assets/img/f2.png) no-repeat;
                background-size: 105% 207px;
                background-position-x: -5px;
                background-position-y: -8px;
            }
            .rtb:nth-child(3),.rtb:nth-child(6){
                background: url(../assets/img/f3.png) no-repeat;
                 background-size: 105% 207px;
                background-position-x: -5px;
                background-position-y: -8px;
            }
        }
        .rbottom{
            display: flex;
            margin-top:15px;
            .yh1{
                width:460px;
                margin-left:15px;
                height:100px;
                background: url(../assets/img/银行1.png) no-repeat;
                background-size: 100% 100%;
                h4{
                    margin-top:30px;
                    margin-left:201px;
                    font-size:20px;
                }
                h6{
                    margin-top:17px;
                    margin-left:201px;
                    font-size:13px;
                    color:#ffa500;
                    font-weight:500;
                }
                img{
                    float: right;
                    margin-right: 32px;
                    margin-top: -25px;
                }
            }
            .yh2{
                width:460px;
                margin-left:12px;
                height:100px;
                background: url(../assets/img/银行2.png) no-repeat;
                background-size: 100% 100%;
                 h4{
                    margin-top:30px;
                    margin-left:201px;
                    font-size:20px;
                }
                h6{
                    margin-top:17px;
                    margin-left:201px;
                    font-size:13px;
                    color:#ffa500;
                    font-weight:500;
                }
                img{
                    float: right;
                    margin-right: 32px;
                    margin-top: -25px;
                }
            }
        }
        }
</style>