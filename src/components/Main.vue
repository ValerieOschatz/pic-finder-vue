<template>
  <div className="page">
    <header className="header">
      <div className="header__container">
        <h1 className='header__title'>Pic Finder</h1>
      </div>
    </header>

    <main className="gallery">
      <form className="gallery__form" name="search">
        <input
          className="gallery__input"
          id="name"
          name="name"
          type="text"
          required
        />
        <button className="gallery__submit-button" type="submit">Search</button>
      </form>
      <button className="gallery__button" type="button">Show random picture</button>
      <ul className="gallery__card-list"></ul>
    </main>

    <footer className="footer">
      <p className="footer__text">&copy; 2022 Pic Finder</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Main-component'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped></style> -->
