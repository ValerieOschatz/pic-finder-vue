<template>
  <div className="cardInfo">
    <router-link to="/" className="cardInfo__link" @click="onBack">Go back</router-link>
    <figure className="cardInfo__figure">
      <img className="cardInfo__image" :src="selectedCard.urls.regular" :alt="selectedCard.alt_description" />
      <figcaption className="cardInfo__text">{{ selectedCard.alt_description }}</figcaption>
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
    onCardClick: Function
  }
}
</script>
