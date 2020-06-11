<template>
  <div>
    <Detail></Detail>
    <turn-page :total="total" :pageSize="pageSize" v-model="current" class="turnPage"/>
  </div>
</template>

<script>
import turnPage from "../components/turnPage";
import Detail from "./Detail";

export default {
  data(){
    return{
      current:1,
      total:100,
      pageSize:10,
    }
  },
  components: {
    Detail,
    turnPage
  },
};
</script>

<style scoped>



</style>