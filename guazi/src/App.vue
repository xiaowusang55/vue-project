<template>
  <div id="app">
	<topnav></topnav>
	<contents></contents>
  </div>
</template>

<script>

import topnav from './components/Topnav';
import contents from './components/Contents'


export default {
  name: "App",
  components: {
    topnav,
	contents
  }
};
</script>

<style>
h1,h2, p {
    padding: 0;
    margin: 0;
}
a {
	text-decoration: none;
	color: #000000;
}
ul {
	padding: 0;
	margin: 0;
	list-style: none;
}
.clearfix::after {
	content: "";
	display: block;
	clear: both;
}
</style>
