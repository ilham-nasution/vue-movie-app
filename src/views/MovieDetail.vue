<template>
  <div>
    <h1 class="text-center">{{movie.title}}</h1>
    <div class="d-flex justify-content-center">
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path" :alt="movie.title">
    </div>
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

<style scoped>
  img {
    width: 60%;
    border-radius: 4px;
    box-shadow: 1px 1px 4px 2px rgb(212, 212, 212);
  }
</style>
