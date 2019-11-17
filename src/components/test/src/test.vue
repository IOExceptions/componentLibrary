<template>
 <div>
   标题：{{msg}}
 </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type:String,
      default:""
    }
  }
}
</script>

<style scoped>

</style>
