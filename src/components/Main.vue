<template>
  <main className="gallery">
    <Form 
      :query="query"
      :onSubmit="onSubmit"
      :onChangeQuery="onChangeQuery" />
    <button className="gallery__button" type="button" @click="onGetRandom">Show random picture</button>
    <ul className="gallery__card-list">
      <li className="gallery__card-item" v-for="card in cards" :key="card.id">
        <router-link to="/card">
          <img className="gallery__image" :src="card.urls.small" :alt="card.alt_description" @click="handleClick(card)" />
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import Form from './Form.vue';

export default {
  name: "Main-component",
  components: { Form },
  props: {
    cards: Array,
    query: String,
    onSubmit: Function,
    onChangeQuery: Function,
    onCardClick: Function,
    onGetRandom: Function
  },
  methods: {
    handleClick(card) {
      this.onCardClick(card);
    }
  }
}
</script>
