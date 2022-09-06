<template>
  <form className="gallery__form" name="search" @submit.prevent="onSubmit">
    <input
      className="gallery__input"
      id="name"
      name="name"
      type="text"
      required
      :value="query"
      @input="onChangeQuery"
    />
    <button className="gallery__submit-button" type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: "Form-component",
  props: {
    query: String,
    onSubmit: Function,
    onChangeQuery: Function,
  }
}
</script>
