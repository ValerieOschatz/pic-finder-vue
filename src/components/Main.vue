<template>
  <main className="gallery">
    <Form 
      :query="query"
      :onSubmit="onSubmit"
      :onChangeQuery="onChangeQuery" />
    <button className="gallery__button" type="button">Show random picture</button>
    <ul className="gallery__card-list">
      <li className="gallery__card-item" v-for="card in cards" :key="card.id">
        <img className="gallery__image" :src="card.urls.small" :alt="card.alt_description" />
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
  }
}
</script>
