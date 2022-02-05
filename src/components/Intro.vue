<template>
<div class="min-h-screen">
    <div class="container mx-auto mt-20 md:flex md:flex-row md:gap-10">
        <Card />
        <SmallCarousel />
    </div>
    <div class="container mx-auto mt-6">
        <Skills />
    </div>
</div>
    
</template>

<script>

import Card from './Card.vue'
import SmallCarousel from './SmallCarousel.vue'
import Skills from './Skills.vue'

export default{
    name: "Intro",
    data(){
        return{

        }
    },
    components: {
        Card,
        SmallCarousel,
        Skills
    }
}

</script>