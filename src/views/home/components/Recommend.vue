<template>
    <div>
        <div class="title">热闹推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img :src="item.imgUrl" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeRecommend",
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
        margin-top: .1rem
        height: .8rem
        line-height: .8rem
        background-color: #eee
        text-indent: .2rem
        font-weight: bold
    .item
        display: flex
        height: 1.9rem
        .item-img
            height: 1.7rem
            width: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                font-weight: bold
                height: .54rem
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                height: .4rem
                line-height: .4rem
                ellipsis()
                color: #ccc
            .item-button
                height: .44rem
                line-height: .44rem
                margin-top: .2rem
                background-color: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #FFF
</style>