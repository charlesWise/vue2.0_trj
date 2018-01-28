<template>
  <div id="app">
		<HeaderView />
    <div class="wrapper">
      <router-view class="router-view"></router-view>
    </div>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from './components/Header.vue';
import FooterView from './components/Footer.vue';
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    HeaderView,
    FooterView
  }
}
</script>

<style lang="scss">

</style>
