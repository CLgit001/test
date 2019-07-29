<template>
    <header>
      <div class="carousel slide" id="slidershow" data-ride="carousel" data-interval="2000">
        <div class="navhead">
          <div class="nav_bgc"></div>
          <div class="img">
            <img src="../../../static/img/log.png">
          </div>
          <div class="nav_txt">
            <div class="title">
              首页
            </div>
            <div class="title">
              产品
            </div>
            <div class="title">
              联系
            </div>
          </div>
        </div>
        <!--计数器-->
        <ol class="carousel-indicators">
          <li class="active" data-target="#slidershow" data-slide-to="0"></li>
          <li data-target="#slidershow" data-slide-to="1"></li>
          <li data-target="#slidershow" data-slide-to="2"></li>
        </ol>
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
          <div class="item" style="background-image: url('../../../static/img/1.png')">
            <!--添加对应标题和内容-->
            <div class=" content shuffling_txt">
              <div class="txt">
                一站式解决<br> 通风降温、排尘除烟难题
              </div>
            </div>
          </div>
          <div class="item" style="background-image: url('../../../static/img/1.png')">
            <!--添加对应标题和内容-->
            <div class=" content shuffling_txt">
              <div class="txt">
                一站式解决<br> 通风降温、排尘除烟难题
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
