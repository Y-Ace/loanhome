<template>
    <div class="footer">
        <div class="footer-top">
            <div class="footer-top-left">
                <img src="../assets/img/底部logo.png" alt="">
            </div>
            <div class="footer-top-center">
                <div class="footer-top-center-t">
                    <ul>
                        <li v-for="(item, index) in navList" :key="index.name">
                            <a :href="item.link">
                               {{item.name}}
                            </a>
                        </li>
                    </ul>
                    <img src="../assets/img/底部安全信息.png" alt="">
                </div>
            </div>
            <div class="footer-top-right">
                <img src="../assets/img/二维码.png" alt="">
                <div>
                    扫码关注公众号
                </div>
            </div>
        </div>
        <div class="footer-center">
            <span>地址：深圳市南山区科技园海天路易思博科技大厦2405  </span>
            <span>    深圳市明星科技有限公司    </span>
            <span>    备案号：粤ICP XXXXX    </span>
        </div>
        <div class="footer-bottom" v-if="isShow">
            <div class="footer-bottom-box">
                <div class="footer-bottom-box-left">
                    <div class="footer-bottom-box-left-text">
                        <i>24</i>小时质询贷款电话
                    </div>
                    <img src="../assets/img/foottel.png" alt="">
                </div>
                <div class="footer-bottom-box-center">
                    <div>
                        输入你的电话号码
                    </div>
                    <img src="../assets/img/底部线.png" alt="">
                </div>
                <div class="footer-bottom-box-right">
                    贷款 <br>
                    免费通话
                </div>
            </div>
            <img class="close" src="../assets/img/close.png" alt="" @click="close">
        </div>
    </div>
</template>

<script>
import {navList} from '../config/footer-config'
export default {
    data() {
        return {
            navList,
            isShow:true
        }
    },
    methods: {
        close(){
            this.isShow=false
        }
    },
}
</script>

<style lang="scss" scoped>
    .footer{
        background-color:#000000;
        // height:360px;
        &-top{
            width:1200px;
            height:200px;
            margin: 0 auto;
            display:flex;
            justify-content: space-around;
            padding-top:50px;
            &-left{
                img{
                    margin-left: 93px;
                    margin-top: 8px;
                }
            }
            &-center{
                margin-left: -15px;
                margin-top: 10px;
                &-t{
                display: flex;
                 flex-wrap: wrap;
                 justify-content: center;
                 ul{
                     margin-bottom:50px;
                    li{
                        float:left;
                        padding:0 18px;
                        border-right: 1px solid #fff;
                        a{
                            color:#fff;
                        }
                        &:last-child{
                            border-right:none;
                        }
                    }

                 }
                }
                img{
                    margin-left: -8px;
                    margin-top: 2px;
                }
            }
            &-right{
                img{
                    margin-right: 75px;
                    margin-top: -1px;
                }
                div{
                    color:#ccc;
                    font-size:12px;
                    padding:6px 7px;
                }
            }
        }
        &-center{
            height:60px;
            background-color:#3e3e3e;
            line-height:60px;
            color:#616966;
            text-align:center;
            font-size:10px;
            margin-left:-25px;
        }
        &-bottom{
            height:100px;
            background-color:#000000;
                position: relative;
            &-box{
                width:1200px;
                margin:0 auto;
                display:flex;
                justify-content:space-between;
                color:#fff;
                &-left{
                    margin-left:62px;
                    margin-top:21px;
                    &-text{
                        font-size:14px;
                        i{
                            font-size:20px;
                        }
                    }
                    img{
                        margin-top:2px;
                    }
                }
                &-center{
                    margin-left:-63px;
                    margin-top:42px;
                    img{
                        margin-top:15px;
                    }
                }
                &-right{
                    width:190px;
                    height:100px;
                    background-color:#f59915;
                    font-size:25px;
                    text-align:center;
                    line-height:35px;
                    padding-top:16px;
                    margin-right:52px;
                }
            }
            .close{
                position: absolute;
                top:0;
                right:0;
            }
        }
    }
</style>