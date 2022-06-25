<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="big" />
    </div>
    <!-- 蒙版：遮罩层 -->
    <div class="mask" ref="mask"></div>
  </div>
</template> 

<script>
export default {
  name: "Zoom",
  props: ["skuImageList"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    imgObj() {
      return this.skuImageList[this.currentIndex] || {};
    },
  },
  mounted() {
    //全局事件总线：获取兄弟组件传递过来的索引值
    this.$bus.$on("getIndex", (index) => {
      //修改当前响应式数据
      this.currentIndex = index;
    });
  },
  methods: {
    handler(event) {
      /*   1、ref 加在普通的元素上，用this.$refs.（ref值） 获取到的是dom元素
　　        2、ref 加在子组件上，用this.$refs.（ref值） 获取到的是组件实例，可以使用组件的所有方法。
            在使用方法的时候直接this.$refs.（ref值）.方法（） 就可以使用了。
　        　3、如何利用 v-for 和 ref 获取一组数组或者dom 节点 */
      let mask = this.$refs.mask;
      let big = this.$refs.big;
      let left = event.offsetX - mask.offsetWidth / 2;//offsetX 属性返回鼠标指针相对于目标元素的 x 坐标。
      let top = event.offsetY - mask.offsetHeight / 2;//offsetY 属性返回鼠标指针相对于目标元素的 y 坐标。
      //约束范围
      if (left <= 0) left = 0;
      if (left >= mask.offsetWidth) left = mask.offsetWidth;//offsetWidth包含内边距（padding）和边框（border）
      if (top <= 0) top = 0;
      if (top >= mask.offsetHeight) top = mask.offsetHeight;
      //修改元素的left top属性值
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      big.style.left = -2 * left + "px";
      big.style.top = -2 * top + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>