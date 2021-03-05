<template>
  <router-link :to="'movie/' + movie.id" class="movie-card text-decoration-none">
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title">
    <h5>{{ movie.title }}</h5>
    <p>{{movie.vote_average}}</p>
  </router-link>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object
  }
}
</script>

<style scoped>
  p {
    margin: 0;
    position: absolute;
    width: 36px;
    height: 36px;
    top: 4px;
    right: 4px;
    background-color: black;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h5 {
    text-align: center;
    min-height: 56px;
    margin-top: 8px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px 4px 0 0;
  }

  .movie-card {
    position: relative;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
    box-shadow: 1px 1px 4px 2px rgb(212, 212, 212);
    color: black;
  }
</style>
