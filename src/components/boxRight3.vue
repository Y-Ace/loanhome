<template>
            <div class="box-right3">
                <div class="rtop" v-show="isShowOne">
                    <div class="rtb" v-for="(item, index) in guwenList" :key="index">
                        <div class="trb-title">
                            <h3>{{item.name}}</h3><span>/ 客户经理</span>
                        </div>
                        <div class="trb-text">
                            <div><img src="../assets/img/bg_01.png" alt=""> <span> {{item.textOne}} </span></div>
                            <div><img src="../assets/img/bg_02.png" alt=""> <span> {{item.textTwo}} </span></div>
                        </div>
                        <div class="trb-tp">
                           <img src="../assets/img/consultant-star.png" alt="">
                           <img src="../assets/img/consultant-star2.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="rtop1" v-show="isShowTwo">
                    <div class="rtb" v-for="(item, index) in guwenListOne" :key="index">
                        <div class="trb-title">
                            <h3>{{item.name}}</h3><span>/ 客户经理</span>
                        </div>
                        <div class="trb-text">
                            <div><img src="../assets/img/bg_01.png" alt=""> <span> {{item.textOne}} </span></div>
                            <div><img src="../assets/img/bg_02.png" alt=""> <span> {{item.textTwo}} </span></div>
                        </div>
                        <div class="trb-tp">
                           <img src="../assets/img/consultant-star.png" alt="">
                           <img src="../assets/img/consultant-star2.png" alt="">
                        </div>
                    </div>
                </div>
                <div v-show="isShowTwo" style="height:450px"></div>
                <div class="rbottom">
                   <div class="rbl">
                       <img src="../assets/img/矩形-46.png" alt="" @click="prve">
                       <img src="../assets/img/矩形-46_88.png" alt="" @click="next">
                    </div>
                    <div class="rbr">
                        <div>查看更多 </div>
                        <div>明星汇款服务顾问</div>
                    </div>
                </div>
            </div>
</template>
<script>
import {guwenList, guwenListOne } from '../config/main-config'
export default {
    name: 'BoxRight3',
    data() {
        return {
          guwenList,
          guwenListOne,
          isShowOne:true,
          isShowTwo:false

        }
    },
    methods: {
        prve(){
            if(!this.isShowOne) {
                this.isShowOne=true
            this.isShowTwo=false
            }
            
        },
        next(){
            if(!this.isShowTwo) {
            this.isShowTwo=true
            this.isShowOne=false
            }
        }
    },
}
</script>
<style lang="scss">
        .box-right3{
       width: 960px;
       height:100%;
       background: #e8e8e8;
       position: relative;
       .rtop1{
                @extend .rtop;
                position:absolute;
                top:0;
                left:0;

            }
        .rtop{
            margin-top:20px;
            display: flex;
            flex-wrap:wrap;
            .rtb:nth-child(1){
                background: url(../assets/img/zhangjie.png) no-repeat;
            }
            .rtb:nth-child(2){
                background: url(../assets/img/顾问2.png) no-repeat;
            }
            .rtb:nth-child(3){
                background: url(../assets/img/顾问3.png) no-repeat;
            }
            .rtb:nth-child(4){
                background: url(../assets/img/顾问4.png) no-repeat;
            }
            .rtb{
                width:460px;
                margin-left:15px;
                height:200px;
                // margin-top:12px;
                margin-bottom:15px;
                padding-left:42px;
                
                // background-size: 105% 100%;
                .trb-title{
                    margin-top:37px;
                    display:flex;
                    h3{
                        font-size:25px;
                    }
                        span{
                            padding-top: 9px;
                            padding-left: 9px;
                            color:#666;
                        }
                }
                .trb-text{
                    margin-top:22px;
                    width:210px;
                    display:flex;
                    flex-wrap:wrap;
                    color:#666;
                   
                    div{
                        margin-bottom:13px;
                         img{
                        width:13px;
                        height:15px;
                    }
                        span{
                            margin-top: -16px;
                            display: block;
                            margin-left: 24px;
                        }
                    }
                }
                .trb-tp{
                    margin-top:13px;
                    img{
                        margin-right:14px;
                        margin-left:-1px;
                    }
                }
            }
        }
        .rbottom{
            display: flex;
            justify-content: space-between;
            margin-left: 16px;
            margin-top:6px;
            .rbl{
                img{
                    margin-right:11px;
                }
            }
            .rbr{
                background-color:#ff8b10;
                width:225px;
                height:60px;
                border-radius:55px;
                text-align:center;
                margin-right:58px;
                div:first-child{
                    color:#fff;
                    font-size:15px;
                    font-weight:600;
                    margin-top:13px;
                }
                div:last-child{
                    color:rgba(255,255,255,0.5);
                    font-size:13px;
                    margin-top:7px;
                }
            }
        }
    }

</style>