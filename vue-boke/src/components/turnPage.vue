<template>
  <div>
    <div id="pager" class="pager">
      <a class="pager-item" :class="{disabled: value === 1}" @click="changePage(1)">首页</a>
      <a
        class="pager-item"
        :class="{disabled: value === 1}"
        @click="changePage(value-1)"
      >上一页</a>

      <a
        class="pager-item"
        :class="{active: n === value}"
         v-for="n in numbers"
         :key="n"
      >{{ n }}</a>
      <a
        class="pager-item"
        :class="{disabled: value === pageNumber}"
        @click="changePage(value+1)"
      >下一页</a>
      <a
        class="pager-item"
        :class="{disabled: value === pageNumber}"
        @click="changePage(pageNumber)"
      >尾页</a>

      <span class="pager-text">
        <i>{{ value }}</i>/
        <i>{{ pageNumber }}</i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  // props:['value','total','pageSize','panelNumber'],
  props:{
    value:{
      type:Number,
      default:1,
    },
    pageSize:{
      type:Number
    },
    panelNumber:{
      type:Number,
      default:5,
    },
    total:{
      type:Number
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.pageSize);
    },
    numbers() {
    //最小页码数字
      let min = Math.floor(this.value - this.panelNumber / 2);
      if (min < 1) {
        min = 1;
      }

    //最大页码数字
      let max = min + this.panelNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      const arr = [];
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  methods: {
    changePage(newPage) {
      if (newPage < 1) {
        newPage = 1;
      } else if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.value) {
        return;
      }
      this.$emit("input", newPage);
    }
  }
};
</script>


<style scoped>
.pager {
  text-align: center;
  /* margin-bottom: 100px; */
}

.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  border-radius: 10%;
  margin: 4px;
  cursor: pointer;
  color: rgba(0, 0, 0, .5);
  -webkit-user-select: none;
 
}

.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.pager .pager-item.active {
  color: #fff;
  background: rgba(0, 0, 0, .5);
  border: none;
  cursor: auto;
}
</style>