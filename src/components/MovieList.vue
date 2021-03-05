<template>
  <div>
    <b-row cols="2" cols-md="4">
      <b-col v-for="movie in movieList" :key="movie.id">
        <MovieCard :movie="movie" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MovieCard from './MovieCard'

export default {
  name: 'MovieList',
  props: {
    movieList: Array
  },
  components: {
    MovieCard
  }
}
</script>
