<template>
    <div class="bg-blue-900 fixed top-0 h-24 w-screen">
        <div class="container flex flex-row justify-between items-center mt-4 px-4 md:px-0">
            <img src="../assets/thibault.png" :alt="name" class="w-16 h-16 rounded-full object-cover">
            <ul class="flex flex-row gap-4">
                <li><a :href="'#' + link1" class="text-white basis-1/3 md:basis-1/4 hover:underline" :class="{activeNav : active == link1}" @click="changeActive" :id="link1">{{capitalize(link1)}}</a></li>
                <li><a :href="'#' + link2" class="text-white basis-1/3 md:basis-1/4 hover:underline" :class="{activeNav : active == link2}" @click="changeActive" :id="link2">{{capitalize(link2)}}</a></li>
                <li><a :href="'#' + link3" class="text-white basis-1/3 md:basis-1/4 hover:underline" :class="{activeNav : active == link3}" @click="changeActive" :id="link3">{{capitalize(link3)}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default{
    name: 'Header',
    data(){
        return{
            active: 0
        }
    },
    props: {
        link1: String,
        link2: String,
        link3: String,
    }, 
    methods: {
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        changeActive(event) {
            this.active = event.currentTarget.id
            console.log(this.active)
        }
    }
}

</script>

<style>
.activeNav{
    background-color: #fff;
    color: rgb(30 58 138) !important;
    padding: .5rem;
}
</style>