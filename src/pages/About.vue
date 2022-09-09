<template>
  <div className="cardInfo">
    <router-link to="/" className="cardInfo__link" @click="onBack">Go back</router-link>
    <figure className="cardInfo__figure">
      <img className="cardInfo__image" :src="selectedCard ? selectedCard.urls.regular : ''" :alt="selectedCard ? selectedCard.alt_description : ''" />
      <figcaption className="cardInfo__text">{{ selectedCard ? selectedCard.alt_description : '' }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'About-page',

  props: {
    selectedCard: Object,
    onBack: Function,
    cards: Array,
    query: String,
    onSubmit: Function,
    onChangeQuery: Function,
    onScroll: Function,
    onCardClick: Function,
    onGetRandom: Function
  }
}
</script>
