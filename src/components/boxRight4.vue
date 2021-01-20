<template>
     <div class="box-right4">
                <div class="rleft">
                    <div class="rltitle">
                        <h2>平安银行车抵贷</h2>
                        <span>适用范围 ：名下有车</span>
                        <span>最高可贷</span>
                        <div class="money">
                            100万
                        </div>
                    </div>
                    <div class="rlconnter">
                        <div class="name">
                            姓名 <span> __________________</span>
                        </div>
                        <div class="tel">
                            电话 <span> __________________</span>
                        </div>
                        <div class="sq">
                            立即申请
                        </div>
                    </div>
                    <div  class="rlfoot">
                        <div class="ftext">
                            安全高效，最快1填放款
                            以为50万+用户提供服务
                        </div>
                    </div>
                </div>
                <div class="rright">
                    <ul>
                        <li>
                            <h3>平安银行新一贷</h3><span>月息</span><i class="bfb"> 0.4%</i><span>最高额度</span><i>50万</i><span>到账时间</span><i>10分钟</i> <img src="../assets/img/right4.png" alt="">
                        </li>
                        <li>
                            <h3>平安银行新一贷</h3><span>月息</span><i class="bfb"> 0.4%</i><span>最高额度</span><i>50万</i><span>到账时间</span><i>10分钟</i><img src="../assets/img/right4.png" alt="">
                        </li>
                        <li>
                            <h3>平安银行新一贷</h3><span>月息</span><i class="bfb"> 0.4%</i><span>最高额度</span><i>50万</i><span>到账时间</span><i>10分钟</i><img src="../assets/img/right4.png" alt="">
                        </li>
                        <li>
                            <h3>平安银行新一贷</h3><span>月息</span><i class="bfb"> 0.4%</i><span>最高额度</span><i>50万</i><span>到账时间</span><i>10分钟</i><img src="../assets/img/right4.png" alt="">
                        </li>
                        <li>
                            <h3>平安银行新一贷</h3><span>月息</span><i class="bfb"> 0.4%</i><span>最高额度</span><i>50万</i><span>到账时间</span><i>10分钟</i><img src="../assets/img/right4.png" alt="">
                        </li>
                        <li>
                            <h3>平安银行新一贷</h3><span>月息</span><i class="bfb"> 0.4%</i><span>最高额度</span><i>50万</i><span>到账时间</span><i>10分钟</i><img src="../assets/img/right4.png" alt="">
                        </li>
                    </ul>
                    <div class="more">
                        查看更多  >
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    name: 'BoxRight4',
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes bgchange{
	from{background-color: #fff;}
	to{background-color: #ff8b10;}
}
.box-right4{
       width: 960px;
       height:100%;
       display:flex;
       background: #e8e8e8;
       .rleft{
           width:300px;
           height:490px;
           background-color:#fefefe;
            margin-top:20px;
            margin-left:15px;
            text-align:center;
            .rltitle{
                padding-top:40px;
                h2{
                    font-size:25px; 
                    margin-left: -12px;
                    margin-top: 2px;
                }
                span{
                    margin-top:17px;
                    font-size:14px;
                    display:block;
                }
                .money{
                    font-size:40px;
                    color:#ffa500;  
                    font-weight: bold;
                    margin-top:10px;
                }
            }
            .rlconnter{
                display:flex;
                justify-content:center;
                flex-wrap:wrap;
                margin-top:47px;
                span{
                    color:#cccccc;
                    margin-left: 15px;
                }
                .name{
                    width:100%;
                    font-size:14.5px;
                }
                .tel{
                    width:100%;
                    margin-top:34px;
                    font-size:14.5px;
                }
                .sq{
                    width:150px;
                    height:45px;
                    border:2px solid #ffa500;
                    border-radius: 30px;
                    color:#ffa500;
                    line-height:47px;
                    margin-top:53px;
                    font-size:18px;
                    font-weight:600;
                    margin-left:-5px;
                }
            }
            .rlfoot{
                text-align:center;
                display:flex;
                justify-content:center;
                margin-top:35px;
                .ftext{
                    color:#aaaaaa;
                    width:140px;
                    line-height:20px;
                    font-size:12px;
                }
            }
       }
       .rright{
           width:615px;
           height:490px;
           background-color:#fefefe;
            margin-top:20px;
            margin-left:15px;
            ul{
                width:100%;
                margin-top: 17px;
                margin-left:2px;
                li:hover{
                    animation:bgchange 1s 1;
                    animation-fill-mode: forwards;
                    color:#fff;
                    span{
                        color:#fff;
                    }
                    i{
                        color:#fff;
                    }
                }
                li{
                    width:95%;
                    height:70px;
                    line-height:70px;
                    margin-left:22px;
                    border-bottom:1px solid #e5e5e5;
                    h3{
                        float:left;
                        font-size:18px;
                        font-weight:500;
                    }
                    span{
                        margin-left: 28px;
                        font-size: 13px;
                        color: #999;
                    }
                    i{
                        font-size:20px;
                        color:#ffa500;
                        margin-left:15px;
                        font-weight:bold;
                        
                    }
                    .bfb{
                            margin-left:0;
                            margin-right:8px;
                        }
                    img{
                        margin-left:20px;
                    }
                }
            }
            .more{
                height:55px;
                line-height:47px;
                text-align:center;
                margin-left:-10px;
            }
       }
    }
</style>