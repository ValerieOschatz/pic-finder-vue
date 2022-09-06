<template>
  <div className="page">
    <Header />
    <Main
      :cards="cards"
      :query="query"
      :onSubmit="handleSubmit"
      :onChangeQuery="handleChangeQuery" />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import { getPictures } from "../utils/api";

export default {
  name: 'App',
  components: {
    Main,
    Header,
    Footer
  },
  data() {
    return {
      cards: [],
      query: '',
      page: 1,
      selectedCard: null,
    }
  },
  methods: {
    handleSubmit() {
      getPictures(this.page, this.query)
      .then((cardsData) => {
        this.cards = [...cardsData.results];
        this.query = '';
      })
      .catch((err) => {
        console.log(err);
      })
    },
    handleChangeQuery(e) {
      this.query = e.target.value;
    }
  }
}
</script>
