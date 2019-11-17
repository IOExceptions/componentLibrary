<template>
  <div id="main">
    <reportFormDesigner></reportFormDesigner>
  </div>
</template>

<script>
  import reportFormDesigner from './reportFormDesigner/src/reportFormDesigner'
export default {
  name: 'HelloWorld',
  components:{reportFormDesigner},
  props: {
    msg: String
  },
  mounted() {

  },
}
</script>

<style scoped>
  #main{
    height: 100%;
  }
</style>
