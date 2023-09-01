<script setup>

import {inject} from "vue";
import Header from "../components/Header.vue";

const singlePost = inject('singlePost')

</script>

<template>
  <Header/>
    <div class="flex flex-col space-y-6">
      <img :src="singlePost.img" alt="">
        <h1>{{singlePost.title}}</h1>
        <p>{{singlePost.content}}</p>


    </div>
</template>

<style scoped>

</style>