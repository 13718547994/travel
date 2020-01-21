<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入景点/城市/旅游主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
  	city: String
  }
};
</script>

<style lang="stylus" scoped>
	@import "~styles/varibles.styl"
	.header
		background-color: $bgColor
		height: $headerHight
		line-height: $headerHight
		display: flex
		color: #FFF
		.header-left
			width: .64rem
			text-align: center
			.back-icon
				font-size: .4rem
		.header-input
			flex: 1
			background-color: #FFF
			color: #CCC
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			border-radius: .1rem
		.header-right
			width: 1.24rem
			text-align: center
			color: #FFF
			.arrow-icon
				font-size: .24rem
				margin-left: -.04rem
</style>
