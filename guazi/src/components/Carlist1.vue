<template>
  <div class="index-carlist-box">
      <ul class="carlist clearfix">
        <li v-for="(car, index) in carlist" :key="index">
          <a href="javascript" class="car-a">
            <img :src="car.imgUrl" alt="">
            <div class="car-info">
              <h2 class="t">{{ car.subtitle }}</h2>
              <div class="t-i">
                {{ car.year }}
                <span class="icon-pad">|</span>
				{{ car.miles }}
                <span class="icon-pad">|</span>
                {{ car.service }}
              </div>
              <div class="t-price">
                <p>
                  {{ car.curPrice }}
                  <span>{{ car.unit }}</span>
                </p>
				<i class="i-blue">{{ car.category }}</i>
                <em class="line-through">{{ car.primPrice }}</em>
              </div>
            </div>
			<em class="icon-new">{{ car.carModel }}</em>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    data() {
		return {
			carlist: [
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
				{
					imgUrl: 'https://image.guazistatic.com/gz01190705/14/55/976046eaa5dc9f99b303da4857a245ec.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88',
					subtitle: '标致2008 2014款 1.6L 自动时尚版',
					year: '2015年',
					miles: '4.0万公里',
					service: '到店服务',
					curPrice: '6.00',
					primPrice: '13.20万',
					unit: '万',
					category: '严选车',
					carModel: '新上架'
				},
			]
		}
	},
}
</script>

<style scoped>
.index-carlist-box {
	width: 1200px;
	margin-left: auto;
	margin-right: auto;
}
.carlist {
	margin-left: -20px;
	width: 1220px;
}
.carlist li {
	float: left;
	margin-left: 20px;
	margin-bottom: 19px;
	background: #fff;
}
.carlist li a.car-a {
	width: 285px;
	height: 319px;
	padding: 0;
	background-color: #fff;
	border: none;
	display: block;
	position: relative;
	cursor: pointer;
	transition: box-shadow .4s;
}
.carlist li a.car-a:hover {
	box-shadow: 0 0 20px rgba(0, 0, 0, .1);
}
.carlist img {
	border: none;
	display: block;
	width: 285px;
	height: 193px;
}
.carlist .car-info {
	width: 100%;
	height: 126px;
	border: 1px solid rgba(0, 0, 0, .05);
	box-sizing: border-box;
	position: relative;
	padding-bottom: 25px;
}

.carlist li a.car-a .t {
	padding: 0;
    margin: 0;
	font-size: 17px;
	color: #495056;
	font-weight: 400;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	padding: 20px 20px 6px;
}
.carlist li a.car-a .t-i {
	padding-left: 20px;
	padding-right: 20px;
	color: #a5abb2;
	padding-bottom: 2px;
}
.carlist li a.car-a .t-i .icon-pad {
	display: inline-block;
	font-size: 12px;
	text-align: center;
	vertical-align: top;
	line-height: 20px;
	color: #a5abb2;
}
.carlist li .t-price {
	height: 30px;
	font-size: 20px;
	color: #fa5428;
	overflow: hidden;
	padding-left: 20px;
	padding-right: 20px;
}
.t-price p {
	float: left;
	line-height: 30px;	
}
.t-price i.i-blue {
	color: #d7a844;
	background-color: #fcf2d5;
	float: right;
	width: 46px;
	height: 21px;
	font-size: 12px;
	line-height: 21px;
	text-align: center;
	margin: 5px 0 0 5px;
	font-style: normal;
}
.t-price p span {
	font-size: 14px;
}
.t-price em.line-through {
	text-decoration: line-through;
	float: left;
	margin-top: 7px;
	margin-left: 10px;
	color: #a5abb2;
	font-style: normal;
	font-size: 14px;
}
.icon-new {
	display: block;
	position: absolute;
	width: 60px;
	height: 55px;
	text-align: center;
	color: #fff;
	top: -5px;
	left: 11px;
	font-size: 12px;
	font-style: normal;
	background-image: url("https://cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0395d1a3188c98507b746b6df4.png");
	background-size: 451px 300px;
	background-position: -36px -100px;
	line-height: 48px;
	padding: 0;
}
</style>