<template>
  <div class="index-carlist-bg">
    <div class="index-carlist-title">热卖车型</div>
    <ul class="index-carlist">
      <router-link v-for="(item, index) in carlistIndex" :key="index" :to="item.url" tag="li" event="mouseover">{{ item.title }}</router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      carlistIndex: [
        {
          url: "/hotsales/gyLike",
          title: '猜您喜欢'
        },
        {
          url: "/hotsales/stSelect",
          title: '严选车'
        },
        {
          url: "/hotsales/newArrival",
          title: '最新上架'
        },
        {
          url: "/hotsales/bigSale",
          title: '降价急售'
        },
        {
          url: "/hotsales/amtNew",
          title: '准新车'
        },
        {
          url: "/hotsales/trnCar",
          title: '练手车'
        },
        {
          url: "/hotsales/suv",
          title: 'SUV'
        }
      ]
    };
  }
};
</script>

<style scoped>
.index-carlist-bg {
  background-color: #f5f5f7;
}
.index-carlist-title {
  font-size: 28px;
  color: #000;
  width: 1200px;
  line-height: 28px;
  margin: 0 auto;
  padding-top: 52.5px;
}
.index-carlist {
  padding-top: 30px;
  padding-bottom: 17.5px;
  height: 22.5px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.index-carlist li {
  display: inline-block;
  margin-right: 28px;
  font-size: 16px;
  color: #999;
  cursor: pointer;
  line-height: 16px;
}
.index-carlist span {
  display: inline-block;
  padding-bottom: 20px;
  cursor: pointer;
  line-height: 16px;
}
.index-carlist span:hover {
  color: #000;
}
.router-link-exact-active.router-link-active {
  color: #000;
}
</style>