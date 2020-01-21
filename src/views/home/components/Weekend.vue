<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-warpper">
                    <img :src="item.imgUrl" alt="" class="item-img-content">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeWeekend",
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
        background-color: #EEE
        height: .8rem
        line-height: .8rem
        text-indent: .2rem
        font-weight: bold
    .item-img-warpper
        overflow: hidden
        height: 0
        padding-bottom: 37%
        .item-img-content
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            height: .54rem
            line-height: .54rem
            font-size: .32rem
        .item-desc
            color: #ccc
            ellipsis()
</style>