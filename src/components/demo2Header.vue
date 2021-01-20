<template>
    <div class="header" :class="isShowNavBottom?'h8':'h6'">
       <div :class="this.scroll>=600?'active':'header-top'">
           <div class="top-box">
               <div class="box-img">
                   <img v-show="isActiveOne" src="../assets/img/toplogo.png" alt="">
                   <img v-show="isActiveTwo"  src="../assets/img/flogo.png" alt="">
               </div>
               <div class="address">
                  <img src="../assets/img/定位.png" alt="">
                <el-cascader
                        :options="cityOptions" :show-all-levels="false"
                        :value="address"
                        :props="{ expandTrigger: 'hover' }"
                    >
                    </el-cascader>
               </div>
              <nav class="nav">
				<ul>
					<li v-for="item in menuList" :key="item.name">
                            <a :href="item.link">
                               {{item.name}}
                            </a>
                    </li>
				</ul>
			   </nav>
                <div class="search-box">
                    <div class="search">
                        <el-input placeholder="搜索贷款产品" suffix-icon="el-icon-search" v-model="search" ></el-input>
                    </div>
                    <ul>
                        <li v-for="(item, index) in topNavList" :key="index">
                            <a :href="item.link">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
           </div>
       </div>
       <div class="header-main">
           <el-carousel :interval="interval" arrow="always">
             <el-carousel-item>
               <img src="../assets/img/banner.png" class="header-main-image">
             </el-carousel-item>
            <el-carousel-item>
                    <img src="../assets/img/banner1.png" class="header-main-image">
             </el-carousel-item>    
          </el-carousel>
          <div class="gundong">
              平台累计放款：<span>$<gun-dong :value="888666000.00"></gun-dong>.00</span> 平台申请数： <span><gun-dong :value="868686"></gun-dong></span>
            
          </div>
            
          
       </div>
       <div class="header-footer" @mouseleave="liLeave">
           <ul>
               <li :class="{liActive:index==isActive}" v-for="(item,index) in navList" :key="item.name" @mouseover="liHover(index)" >
                <div>{{item.name}} <img src="../assets/img/right1.png" alt=""></div>
                <span v-for="items in item.spanList" :key="items.spname">{{items.spname}}</span>
               </li>
           </ul>
         <nav-bottom :indexNum="isActive" v-show="isShowNavBottom" ></nav-bottom>
       </div>
    </div>
</template>

