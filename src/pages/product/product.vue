<template>
  <div>
    <div class="carousel slide" id="slidershow" data-ride="carousel" data-interval="2000">
      <div class="navhead">
        <div class="img">
          <img src="../../../static/img/log.png">
        </div>
        <div class="nav_txt">
          <div class="title" @click="navclick('home')">
            首页
          </div>
          <div class="title" @click="navclick()">
            产品
          </div>
          <div class="title" @click="navclick()">
            联系
          </div>
        </div>
      </div>
      <!--图片容器-->
      <div class="carousel-inner">
        <div class="item active" style="background-image: url('../../../static/img/1.png')">
          <!--添加对应标题和内容-->
          <div class=" content shuffling_txt">
            <div class="txt">
              一站式解决<br> 通风降温、排尘除烟难题
            </div>
            <div class="english_z">
              VENTILATION COOLING、SMOKE DUST PROBLEM
            </div>

            <div class="contact">
              <div  class="img">
                <img src="../../../static/img/phone.png"/>
              </div>
              <div class="phone">服务热线：XXXX-XXXXXXX</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="products mar_top">
      <div class="product_list">
        <div class="row">
          <div class=" col-sm-6 col-md-4 col-lg-3">
            <div class="products_box">
              <div class="img">
                <img src="../../../static/img/cp_a.png"/>
              </div>
              <div class="name">矿井地面通风管</div>
            </div>
          </div>
          <div class=" col-sm-6 col-md-4 col-lg-3">
            <div class="products_box">
              <div class="img">
                <img src="../../../static/img/cp_a.png"/>
              </div>
              <div class="name">矿井地面通风管</div>
            </div>
          </div>
          <div class=" col-sm-6 col-md-4 col-lg-3">
            <div class="products_box">
              <div class="img">
                <img src="../../../static/img/cp_a.png"/>
              </div>
              <div class="name">矿井地面通风管</div>
            </div>
          </div>
          <div class=" col-sm-6 col-md-4 col-lg-3">
            <div class="products_box">
              <div class="img">
                <img src="../../../static/img/cp_a.png"/>
              </div>
              <div class="name">矿井地面通风管</div>
            </div>
          </div>
          <div class=" col-sm-6 col-md-4 col-lg-3">
            <div class="products_box">
              <div class="img">
                <img src="../../../static/img/cp_a.png"/>
              </div>
              <div class="name">矿井地面通风管</div>
            </div>
          </div>
          <div class=" col-sm-6 col-md-4 col-lg-3">
            <div class="products_box">
              <div class="img">
                <img src="../../../static/img/cp_a.png"/>
              </div>
              <div class="name">矿井地面通风管</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="pager" id="pager">

      <span v-for="item in pageCount+1">
          <span v-if="item==1" class="btn btn-default" v-on:click="showPage(pageCurrent-1,$event)" :class="{'disabled':fDisabled}">
              上一页
          </span>
          <span v-if="item==1" class="btn btn-default" v-on:click="showPage(item,$event)">
              {{item}}
          </span>
          <!--<span v-if="item==1&&item<showPagesStart-1" class="btn btn-default disabled">-->
              <!--...-->
          <!--</span>-->
          <span v-if="item>1&&item<=pageCount-1&&item>=showPagesStart&&item<=showPageEnd&&item<=pageCount" class="btn btn-default" v-on:click="showPage(item,$event)">
              {{item}}
          </span>
          <!--<span v-if="item==pageCount&&item>showPageEnd+1" class="btn btn-default disabled">-->
              <!--...-->
          <!--</span>-->
          <span v-if="item==pageCount" class="btn btn-default" v-on:click="showPage(item,$event)"  >
              {{item}}
          </span>
          <span v-if="item==pageCount" class="btn btn-default" v-on:click="showPage(pageCurrent+1,$event)" :class="{'disabled':lDisabled}">
              下一页
          </span>
      </span>
    </div>




    <div class="nav_bottom">
      <div class="bottom_box">
        <div class="bot_con">
          <div class="title_z">免费为您定制</div>
          <div class="tip">在线填写需求，我们将尽快为您答疑解惑</div>
          <div class="form">
            <div class="inputs">
              <div class="input">
                <input placeholder="贵姓"/>
              </div>
              <div class="input">
                <input placeholder="所属行业"/>
              </div>
              <div class="input">
                <input placeholder="电话号码"/>
              </div>
              <div class="input">
                <input placeholder="电子邮箱" />
              </div>
              <textarea placeholder="您的问题阐述"></textarea>
            </div>
            <div class="btn_submit">提交</div>
          </div>
        </div>
        <div class="bot_con bot_conx">
          <div class="title_z">联系我们</div>
          <div class="tip">欢迎前来联系</div>
          <div class="infos">
            <div class="info">
              <div class="img">
                <img src="../../../static/img/address.png">
              </div>
              <div class="title_box">
                <div class="title">Address</div>
                <div class="txt">江阴市徐霞客镇雪海路4号</div>
              </div>
            </div>
            <div class="info">
              <div class="img">
                <img src="../../../static/img/address.png">
              </div>
              <div class="title_box">
                <div class="title">Tel</div>
                <div class="txt">133-2815-2109 0510-86536880</div>
              </div>
            </div>
            <div class="info">
              <div class="img">
                <img src="../../../static/img/address.png">
              </div>
              <div class="title_box">
                <div class="title">E-mail</div>
                <div class="txt"> 526257856@qq.com</div>
              </div>
            </div>
            <div class="info">
              <div class="img">
                <img src="../../../static/img/address.png">
              </div>
              <div class="title_box">
                <div class="title">Fax</div>
                <div class="txt"> 0510-86536550</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="belongs">版权所有 © 2018-2038 众盛通风 保留一切权利 备案号：苏ICP备12000169号</div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "product",
    data(){
      return{
        //为第一页或者最后一页时，首页，尾页不能点击
        fDisabled:false,
        lDisabled:false,
        //总项目数
        totalCount: 200,
        //分页数
        pageCount: 20,
        //当前页面
        pageCurrent: 1,
        //分页大小
        pagesize: 10,
        //显示分页按钮数
        showPages: 3,
        //开始显示的分页按钮
        showPagesStart: 1,
        //结束显示的分页按钮
        showPageEnd: 100,
        //分页数据
        arrayData: []
      }
    },
    methods:{
      showPage(pageIndex, $event, forceRefresh){

        if (pageIndex > 0) {
          if (pageIndex > this.pageCount) {
            pageIndex = this.pageCount;
          }
          //判断数据是否需要更新
          var currentPageCount = Math.ceil(this.totalCount / this.pagesize);
          if (currentPageCount != this.pageCount) {
            pageIndex = 1;
            this.pageCount = currentPageCount;
          }
          else if (this.pageCurrent == pageIndex && currentPageCount == this.pageCount && typeof (forceRefresh) == "undefined") {
            console.log("not refresh");
            return;
          }

          //处理分页点中样式
          var buttons = $("#pager").find("span");
          for (var i = 0; i < buttons.length; i++) {
            if (buttons.eq(i).html() != pageIndex) {
              buttons.eq(i).removeClass("active");
            }
            else {
              buttons.eq(i).addClass("active");
            }
          }

          //测试数据 随机生成的
          var newPageInfo = [];
          var time=new Date();
          for (var i = 0; i < this.pagesize; i++) {
            newPageInfo[newPageInfo.length] = {
              timestamp: time,
              count: (i + (pageIndex - 1) * 20)
            };
          }
          this.pageCurrent = pageIndex;
          this.arrayData = newPageInfo;
          //如果当前页首页或者尾页，则上一页首页就不能点击，下一页尾页就不能点击
          if(this.pageCurrent===1){
            this.fDisabled=true;
          }else if(this.pageCurrent===this.pageCount){
            this.lDisabled=true;
          }else{
            this.fDisabled=false;
            this.lDisabled=false;
          }

          //计算分页按钮数据
          if (this.pageCount > this.showPages) {
            if (pageIndex <= (this.showPages - 1) / 2) {
              this.showPagesStart = 1;
              this.showPageEnd = this.showPages - 1;
              console.log("showPage1")
            }
            else if (pageIndex >= this.pageCount - (this.showPages - 3) / 2) {
              this.showPagesStart = this.pageCount - this.showPages + 2;
              this.showPageEnd = this.pageCount;
              console.log("showPage2")
            }
            else {
              console.log("showPage3")
              this.showPagesStart = pageIndex - (this.showPages - 3) / 2;
              this.showPageEnd = pageIndex + (this.showPages - 3) / 2;
            }
          }
          console.log("showPagesStart:" + this.showPagesStart + ",showPageEnd:" + this.showPageEnd + ",pageIndex:" + pageIndex);
        }
      }
    },
    mounted(){
      this.showPage(this.pageCurrent, null, true);
    },
    computed:{
    }
  }
</script>

<style lang="scss" scoped>
  .navhead{
    position: absolute;
    z-index: 100;
  }
  .swiper-container {
    width: 100%;
    /*height: 300px;*/
    margin: 20px auto;
  }
</style>
