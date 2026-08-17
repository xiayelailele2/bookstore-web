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
          <el-button size="mini" type="primary" @click="handleView(scope.row)">查看</el-button>
          <el-button size="mini" type="warning">加入购物车</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 子组件：书籍详情弹窗 -->
    <BookDetail ref="bookDetailRef" :book-name="selectBookName" :author="selectBookAuthor"/>

  </div>
</template>

<script>
//导入子组件
import BookDetail from "@/components/BookDetail.vue"
export default {
  name: "BookStore",
  components: {
    BookDetail //注册子组件
  },
  data() {
    return {
      //传给子组件的两个参数
      selectBookName: "",
      selectBookAuthor: "",
      // 模拟数据，后续替换为后端接口返回的数据
      bookList: [
        { id: 1, bookName: "西游记", author: "吴承恩2", price: 45.5, category: "古典文学" },
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
    //点击查看按钮，scope.row就是当前这一行的book对象
    handleView(row) {
      //赋值给变量，传给子组件props
      this.selectBookName = row.bookName
      this.selectBookAuthor = row.author
      //调用子组件的open方法打开弹窗
      this.$refs.bookDetailRef.open()
    }
  }
}
</script>

<style scoped>
.bookstore-container {
  padding: 20px;
}
</style>