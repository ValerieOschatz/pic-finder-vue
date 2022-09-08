<template>
  <Header />
  <Main
    :cards="cards"
    :query="query"
    :onSubmit="onSubmit"
    :onChangeQuery="onChangeQuery"
    :onCardClick="onCardClick" />
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home-page',

  components: {
    Main,
    Header,
    Footer
  },

  props: {
    cards: Array,
    query: String,
    onSubmit: Function,
    onChangeQuery: Function,
    onScroll: Function,
    onCardClick: Function,
    selectedCard: Object,
    onBack: Function
  },

  mounted() {
    document.addEventListener('scroll', this.onScroll);
  },

  unmounted() {
    document.removeEventListener('scroll', this.onScroll);
  }
}
</script>
