<template>
  <div>
    <h1>Now Playing</h1>
    <MovieList :movieList="movieList" />
  </div>
</template>

<script>
import axios from 'axios'

import MovieList from '../components/MovieList'

export default {
  name: 'Home',
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
