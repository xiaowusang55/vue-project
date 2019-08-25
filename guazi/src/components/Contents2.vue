<template>
  <div class="index-carlist-bg">
    <div class="index-carlist-title">
      热卖车型
    </div>
    <ul class="index-carlist">
        <router-link :to="'/hotsales/:$route.params.id'" v-for="(item, index) in carlistIndex" :key="index">
            <span>{{ item }}</span>
        </router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
	data() {
		return {
			carlistIndex: [ '猜您喜欢', '严选车', '最新上架', '降价急售', '准新车', '练手车', 'SUV']
		}
	},
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


</style>