<template>
    <div class="box-left">
            <div class="left-title">
                <h2>{{boxConfig.title}} <span>></span></h2>
                <div class="si">
                    <i v-for="item in boxConfig.subTitle" :key="item">{{item}}</i>
                    <img src="../assets/img/shape1.png" alt="">
                </div>
            </div>
            <div class="left-connter">
                <span v-for="(item,index) in boxConfig.buttonList" :key="index" :class="{active:index==isActive}" @click="clickOne(index)">{{item}}</span>
            </div>
   </div>
</template>
<script>
export default {
    name: 'LeftContent',
    props: {
        boxConfig: {
            type: Object,
            default: ()=>({})
        }
    },
    data() {
        return {
            isActive:0
        }
    },
    methods: {
        clickOne(index){
            // console.log(index)
            this.isActive = index
            this.$emit('activeNum',this.isActive)
        }
    },
}
</script>
<style lang="scss" scoped>
  .box-left{
            width: 241px;
            height:100%;
            padding:20px;
            .left-title{
                h2{
                    margin-top:14px;
                    padding-left:9px;
                    font-size:25px;
                    span{
                        float:right;
                    }
                }
                .si{
                    margin-top:21px;
                    padding-left:9px;
                    font-size:16px;
                    color:#999;
                    i{
                        margin-right:8px;
                    }
                    img{
                        margin-bottom: 2px;
                    }
                }
            }
            .left-connter{
                display: flex;
                justify-content: space-between;
                flex-wrap:wrap;
                width:198px;
                margin-top: 28px;
                font-size:16px;
                margin-left:1px;
                span:hover{
                    background-color:#ffa500;
                    color: #fff;
                    border: none;
                    transition: all .5s;
                }
                .active{
                    background-color: #ffa500;
                        color: #fff;
                        border: none;
                }
                span{
                    display: inline-block;
                    width: 93px;
                    height:25px;
                    line-height:25px;
                    text-align:center;
                    border: 1px solid #000;
                    margin-bottom: 12.5px;
                    line-height: 23px;
                }
                span:nth-child(3){
                    margin-bottom: 11px;
                }
                span:nth-child(4){
                    margin-bottom: 11px;
                }
                span:nth-child(5){
                    margin-bottom: 10px;
                }
                span:nth-child(6){
                    margin-bottom: 10px;
                }
            }
        }
</style>
