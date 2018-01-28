<template>
  <div id="app">
    <loading v-if="isLoading" />
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

import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      
    }
  },
  computed:mapGetters([
    'isLoading'
  ]),
  components:{
    HeaderView,
    FooterView
  }
}
</script>

<style lang="scss">

</style>
