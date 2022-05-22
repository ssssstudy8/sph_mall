<template>
  <div>
    <TypeNav />
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
  import ListContainer from '@/views/Home/ListContainer'
  import Recommend from '@/views/Home/Recommend'
  import Rank from '@/views/Home/Rank'
  import Like from '@/views/Home/Like'
  import Floor from '@/views/Home/Floor'
  import Brand from '@/views/Home/Brand'
  import {
    mapState
  } from "vuex"

  export default {
    name: '',
    components: {
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted() {
      //派发action，获取floor组件的数据
      this.$store.dispatch("getFloorList")
    },
    computed:{
      ...mapState({
        floorList:status => status.home.floorList
      })
    }
  }

</script>

<style>

</style>
