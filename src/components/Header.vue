<template>
    <div class="bg-blue-900 fixed top-0 h-22 w-screen z-10">
        <div class="container flex flex-row justify-between items-center py-2 px-4 md:px-0">
            <img src="../assets/thibault.png" :alt="name" class="w-10 h-10 rounded-full object-cover">
            <ul class="flex flex-row gap-6">
                <li><router-link to="/" class="text-white basis-1/3 md:basis-1/4 hover:underline">Intro</router-link></li>
                <li><router-link to="/experience" class="text-white basis-1/3 md:basis-1/4 hover:underline">Experience</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default{
    name: 'Header',
    data(){
        return{
            
        }
    }
}

</script>

<style>
.router-link-active{
    background-color: #fff;
    color: rgb(30 58 138) !important;
    padding: .5rem;
}
</style>