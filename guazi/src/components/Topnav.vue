<template>
  <div class="top-header">
    <div class="header">
      <h1>
        <a href="javascript"></a>
      </h1>
      <div class="city">
        <p>深圳<i></i></p>
      </div>
      <div class="language" @mouseover="overShow" @mouseout="showOver">
        <div>{{ $t('navBar.lang') }}</div>
        <div class="lang-toggle" v-show="condition" @click="changeLang">
          <p data-lang="zh">{{ $t('navBar.langC') }}</p>
          <p data-lang="en">{{ $t('navBar.langE') }}</p>
          <p data-lang="jp">{{ $t('navBar.langJ') }}</p>
        </div>
      </div>
      <div class="uc">
        <a class="my-uc" href="javascript:">登录</a>
      </div>
      <div class="header-phone">
        热线电话  400-069-6530 
      </div>
      <div class="nav-list">
        <a href="javascript:" v-for="(title, index) in titles" :key='index'>{{ $t(title.name) }}</a>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        {
          name: 'navBar.newCar'
        },
        {
          name: 'navBar.finace'
        },
        {
          name: 'navBar.service'
        },
        {
          name: 'navBar.seller'
        },
        {
          name: 'navBar.buyer'
        },
        {
          name: 'navBar.home'
        }
      ],
      condition: false
    }
  },
  methods: {
    overShow(e) {
      this.condition = true
    },
    showOver() {
      this.condition = false
    },
    changeLang(e) {
      if(e.target.nodeName == "P") {
        this.$i18n.locale = e.target.dataset.lang
        console.log(this.$i18n.locale);
      }
    }
  },
  
};
</script>

<style scoped>
.top-header {
  height: 70px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 2px hsla(0, 0%, 80%, 0.5);
}
.header {
  width: 1200px;
  height: 55px;
  margin: 0 auto;
  position: relative;
}
.header h1 {
  float: left;
}
.header h1 a {
  display: block;
  width: 55px;
  height: 55px;
  background: url("https://cli-sta.guazistatic.com/c2c_web/fff.dc56abdfd895a73f8c067012a06bd8b8.png")
    no-repeat;
  background-size: 100%, 100%;
  margin-top: 7.5;
}

.top-header .city {
  margin: 18px 0 0 16px;
  float: left;
  height: 34px;
  padding: 0 15px;
}
.top-header .city p {
    line-height: 34px;
    font-size: 14px;
    cursor: pointer;
}
.top-header .city p i {
    display: inline-block;
    width: 6px;
    height: 3px;
    background: url("https://cli-sta.guazistatic.com/c2c_web/down2.d703742c145f11bed5c7dd98b3addfb0.png") no-repeat;
    background-size: 100%, 100%;
    vertical-align: middle;
    margin: 0 0 0 5px;
}
.top-header .city p:hover {
    color: #3db46e;
}

.uc {
    background-image: url("https://cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0395d1a3188c98507b746b6df4.png");
    background-size: 451px 300px;
    background-position: 6px -212px;
    color: #495056;
    margin-top: 25.5px;
    float: right;
    cursor: pointer;
    margin-left: 10px;
    font-size: 14px;
    padding-left: 24px;
    position: relative;
    padding-bottom: 11px;
    line-height: 16px;
}
.uc:hover {
    background-position: 6px -240px;
}
.uc a:hover {
    color: #3db46e;
}

.header-phone {
    float: right;
    font-size: 14px;
    line-height: 16px;
    padding: 0 15px 0 0;
    margin-left: 30px;
    margin-top: 26.5px;
    border-right: 1px solid #181818;
}

.top-header .nav-list {
    padding-top: 15px;
    float: right;
    width: 700px;
    height: 42px;
}
.nav-list a {
    padding-bottom: 12px;
    float: right;
    line-height: 40px;
    margin: 0 20px;
    font-size: 14px;
}
.nav-list a:hover {
    color: #3db46e;
    border-bottom: 2px solid #3db46e;
}

.language {
  width: 60px;
  position: absolute;
  top: 23px;
  left: 192px;
  font-size: 12px;
  height: 24px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  line-height: 24px;
}
.language:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
}

.language .lang-toggle {
  line-height: 20px;
  padding-top: 5px;
}
.lang-toggle p:hover {
  color: #3db46e;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
}
</style>