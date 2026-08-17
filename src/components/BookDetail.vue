<template>
  <!-- ElementUI 弹窗 -->
  <el-dialog title="书籍详情" :visible.sync="dialogVisible" width="600px">
    <!-- 没有查到书籍的提示 -->
    <div v-if="!bookInfo">
      <p>未找到该书籍信息</p>
    </div>

    <div v-else class="detail-wrap">
      <div class="row">
        <img :src="bookInfo.coverImg" alt="封面" class="cover" />
        <div class="info">
          <h3>{{ bookInfo.bookName }}</h3>
          <p>作者：{{ bookInfo.author }}</p>
          <p>价格：{{ bookInfo.price }} 元</p>
          <p>出版社：{{ bookInfo.publisher }}</p>
          <p>出版日期：{{ bookInfo.publishDate }}</p>
        </div>
      </div>
      <div class="desc">
        <h4>书籍简介</h4>
        <p>{{ bookInfo.intro }}</p>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "BookDetail",
  // 接收父组件传过来参数 props
  props: {
    bookName: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dialogVisible: false, //弹窗是否显示
      bookInfo: null,

      // ✅前端模拟数据库：完整书籍字典，模拟后端返回全部详情
      mockBookDb: [
        {
          bookName: "西游记",
          author: "吴承恩",
          coverImg: "https://picsum.photos/id/24/200/260",
          price: 45.5,
          publisher: "人民文学出版社",
          publishDate: "2019‑05‑10",
          intro: "《西游记》是中国古代第一部浪漫主义章回体长篇神魔小说。讲述唐僧师徒四人西天取经，一路降妖除魔的故事。"
        },
        {
          bookName: "三国演义",
          author: "罗贯中",
          coverImg: "https://picsum.photos/id/26/200/260",
          price: 42.0,
          publisher: "中华书局",
          publishDate: "2018‑08‑03",
          intro: "三国演义描写了从东汉末年到西晋初年之间近百年的历史风云，讲述魏蜀吴三国割据争霸的故事。"
        },
        {
          bookName: "Java编程思想",
          author: "Bruce Eckel",
          coverImg: "https://picsum.photos/id/0/200/260",
          price: 108,
          publisher: "机械工业出版社",
          publishDate: "2007‑06‑01",
          intro: "Java经典教程书籍，深入讲解Java面向对象思想，被称为Java圣经，适合开发人员进阶学习。"
        }
      ]
    }
  },
  // ✅当父组件传入 bookName / author 发生变化，就执行查询
  watch: {
    bookName() {
      this.searchBook()
    },
    author() {
      this.searchBook()
    }
  },
  methods: {
    // 根据 props 拿到的书名、作者，在前端mock数据库查询
    searchBook() {
      if (!this.bookName || !this.author) {
        this.bookInfo = null
        return
      }
      // 在模拟数据库匹配
      const find = this.mockBookDb.find(item => {
        return item.bookName === this.bookName && item.author === this.author
      })
      this.bookInfo = find || null
    },
    open() {
      this.dialogVisible = true
    },
    close() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
.detail-wrap {
  padding: 10px 0;
}
.row {
  display: flex;
  gap: 20px;
}
.cover {
  width: 140px;
  height: 180px;
  object-fit: cover;
}
.info p {
  margin: 8px 0;
}
.desc {
  margin-top: 20px;
}
</style>