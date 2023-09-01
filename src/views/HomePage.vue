<script setup>

import {RouterLink} from "vue-router";
import {inject} from "vue";
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";

const posts = inject('posts')


</script>

<template>
  <Header/>
  <article>
    <section class="grid grid-cols-3 gap-4">
      <div v-for="post in posts" :key="post.id" class="flex flex-col space-y-4">
        <img class="rounded" :src="post.img" alt="">
        <h2 class="text-2xl font-bold ">{{post.title}}</h2>
        <p>{{post.short}}</p>
        <RouterLink :to="`/post/${post.id}`"><Button class="w-5/12"></Button></RouterLink>
      </div>
    </section>
  </article>
</template>

<style scoped>

</style>