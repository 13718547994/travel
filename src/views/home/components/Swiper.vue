<template>
    <div class="warpper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.imgUrl" alt="" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeSwiper",
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: ".swiper-pagination",
                loop: true,
                autoplay: 2000
            }
        }
    },
    computed: {
        showSwiper () {
            // 需要注意的是swiper在创建之时是个空数组
            // 当数组中有数据时默认展示了最后一个元素所以要加一个判断
            // 当数组数据传递过来之后再创建Swiper
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    .warpper >>> .swiper-container
        height: 0
        padding-bottom: 26.66%
    .warpper >>> .swiper-pagination-bullet-active
        background-color: #FFF
    .warpper
        background-color: #eee
        .swiper-img
            width: 100%
</style>