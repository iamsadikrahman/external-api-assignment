<script setup>
import {RouterView} from "vue-router";

import {onMounted, provide, ref} from "vue";
import axios from "axios";


// Get Categories And Provide
const categories = ref([]);
const getCategories = async () => {
  const categoriesUrl = "https://basic-blog.teamrabbil.com/api/post-categories"
  const res = await axios.get(categoriesUrl)
  categories.value = res.data
}
provide('categories', categories)


// Get Posts And Provide

const posts = ref([])

const getPosts = async ()=> {
  const postsUrl = 'https://basic-blog.teamrabbil.com/api/post-newest'
  const res = await axios.get(postsUrl)
  posts.value = res.data
}

provide('posts', posts)


// Get Single Post And Provide

const singlePost = ref([])

const getSinglePost = async () => {
  const postsUrl = "https://basic-blog.teamrabbil.com/api/post-details/53"
  const res = await axios.get(postsUrl)
  singlePost.value = res.data['postDetails']
}

provide('singlePost', singlePost)




onMounted(()=>{
  getCategories();
  getPosts()
  getSinglePost()
})


</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
