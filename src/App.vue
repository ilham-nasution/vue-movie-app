<template>
  <div class="container">
    <MovieList :movie-list="movieList" />
  </div>
</template>

<script>
import axios from 'axios'

import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  },
  data () {
    return {
      movieList: []
    }
  },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key=3501a4de928092aef0a6315cef680fcf')
      .then(res => (this.movieList = res.data.results))
  }
}
</script>

<style scoped>
  .container {
    margin: 0 80px;
  }
</style>
