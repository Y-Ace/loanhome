<template>
    <div class="box-right5">
                <div class="bbox">
                    <div class="brl">
                        <div class="brl-box">
                            <div>
                                <span class="img1">问</span><span class="wen">小额贷款签合同需要注意哪些问题？</span>
                            </div>
                            <div>
                                <span class="img2">答</span><span class="da">你好，学生不能办理信用贷款。</span>
                            </div>
                        </div>
                        <div class="brl-box">
                            <div>
                                <span class="img1">问</span><span class="wen">小额贷款签合同需要注意哪些问题？</span>
                            </div>
                            <div>
                                <span class="img2">答</span><span class="da">你好，学生不能办理信用贷款。</span>
                            </div>
                        </div>
                        <div class="brl-box">
                            <div>
                                <span class="img1">问</span><span class="wen">小额贷款签合同需要注意哪些问题？</span>
                            </div>
                            <div>
                                <span class="img2">答</span><span class="da">你好，学生不能办理信用贷款。</span>
                            </div>
                        </div>
                        <div class="brl-box">
                            <div>
                                <span class="img1">问</span><span class="wen">小额贷款签合同需要注意哪些问题？</span>
                            </div>
                            <div>
                                <span class="img2">答</span><span class="da">你好，学生不能办理信用贷款。</span>
                            </div>
                        </div>
                    </div>
                    <div class="brr">
                        <h3>&nbsp; 贷款计算器</h3>
                        <div class="cbox">
                            <div class="imgbox">
                                <img src="../assets/img/计算器1.png" alt="">
                                <div>等额本金</div>
                            </div>
                            <div class="imgboxb">
                                <img src="../assets/img/计算器2.png" alt="">
                                <div>等额本息</div>
                            </div>
                            <div class="imgboxb">
                                <img src="../assets/img/计算器3.png" alt="">
                                <div>房贷</div>
                            </div>
                            <div class="imgbox">
                                <img src="../assets/img/计算器4.png" alt="">
                                <div>公积金贷</div>
                            </div>
                            <div class="imgbox">
                                <img src="../assets/img/计算器5.png" alt="">
                                <div>组合贷</div>
                            </div>
                            <div class="imgboxb">
                                <img src="../assets/img/计算器6.png" alt="">
                                <div>工资计算器</div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name: 'BoxRight5',
    data() {
        return {
          
        }
    }
}
</script>

<style lang="scss" scoped>
.box-right5{
       width: 960px;
       height:100%;
       padding-top:24px;
       display:flex;
       background: #e8e8e8;
       .bbox{
        background-color:#fff;
        width:930px;
        height:490px;
        margin-left:15px;
        display: flex;

        .brl{
            width:390px;
            margin-left:45px;
            margin-top:25px;
            .brl-box:last-child{
                border-bottom:none;
            }
            .brl-box{
                height:105px;
                border-bottom:1px solid #ccc;
                div:first-child{
                    padding-top:20px;
                    .wen{
                        font-size:18px;
                        margin-left:22px;
                    }
                }
                div:last-child{
                    margin-top:10px;
                    .da{
                        font-size:15px;
                        color:#666;
                        margin-left:18px;
                    }
                }
                .img1{
                            font-size:20px;
                            background-color:#ccc;
                            color:#fff;
                            width:30px;
                            height:30px;
                            display: inline-block;
                            border-radius: 5px;
                            line-height:30px;
                            text-align:center;
                        }
                        .img2{
                            @extend .img1;
                            background-color:#ffa500;
                        }
            }
        }
        .brr{
            margin-top:40px;
            margin-left:136px;
            h3{
                border-left:2px solid #ffa500;
                padding-left:4px;
                font-size:18px;
            }
            .cbox{
                width:310px;
                height:359px;
                display:flex;
                justify-content:space-between;
                align-content:space-between;    
                flex-wrap:wrap;
                border-radius:30px;
                overflow: hidden;
                margin-top:28px;
                .imgbox{
                    width:146px;
                    height:107px;
                    background-color:#ffa500;
                    img{
                        width:45px;
                        height:45px;
                        margin-left:50px;
                        margin-top:15px;
                    }
                    div{
                        color:#fff;
                        text-align:center;
                        margin-top:14px;
                        font-size:16px;
                    }
                }
                .imgboxb{
                    width:146px;
                    height:107px;
                    background-color:#c8c8c8;
                    img{
                        width:45px;
                        height:45px;
                        margin-left:50px;
                        margin-top:15px;
                    }
                    div{
                        color:#fff;
                        text-align:center;
                        margin-top:14px;
                        font-size:16px;
                    }
                }
            }
        }
       }
    }
</style>