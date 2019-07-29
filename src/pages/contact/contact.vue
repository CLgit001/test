<template>
  <div>
    <div class="carousel slide" id="slidershow" data-ride="carousel" data-interval="2000">
      <div class="navhead">
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
      <!--<ol class="carousel-indicators">-->
        <!--<li class="active" data-target="#slidershow" data-slide-to="0"></li>-->
        <!--<li data-target="#slidershow" data-slide-to="1"></li>-->
        <!--<li data-target="#slidershow" data-slide-to="2"></li>-->
      <!--</ol>-->
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

    <div class="info_box mar_top">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="info">
            <div class="log_img">
              <img src="../../../static/img/address_c.png"/>
            </div>
            <div class="txts">
              <div class="txt_a">Address </div>
              <div class="txt_b">江阴市徐霞客镇雪海路4号</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="info">
            <div class="log_img">
              <img src="../../../static/img/phone_c.png"/>
            </div>
            <div class="txts">
              <div class="txt_a">Tel  </div>
              <div class="txt_b">133-2815-2109 0510-86536880</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="info">
            <div class="log_img">
              <img src="../../../static/img/emall_c.png"/>
            </div>
            <div class="txts">
              <div class="txt_a">E-mail </div>
              <div class="txt_b"> 526257856@qq.com</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="info">
            <div class="log_img">
              <img src="../../../static/img/fax_c.png"/>
            </div>
            <div class="txts">
              <div class="txt_a">Fax </div>
              <div class="txt_b">0510-86536550</div>
            </div>
          </div>
        </div>
      </div>

    </div>


    <div class="nav_bottomx">
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
      </div>
      <div class="belongs">版权所有 © 2018-2038 众盛通风 保留一切权利 备案号：苏ICP备12000169号</div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "contact",
  }
</script>

<style lang="scss" scoped>
  .navhead{
    position: absolute;
    z-index: 100;
  }

  .bot_con{
    width: 85.41% !important;
  }
  .nav_bottom .bottom_box .bot_con .form {
    padding: 2.8% 5.47% 2.57% 4.5%;
  }
</style>
