<template>
    <div class="py-5 px-4 mx-4 md:mx-0 bg-stone-200 md:basis-1/3 rounded-lg drop-shadow-md">
        <h1 class="text-blue-900 text-2xl font-bold">Dingen die ik leuk vind in mijn vrije tijd</h1>
        <carousel :items-to-show="1.1" :wrap-around="true">
            <slide v-for="slide in slides" :key="slide">
                <img :src="slide" alt="" class="object-cover h-50 w-50">
            </slide>
            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>


<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default{
    name: 'SmallCarousel',
    data(){
        return{
            slides: [
               ("https://blog.udemy.com/wp-content/uploads/2020/02/default-meta-image.png"),
               ("https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/master/pass/books.jpg"),
               ("https://cdn.akamai.steamstatic.com/steam/apps/1449850/capsule_616x353.jpg?t=1642554034"),
            ]
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>

<style>
.carousel__prev,
.carousel__next{
    color: white;
    background-color: rgb(30,58,138) !important;
    transform: translate(0);
    border: 2px solid white;
}
</style>
