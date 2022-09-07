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
      totalPages: 0,
      isfetching: false,
      selectedCard: null
    }
  },

  methods: {
    handleSubmit() {
      this.page = 1;
      getPictures(this.page, this.query)
      .then((cardsData) => {
        this.cards = [...cardsData.results];
        this.totalPages = cardsData.total_pages;
      })
      .catch((err) => {
        console.log(err);
      })
    },

    handleChangeQuery(e) {
      this.query = e.target.value;
    },

    handleScroll(e) {
      if (e.target.documentElement.scrollTop + e.target.documentElement.clientHeight >= e.target.documentElement.scrollHeight) {
        this.isfetching = true;
        this.page += 1;
      }
      if (this.isfetching && this.cards.length < this.totalPages) {
        getPictures(this.page, this.query)
        .then((cardsData) => {
          this.cards = [...this.cards, ...cardsData.results];
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isfetching = false;
        })
      }
    }
  },

  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },

  unmounted() {
    document.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
