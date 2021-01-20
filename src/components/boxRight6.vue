<template>
    <div class="box-right6">
                <div class="rtop">
                    <div class="rtb">
                        <img src="../assets/img/NEW.png" alt="">
                        <div>办理平安银行信用卡</div>
                        <div>任务奖励<i>20</i>元</div>
                        <div>任务时间<i>1</i>天</div>
                        <button type="button">立即申请</button>
                    </div>
                     <div class="rtb">
                        <img src="../assets/img/NEW.png" alt="">
                        <div>办理平安银行信用卡</div>
                        <div>任务奖励<i>20</i>元</div>
                        <div>任务时间<i>1</i>天</div>
                        <button type="button">立即申请</button>
                    </div>
                     <div class="rtb">
                        <img src="../assets/img/NEW.png" alt="">
                        <div>办理平安银行信用卡</div>
                        <div>任务奖励<i>20</i>元</div>
                        <div>任务时间<i>1</i>天</div>
                        <button type="button">立即申请</button>
                    </div>
                </div>
                <div class="rbottom">
                    <ul v-for="item in infoList" :key="item">
                        <li v-for="name in item" :key="name">
                            {{name}}
                        </li>
                    </ul>
                    
                </div>
            </div>
</template>

<script>
import {infoList } from '../config/main-config'
export default {
    name: 'BoxRight6',
    data() {
        return {
          infoList
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes bgchange{
	from{background-size: 270px 340px;}
	to{background-size: 280px 350px;}
}
        .box-right6{
       width: 960px;
       height:100%;
       padding-top:22px;
       background: #e8e8e8;
       display: flex;
        flex-wrap: wrap;
        justify-content: center;
       .rtop{
           width:928px;
           height:340px;
           display: flex;
            justify-content: space-between;
            .rtb:hover{
                animation: bgchange .5s 1;
                animation-fill-mode: forwards;
            }
           .rtb{
                width:270px;
               height:340px;
               background: url(../assets/img/任务1.png) no-repeat;  
               color:#fff;
               font-size:16px;
               font-weight:bold;
               text-align: center;
               img{
                   transform: rotatey(180deg);
                   float:right;
               }
               i{
                   width:50px;
                   font-size:30px;
                   color:#ffa500;
                   display:inline-block;
                   text-align:center;
                   margin:0 5px;
               }
               :nth-child(2){
                   padding-top:75px;
                   font-size:18.5px;
               }
               :nth-child(3){
                    padding-top:40px;
                    font-size: 16px;
                    font-weight: 600;
               }
               :nth-child(4){
                   padding-top:15px;
               }
               button{
                   width:124px;
                   height:34px;
                   margin-top:35px;
                   background-color:#ffa500;
                   color:#fff;
                   border:none;
                   outline:none;
                   border-radius:5px;
                   line-height: 2;
                    margin-left: -5px;
               }
           }
       }
       .rbottom{
           width:928px;
           height:146px;
           background-color:#fff;
            display: flex;
            justify-content: space-between;
            margin-top:6px;
           ul{
               margin-top:13px;
               li{
                   margin:11.5px 15px;
               }
               li:hover{
                   color:#ffa500;
               }
           }
       }
      }
</style>