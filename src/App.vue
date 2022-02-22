<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <div ref="container">
      <global-header/>
      <router-view></router-view>
    </div>
    <global-footer ref="footer"/>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';

import { mapMutations } from 'vuex';
import { SET_APP_EL } from './store/global.store';

export default {
  name: 'App',
  components: {
    GlobalHeader, GlobalFooter
  },
  mounted() {
    this[SET_APP_EL](this);
    this.initHandler();
    this.$nextTick(this.repositionFooter);
  },
  beforeDestroy() {
    this.destroyHandler();
  },
  watch: {
    $route() {
      this.$nextTick(this.repositionFooter);
    }
  },
  computed: {
    container() {
      return this.$refs.container;
    },
    footer() {
      return this.$refs.footer;
    }
  },
  methods: {
    ...mapMutations('global', [ SET_APP_EL ]),
    initHandler() {
      window.addEventListener('resize', this.repositionFooter);
    },
    destroyHandler() {
      window.removeEventListener('resize', this.repositionFooter);
    },
    repositionFooter() {
      this.footer.reposition(this.container.offsetHeight);
    }
  }
}
</script>

<style lang='less'>
@import './assets/style/colors';
@import './assets/style/animations';

body {
  // .infinite-background(
  //   url('./assets/img/backgrounds/trippy background-small.png'),
  //   url('./assets/img/backgrounds/trippy background-smaller.png'),
  //   url('./assets/img/backgrounds/trippy background.png'),
  //   0 0, 1pt, 1pt);
  background-image: url('./assets/img/backgrounds/trippy background-small.png'), 
    url('./assets/img/backgrounds/trippy background-smaller.png'), 
    url('./assets/img/backgrounds/trippy background.png');
    background-blend-mode: color;
    background-attachment: fixed;
  color: @TEXT-COLOR;
  margin: 0pt;

  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}
</style>
