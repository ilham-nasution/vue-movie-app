<template>
  <div>
    <h1>Now Playing</h1>
    <div class="movie-list">
      <div v-for="movie in movieList" :key="movie.id">
        <Movie :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import Movie from './Movie'

export default {
  name: 'MovieList',
  props: {
    movieList: Array
  },
  components: {
    Movie
  }
}
</script>

<style scoped>
  .movie-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 8px;
  }
</style>
