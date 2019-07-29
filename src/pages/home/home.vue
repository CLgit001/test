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
    <!--<Header></Header>-->
      <div  class="content_box ">
        <div class="con" >
          <div class="box_a">
            <div class="img">
              <img src="../../../static/img/1.png">
            </div>
          </div>
          <div class="box_b ">
            <div class="title">河南省众合日盛机电工程有限公司</div>
            <div class="txt">此处为公司介绍，通风网路，指风道的联接形式，
              有串联、并联和角联。角联风网风流稳定性差，一般采区内部应尽
              量避免。串联风流污染严重，瓦斯矿禁止采用。并联风网的优点，在
              于它是数条有共同分合节点、中间无交叉风路的风网，故系统的总风阻
              小，各分支风流彼此独立，风量易于调节，安全性和稳定性均高。 复杂
              通风网路，指含有对角风路（又称不稳定风路）的任意形式的风路组合；
              它是若干风路联结形成的 复杂的风网结构。在复杂通风网路中，对角风路
              的风量及风流方向有时会发生变化，促成风流不稳定，甚至导致事故发生或扩大灾害。 </div>
            <div class="btn">联系我们</div>
          </div>
        </div>
        <div class="list_box">
          <div class=" row">
          <div  class=" col-sm-6 col-md-4 col-lg-2">
            <div class="list_cont">
              <div class="title">我们的优势</div>
              <div class="translate">Our Advantages</div>
            </div>
          </div>
          <div  class=" col-sm-6 col-md-4 col-lg-2">
            <div class="list_cont">
              <div class="img">
                <img src="../../../static/img/experience.png"/>
              </div>
              <div class="line_x"></div>
              <div class="txt">20年施工经验</div>
            </div>
          </div>
          <div  class=" col-sm-6 col-md-4 col-lg-2">
            <div class="list_cont">
              <div class="img">
                <img src="../../../static/img/experience.png"/>
              </div>
              <div class="line_x"></div>
              <div class="txt">免费设计方案</div>
            </div>
          </div>
          <div  class=" col-sm-6 col-md-4 col-lg-2">
            <div class="list_cont">
              <div class="img">
                <img src="../../../static/img/experience.png"/>
              </div>
              <div class="line_x"></div>
              <div class="txt">专业施工团队</div>
            </div>
          </div>
          <div  class=" col-sm-6 col-md-4 col-lg-2">
            <div class="list_cont">
              <div class="img">
                <img src="../../../static/img/experience.png"/>
              </div>
              <div class="line_x"></div>
              <div class="txt">规范施工管理</div>
            </div>
          </div>
          <div  class=" col-sm-6 col-md-4 col-lg-2">
            <div class="list_cont">
              <div class="img">
                <img src="../../../static/img/experience.png"/>
              </div>
              <div class="line_x"></div>
              <div class="txt">贴心售前售后</div>
            </div>
          </div>
        </div>
        </div>
        <div class="bg_img">
          <img src="../../../static/img/bg_img.png"/>
        </div>
        <div class="show_imgs">
          <div class="img">
            <img src="../../../static/img/show_a.png"/>
          </div>
          <div class="img">
            <img src="../../../static/img/show_a.png"/>
          </div>
          <div class="img">
            <img src="../../../static/img/show_a.png"/>
          </div>
          <div class="bg_col"></div>
        </div>
      </div>

      <div class="certificate">
        <div class="certificate_head">
          <div class="decoration_img">
            <img src="../../../static/img/lace_l.png"/>
          </div>
          <div class="img_txt">
            <div class="img">
              <img src="../../../static/img/trophy.png"/>
            </div>
            <div class="txt">Certificate of honor</div>
          </div>
          <div class="decoration_img">
            <img src="../../../static/img/lace_r.png"/>
          </div>
        </div>

        <div class="cert-swiper">
          <swiper :options="certOption">
            <swiper-slide>
              <img src="../../../static/img/swiper_1.png" alt="certificate1">
            </swiper-slide>
            <swiper-slide>
              <img src="../../../static/img/swiper_1.png" alt="certificate2">
            </swiper-slide>
            <swiper-slide>
              <img src="../../../static/img/swiper_1.png" alt="certificate3">
            </swiper-slide>
            <swiper-slide>
              <img src="../../../static/img/swiper_1.png" alt="certificate4">
            </swiper-slide>
            <swiper-slide>
              <img src="../../../static/img/swiper_1.png" alt="certificate5">
            </swiper-slide>
            <swiper-slide>
              <img src="../../../static/img/swiper_1.png" alt="certificate6">
            </swiper-slide>
          </swiper>
        </div>
      </div>


      <div class="banner">
        <!--<div class="ba_bgimg">-->
          <!--<img src="../../../static/img/banner.png">-->
        <!--</div>-->
        <div class="slogan">众盛一站式解决通风降温、排尘除烟难题</div>
        <div class="con_right">
          <div class="log">
            <img src="../../../static/img/phone.png">
          </div>
          <div class="txt_num">
            <div class="txt">联系热线</div>
            <div class="number">133-2815-2109</div>
          </div>
        </div>
      </div>


      <div class="products">
        <div class="product_head">
          <div class="title">
            <div class="txt">众盛产品中心</div>
            <div class="e_txt">Product Center</div>
          </div>
          <div class="more_btn">更多产品</div>
        </div>
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
  import Header from '@/components/Header'
  // import Swiper from 'swiper'
    export default {
        name: "home",
      components: {
        Header
      },
      data(){
          return{
            certOption: {
              slidesPerView: 6,
              autoplay: true,
              delay: 1000,
              spaceBetween: 30,
              loop: true,
              centeredSlides: true
            }
          }
      },
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
