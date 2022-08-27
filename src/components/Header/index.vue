<template>
  <div>
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <p v-if="!userName">
              <span>请</span>
              <!-- 声明式导航：router-link务必有to属性 -->
              <router-link to="/login">登录</router-link>
              <router-link class="register" to="register">免费注册</router-link>
            </p>
            <!-- 登陆了 -->
            <p v-else>
              <a>{{ userName }}</a>
              <a class="register" @click="logout">退出登录</a>
            </p>
          </div>
          <div class="typeList">
            <router-link to="/center/myOrder">我的订单</router-link>
            <router-link to="/shopcart">我的购物车</router-link> 
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" to="/home">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="keyword"
            />
            <button
              class="sui-btn btn-xlarge btn-danger"
              type="button"
              @click="goSearch"
            >
              搜索
            </button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      if (this.$route.query) {
        let location = {
          name: "search",
          params: {
            keyword: this.keyword || undefined,
          },
        };
        location.query = this.$route.query;
        this.$router.push(location);

        //this.$router.push('./search')

        //路由传参
        //第一种：字符串形式
        //this.$router.push("/search/" + this.keyword + "?K=" + this.keyword.toUpperCase());
        //第二种：模板字符串
        //this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
        //第三种：对象
        /* this.$router.push({
          name: "search",
          params: {
            keyword: this.keyword
          },
          query: {
            k: this.keyword.toUpperCase()
          }
        }) */

        //面试题1：路由传递参数（对象写法）path是否可以结合params参数一起使用
        /* 路由传参分为 params 传参与 query 传参
        params 传参类似于网络请求中的 post 请求，params 传过去的参数不会显示在地址栏中（但是不能刷新）。
        params 只能配合 name 使用，如果提供了 path，params 会失效。
        query 传参类似于网络请求中的 get 请求，query 传过去的参数会拼接在地址栏中（?name=xx）。
        query 较为灵活既可以配合 path 使用，也能配合 name 使用 */
        //this.$router.push({path:'/search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})

        //面试题2：如何指定params参数可传可不传？
        //如果路由要求传递params参数，但是你就不传递params参数，url会发生问题
        //解决：在配置路由时，在占位符后面加一个问号
        //this.$router.push({path:'/search',query:{k:this.keyword.toUpperCase()}})

        //面试题3：params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
        //使用undefined解决：params参数可以传递也可以不传递（空的字符串）
        //this.$router.push({path:'/search',params:{keyword:'' || undefined},query:{k:this.keyword.toUpperCase()}})

        //面试4：路由组件能不能传递props数据
        //可以
        //希尔值写法：params
        //props:true
        //对象写法：额外的给路由组件传递一些props
        //props:{a:1111111,b:2222222}
        //函数写法：可以给params参数，query参数，通过props传递给路由组件
        /*  props:($route)=>{
           return {
             keyword:$route.params.keyword,
             k:$route.query.k
           }
         } */
      }
    },
    async logout() {
      //退出登录
      try {
        await this.$store.dispatch("Logout");
        this.$router.push("/home");
      } catch (error) {}
    },
  },
  mounted() {
    //通过全局事件总线清除关键字
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
  },
  computed: {
    //用户信息
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
