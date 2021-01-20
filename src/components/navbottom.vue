<template>
    <div class="nav-bottom">
        <div class="nav-bottom-box">
            <div class="nav-bottom-box-left">
                <div class="nav-bottom-box-left-top">
                <div>百位专家精挑细选</div>
                    最高可贷<span>100万</span>元
                </div>
                <div class="nav-bottom-box-left-center">
                    立即申请
                </div>
                <div class="nav-bottom-box-left-bottom">
                    贷款专线：400-990-8628
                </div>
            </div>
            <div class="nav-bottom-box-right">
                <div class="nav-bottom-box-right-nav" v-for="(item, index) in bottomList" :key="index">
                    <dt>{{item.dtname}}</dt>
                    <dd v-for="(items, index) in item.ddname" :key="index">{{items}}</dd>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {bottomList} from '../config/header-config'
export default {
    name:'NavBottom',
    data() {
        return {
            bottomList
        }
    },
}
</script>

<style lang="scss" scoped>
    .nav-bottom {
            width: 100%;
            height: 210px;
            background-color: rgba(0, 0, 0, 0.5);
            float: left;
            position: relative;
            overflow: hidden;
            &-box{
                width:1200px;
                margin:0 auto;
                display: flex;
                &-left{
                        font-size: 16px;
                        color: #999;
                        width: 180px;
                        line-height: 1.4;
                        // float:left;
                    &-top{
                        margin-top:40px;
                        span{
                            color:#cc7f11;
                            font-size:25px;
                            font-weight: 600;
                        }
                    }
                    &-center{
                        height:40px;
                        background-color:#cc7f11;
                        color:#fff;
                        border-radius: 5px;
                        line-height: 40px;
                        text-align: center;
                        margin-top: 20px;
                    }
                    &-bottom{
                        color:#cc7f11;
                        font-size:14px;
                    }
                }
                &-right{
                    margin-left:40px;
                    display:flex;
                    &-nav{
                        padding-top:40px;
                        padding-left:20px;
                        // padding-right:10px;
                        transition: all 1s;
                        width:240px;
                        height:210px;
                        dt{
                            font-size:15px;
                            color:#fff;
                            margin-bottom:20px;
                        }
                        dd{
                            font-size:13px;
                            color:#999;
                            line-height:1.5rem;
                        }
                    }
                    &-nav:hover{
                        background: url(../assets/img/bannercar.png) no-repeat;
                        background-size: 100% 100%;
                        dt{
                            color:#000;
                        }
                        dd{
                            color:#000;
                        }
                    }
                }
            }
    }

</style>