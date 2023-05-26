<template>
  <mHeader ref="my_header" @changeSearchStatus="changeSearchStatus" @changeBurgerStatus="changeBurgerStatus" 
  :burgerStatus="burgerStatus" ></mHeader>
  <mBody ref="my_body" @changeSearchStatus="changeSearchStatus" :searchStatus="searchStatus" :burgerStatus="burgerStatus"
  @changeBurgerStatus="changeBurgerStatus"
  ></mBody>

</template>
<script>
import mHeader from './components/mheader.vue';
import mBody from './components/mbody.vue';
export default {
  components: {mHeader, mBody},
  data(){
    return {
      searchStatus: "",
      burgerStatus: false
    } 
  },
  methods:{
    changeSearchStatus(value){
      this.searchStatus = value;
    },
    changeBurgerStatus(){
      this.burgerStatus = !this.burgerStatus;
    }
  }
  }
</script>
<style lang="">
  
</style>