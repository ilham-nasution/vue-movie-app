<template>
  <div>
    <b-row cols="2" cols-md="4">
      <b-col v-for="movie in movieList" :key="movie.id">
        <Movie :movie="movie" />
      </b-col>
    </b-row>
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