<script>
import {menuList, navList, topNavList} from '../config/header-config'
import NavBottom from './navbottom.vue'
import GunDong from './gundongNum.vue'
import cityOptions from "../config//citydata.js";
export default {
    data() {
        return {
            search:'',
            menuList,
            navList,
            topNavList,
            interval: 10000,
            isShowNavBottom: false,
            isActiveOne:true,
            isActiveTwo:false,
            scroll: '',
            isActive:-1,
            cityOptions,
            address:'深圳'
        }
    },
    methods: {
        liHover(i) {
          this.isShowNavBottom = true
          this.isActive = i
          console.log(this.isActive)
        },
        liLeave() {
            this.isShowNavBottom = false
            this.isActive =-1
        },
        menu(){
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (this.scroll>=600) {
                this.isActiveOne=false
                this.isActiveTwo=true
            }else{
                this.isActiveOne=true
                this.isActiveTwo=false
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.menu)
    },
    components:{
        NavBottom,
        GunDong
    }
}
</script>

<style lang="scss">
    .h8{
        height: 815px;
        transition: all .5s ease;
    }
    .h6{
        height:607px;
        transition: all .4s ease;
    }
    .header{
        width:100%;
        position: relative;
        overflow:hidden;
        .active{
            @extend .header-top;
            background-color:rgba(255,255,255,1) !important;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
            li{
               a{
                 color:#000 !important;
                }
                a:hover{
                 color:#ffa500  !important ;
               }
            }
        }
        .header-top{
            width:100%;
            position: fixed;
            display: flex;
            justify-content: center;
            z-index:999;
            background-color:rgba(255,255,255,0.1);
            .top-box{
                width:1200px;
                height:94px;
                display:flex;
                justify-content: space-between;
                .box-img{
                    margin-left: 32px;
                    margin-top: 14px;
                }
                
                .address{
                    margin-top:35px;
                    margin-left: 18px;
                    width: 80px;
                    height:25px;
                    line-height:25px;
                    border-radius:20px;
                    font-size:11px;
                    position:relative;
                    .el-input--suffix{
                    width: 80px;
                    height:25px;
                    line-height:25px;
                    border-radius:20px;
                    font-size:11px;
                    overflow:hidden;
                    position:absolute;
                    top:-17px;
                    left:-23px;
                    input::-webkit-input-placeholder{
                           color: #000;
                       }
                    .el-input__inner{
                        font-size:12px;
                        padding-left:22px;
                        padding-right:0;
                        height:25px;
                        line-height:25px;
                        color:#000 ;
                        background-color:rgba(255,255,255,0.3);
                        border:none;
                        
                        
                    }
                    span{
                            margin-left:20px;
                            i{
                                color:#000;
                            }
                            .el-input__icon{
                                line-height:30px;
                            }
                                .el-icon-arrow-down:before{
                                    margin-left:15px;
                                    margin-top:-5px;
                                }
                        }
                }
                    span{
                        margin-top:-2px;
                    }
                    img:first-child{
                        margin: 6px 5px -2px 10px;
                    }
                    img:last-child{
                            margin-left: 6px;
                            margin-bottom: -2px;
                            width: 12px;
                    }
                }
                .nav>ul{
                    width: 563px;
                    li{
                        float:left;
                        height:94px;
                        font-size:18px;
                        line-height:95px;
                        margin-left:51px;
                        margin-top:1px;
                    }
                    li:first-child{
                        margin-left: 26px;
                    }
                    
                }
                .nav a{
                    color:#d1d2d6;
                }
                .nav a:hover{
                        color:#ffa500;
                    }
                .search-box{
                    width:260px;
                    height:100%;
                    .search{
                        margin-top:30px;
                        input{
                            height:37px;
                            width:270px;
                            margin-top: -2px;
                            padding-left: 21px;
                            font-size: 10px;
                            border-radius: 18px;
                            background-color: rgba(0,0,0,0.5);
                            color:#fff;
                            border:0;
                        }
                    }
                    a{
                        color:#dadadc;
                        display:inline-block ;
                        text-align:center;
                        font-size:10px;
                    }
                    ul{
                        margin-top: 14px;
                        margin-left: 5px;
                        li{
                            color:#dadadc;
                            float:left;
                            padding-left:10px;
                            padding-right:12px;
                            border-right: 1px solid #dadadc;
                        }
                        li:nth-child(2){
                            padding-right:10px;
                        }
                        li:nth-child(3){
                            padding-left:13px;
                        }
                        li:nth-child(4){
                            padding-left:13px;
                            border-right:none;
                        }
                    }
                }
            }
        }
        .header-main{
            position: absolute;
            width:100%;
            height:100%;
            top: 0;
            left:0;
            z-index:6;
            .el-carousel {
            width:100%;
            height:100%;
            ul {
                display:none
            }
            }
            .el-carousel__container {
                width:100%;
                height:100% !important;
                .el-carousel__item{
                    width:100%;
                    height:100%;
                }
            }
            .header-main-image {
                width: 100%;
                height: 840px;
            }
            .gundong{
                position: absolute;
                top:355px;
                left:49.5%;
                transform: translate(-50%,-50%);
                font-size:15px;
                z-index:3;
                color:#cccccc;
                span{
                    color:#ffa500;
                    font-size:20px;
                    font-weight: 600;
                }
            }
            .el-carousel__arrow{
                background-color:#2b2e32;
                color:#b2b5b9;
                margin-top:-18px;
                position:absolute;
                top:302px;
                i{
                    font-size: 25px; 
                }
            }
            .el-carousel__arrow--left{
                margin-left:39px;
            }
            .el-carousel__arrow--right{
                margin-right:19px;
            }
        }
  .header-footer{
      position:absolute;
      width:100%;
      top:558px;
      z-index:6;
      ul{
        margin:0 auto;
        color: #fff;
        width:1200px;
        display:flex;
        height:47px;
        .liActive{
           float:left;
            border-left:2px solid #ff9f15;
            padding-left:10px;
            padding-right:25px;
            background-color: rgba(0, 0, 0, 0.5);
            color:#ff9f15;
            div{
                font-size:16px;
                margin-bottom:12px;  
                margin-top:2px;
                img{
                    margin-left:8px;
                }
            }
            span{
                font-size:10px;
                margin-right:.6rem;
            }
        }
        li{
            float:left;
            border-left:2px solid #fff;
            padding-left:10px;
            padding-right:26px;
            div{
                font-size:16px;
                margin-bottom:12px;  
                margin-top:2px;
                img{
                    margin-left:8px;
                }
            }
            span{
                font-size:10px;
                margin-right:.6rem;
            }
        }
        li:nth-child(1){
            margin-left:218px;
            margin-right:47px;
        }
        li:nth-child(2){
            padding-left:9px;
            padding-right: 22px;
            :nth-child(3){
                margin-right:5px;
            }
        }
        li:nth-child(3){
            padding-left:9px;
            padding-right: 22px;
            :nth-child(3){
                margin-right:5px;
            }
        }
        li:nth-child(4){
            padding-left:10px;
            padding-right: 22px;
            :nth-child(3){
                margin-right:5px;
            }
        }
    }
  }
    }
  .el-icon-search:before{
        font-size:20px;
      margin-left:5px;
    }
  .el-input__suffix{
      margin-top:-2px;
  }
</style>