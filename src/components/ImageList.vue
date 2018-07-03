<template>
<div>
  <div v-if='isLoggedIn' class='image-container'>
      <img v-for='image in allimages' :key='image.id'  :src="image.link" > 
  </div>
  <h2 v-else> Please login to get started</h2>
</div>
</template>
<script>
import {mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',
  methods: {
    ...mapActions([
      'fetchImages'
    ])
  },
  computed: {
    ...mapGetters([
      'allimages',
      'isLoggedIn'
    ])
  },
  created(){
    this.fetchImages()
  }
}
</script>
<style scoped>
  .image-container{
    display: grid;
    column-gap: 0;
    grid-template-columns: repeat(3, 1fr)
  }
  img{
    max-width: 100%;
    padding: 5px;
  }
</style>
