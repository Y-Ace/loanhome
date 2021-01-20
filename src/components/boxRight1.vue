<template>
    <div class="rbox" @click="cc">
        <div class="box-right1" v-show="num==0">
                <div class="rtop">
                    <div class="rtb" v-for="item in rtb" :key="item.title">
                        <img src="../assets/img/独家.png" alt="">
                        <h4>{{item.title}}</h4>
                        <h6>{{item.text}}</h6>
                        <span><a herf="javascript:;">查看详情</a> ></span>
                    </div>
                </div>
                <div class="rbottom">
                    <div class="rbl">
                        <ul>
                            <li v-for="item in ulList" :key="item"><a herf="javascript:;">{{item}}</a></li>
                        </ul>
                    </div>
                <div class="rbr">
                    <div>查看更多 </div>
                    <div>明星汇款独家攻略 </div>
                </div>
                </div>
            </div>
        <div class="grdk" v-show="num==1">
            个人贷款
        </div>
        <div class="grdk" v-show="num==2">
            企业贷款
        </div>
        <div class="grdk" v-show="num==3">
            信用贷款
        </div>
        <div class="grdk" v-show="num==4">
            抵押贷款
        </div>
        <div class="grdk" v-show="num==5">
            贷款工具
        </div>
        <div class="grdk" v-show="num==6">
            信息安全
        </div>
    </div>
</template>
<script>
import { rtb,  ulList } from '../config/main-config'
export default {
    name: 'BoxRight1',
    data() {
        return {
           rtb,
           ulList ,
            isShow:1
        }
    },
    props:['num'],
    computed: {
        shu(){
            if(this.num){
                this.isShow=this.num
            }
            return this.isShow
        }
    },
    methods: {
        cc(){
            console.log(this.num)
        }
    },
}
</script>
<style lang="scss">
@keyframes bgchange{
	from{background-size: 100% 100%;}
	to{background-size: 105% 105%;}
}
.rbox{
	position: relative;
    .grdk{
        width: 960px;
        height:100%;
       position: absolute;
       margin:0 auto;
       font-size:20px;
        transform: translate(50%,50%);
    }
}

        .box-right1{
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
                        background-size: 100% 100%;
                        color:#fff;
                        h4{
                            font-size:20px;
                            margin:-4px 0 14px 40px;
                        }
                        h6{
                            font-size:15px;
                            margin-left:40px;
                            font-weight:500;
                            margin-bottom:56px;
                        }
                        span{
                            margin-left:41px;
                            a{
                                color:#ccc;
                                font-size:13px;
                            }
                        }
                }
         }
         .rbottom {
           .rbl{
            width: 630px;
            padding-left:54px;
            padding-top:22px;
            ul{
                width: 630px;
                float:left;
                li{
                    list-style: disc;
                    width: 50%;
                    float:left;
                    text-decoration: underline;
                    margin-bottom:21px;
                    color:#ccc;
                    a{
                        font-size:14.4px;
                        color:#000;
                    }
                }
            }
           }
          .rbr{
                width: 224px;
                height:60px;
                background-color: #ff8b10;
                float:left;
                border-radius: 40px;
                text-align: center;
                margin-left:-7px;
                margin-top:10px;
                padding-top:11px;
                :first-child{
                    color:#fff;
                    font-weight:600;
                    font-size:15px;
                }
                :last-child{
                    color: wheat;
                    font-size: 13px;
                    margin-top: 8px;
                }
            }
          }
         }
</style>