<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header
        position: relative
        height: $headerHight
        line-height: $headerHight
        background-color: $bgColor
        text-align: center
        font-size: .32rem
        color: #FFF
        .header-back
            position: absolute
            width: .64rem
            top: 0
            left: 0
            text-align: center
            font-size: .32rem
            color: #FFF
</style>