<script setup>
import {RouterLink} from "vue-router";

import {inject} from "vue";
const categories = inject('categories')

</script>

<template>
 <nav class="">
   <ul class="flex space-x-4 items-center">
     <li><RouterLink to="/">হোম</RouterLink></li>
     <li v-for="category in categories" :key="category.id"><RouterLink :to="`/category/${category.id}`">{{category.name}}</RouterLink></li>
   </ul>
 </nav>
</template>

<style scoped>

</style>