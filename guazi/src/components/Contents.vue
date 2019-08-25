<template>
  <div class="index-carlist-bg">
    <div class="index-carlist-title">
      热卖车型
    </div>
    <ul class="index-carlist">
        <li>
            <span>猜您喜欢</span>
        </li>
        <li>
            <span>严选车</span>
        </li>
        <li>
            <span>最新上架</span>
        </li>
        <li>
            <span>降价急售</span>
        </li>
        <li>
            <span>准新车</span>
        </li>
        <li>
            <span>练手车</span>
        </li>
        <li>
            <span>SUV</span>
        </li>
    </ul>

    <div class="index-carlist-box">
      <ul class="carlist clearfix">
        <li>
          <a href="javascript">
            <img src="https://image1.guazistatic.com/qn190825195858def6b4c232df979753478c8222371e94.jpg?imageView2/1/w/287/h/192/q/88" alt="">
            <div class="car-info">
              <h2 class="t">标致2008 2014款 1.6L 自动时尚版</h2>
              <div class="t-i">
                2015年
                <span></span>
                4.0万公里
                <span></span>
                到店服务
              </div>
              <div class="t-price">
                <p>
                  6.00
                  <span>万</span>
                </p>
                <em class="line-through">13.20万</em>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {};
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