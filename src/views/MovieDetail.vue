<template>
  <div>
    <h1>{{movie.title}}</h1>
    <img width="100%" :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path" :alt="movie.title">
    <h5 class="mt-5">Overview</h5>
    <p>{{movie.overview}}</p>
    <h5>Release Date</h5>
    <p>{{movie.release_date}}</p>
    <h5>Genres</h5>
    <div class="d-flex">
      <p class="mr-2" v-for="genre in movie.genres" :key="genre.id">
        {{genre.name}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieDetail',
  data () {
    return {
      movie: {},
      movieId: this.$route.params.id
    }
  },
  mounted () {
    axios
      .get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=3501a4de928092aef0a6315cef680fcf`)
      .then(res => (this.movie = res.data))
  }
}
</script>
