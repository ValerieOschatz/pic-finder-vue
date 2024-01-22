<template>
  <div className="page">
    <router-view
      :cards="cards"
      :query="query"
      :selectedCard="selectedCard"
      :onSubmit="handleSubmit"
      :onChangeQuery="handleChangeQuery"
      :onScroll="handleScroll"
      :onCardClick="handleCardClick"
      :onBack="handleBack"
      :onGetRandom="handleGetRandom">
    </router-view>
  </div>
</template>

<script>
import { getPictures, getRandomPicture } from "./utils/api";

export default {
  name: 'App',
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
    getPictureList() {
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
    },
    handleScroll(e) {
      if (e.target.documentElement.scrollTop + e.target.documentElement.clientHeight >= e.target.documentElement.scrollHeight) {
        this.isfetching = true;
        this.page += 1;
      }

      if (this.isfetching && this.cards.length < this.totalPages) {
        this.getPictureList();
      }
    },
    handleCardClick(card) {
      this.selectedCard = card;
    },
    handleBack() {
      this.selectedCard = null;
    },
    handleGetRandom() {
      getRandomPicture()
      .then((cardData) => {
        this.selectedCard = cardData;
        this.$router.push('/card');
      })
      .catch((err) => {
        console.log(err);
      })
    },
    goToHomePage() {
      if (this.selectedCard) {
        this.$router.push('/card');
      } else {
        this.$router.push('/');
      }
    },
  },
  mounted() {
    this.goToHomePage();
  },
}
</script>
