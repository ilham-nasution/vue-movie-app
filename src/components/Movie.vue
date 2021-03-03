<template>
  <div class="movie-card">
    <img width="100%" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title">
    <h3>{{ movie.title }}</h3>
    <p>{{movie.vote_average}}</p>
  </div>
</template>

<script>
export default {
  name: 'Movie',
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

  .movie-card {
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
