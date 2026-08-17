<template>
  <div class="bookstore-container">
    <h2>📚 图书商城</h2>

    <!-- 图书表格，用element-ui组件 -->
    <el-table :data="bookList" border style="width: 100%;margin-top:20px;">
      <el-table-column prop="id" label="图书ID" width="80"></el-table-column>
      <el-table-column prop="bookName" label="图书名称"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="price" label="价格(元)"></el-table-column>
      <el-table-column prop="category" label="分类"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" type="primary">查看</el-button>
          <el-button size="mini" type="warning">加入购物车</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: "BookStore",
  data() {
    return {
      // 模拟数据，后续替换为后端接口返回的数据
      bookList: [
        { id: 1, bookName: "西游记", author: "吴承恩", price: 45.5, category: "古典文学" },
        { id: 2, bookName: "三国演义", author: "罗贯中", price: 42.0, category: "古典文学" },
        { id: 3, bookName: "Java编程思想", author: "Bruce Eckel", price: 108, category: "计算机" }
      ]
    }
  },
  mounted() {
    console.log("书店页面加载完成，这里后续调用Java后端接口获取真实数据")
    // 示例：调用后端代码，等你后端接口写好打开下面注释
    /*
    this.loadBookData()
    */
  },
  methods: {
    /*
    async loadBookData(){
      // /api 走vue.config.js代理，转发到你的SpringBoot
      const res = await this.$axios.get("/api/book/list")
      this.bookList = res.data
    }
    */
  }
}
</script>

<style scoped>
.bookstore-container {
  padding: 20px;
}
</style>