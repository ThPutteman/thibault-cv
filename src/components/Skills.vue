<template>
    <div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 sm:p-0 gap-4 items-start mx-auto md:mx-0 mb-10 md:mb-16">
        <div v-for="skill in skills" :key="skill" class="bg-stone-200 rounded-lg drop-shadow-md flex flex-col p-4 items-center" @mouseover="skill.show = true" @mouseleave="skill.show=false" @click="skill.show=!skill.show">
            <img :src="skill.icon" :alt="skill.name" class="h-32 w-32 object-fit mb-4">
            <transition>
                <font-awesome-icon :icon="['fas', 'arrow-down']" v-if="!skill.show"/>
            </transition>
            <transition name="slide-down">
                <div class="container" v-if="skill.show">
                    <div class="h-4 bg-blue-900 rounded-md mb-4" :style="{width: skill.level}"></div>
                    <p>{{skill.description}}</p>
                </div>
            </transition>
            
        </div>
    </div>
</template>

<script>

export default{
    name: 'Skills',
    data(){
        return{
            skills: [
                {name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/919/919827.png', level: '100%', show: false, description: "HTML ligt natuurlijk nog steeds aan de basis van alle webdevelopment en is ook een skill die ik zeer goed beheer."},
                {name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/919/919826.png', level: '100%', show: false, description: "Net als HTML ligt CSS aan de basis van webdevelopment, en is een skill die ik zeer goed beheer (ook SCSS)."},
                {name: 'PHP', icon: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/php-512.png', level: '75%', show: false, description: "PHP is een taal die ik in twee vakken gezien heb in mijn opleiding, en waar ik zelf ook verder in gegaan ben (uitbereiding van kennis OOP via Udemy courses)."},
                {name: 'Vue', icon: 'https://cdn.iconscout.com/icon/free/png-256/vue-282497.png', level: '75%', show: false, description: "Vue.js is een framework waar ik voor mijn stage over geleerd heb en ook het framework waarin dit gemaakt is."},
                {name: 'WordPress', icon: 'https://image.flaticon.com/icons/png/512/174/174881.png', level: '75%', show: false, description: "WordPress is het CMS dat ik tijdens mijn opleiding gezien heb en ook waarin ik bij Antenna vooral gewerkt heb (heel af en toe ook CraftCMS)."},
                {name: 'TailwindCSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png', level: '55%', show: false, description: "TailwindCSS is een CSS framework dat ik voor dit project voor de eerste keer geprobeerd heb. De documentatie van tailwind is heel duidelijk en heeft er dus voor gezorgd dat het voor dit project vlot ging qua styling."},
                {name: 'Wagtail CMS', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/wagtail/wagtail.png', level: '50%', show: false, description: "Wagtail CMS is het CMS waar ik op mijn stage mee gewerkt heb. Voor mijn stage vast lag had ik nog nooit van dit CMS gehoord. In de twee weken tussen mijn examens en stage heb ik mij met een Wagtail course op YouTube bezig gehouden."},
            ]
        }
    },

}

</script>

<style>

.fa-arrow-down{
    fill: rgb(30 58 138) !important;
}

.slide-down-enter-active,
  .slide-down-leave-active{
    transition: opacity .25s, transform .25s;
  }

  .slide-down-enter-from,
  .slide-down-leave-to{
    opacity: 0;
    transform: translateY(40%);
  }

</style>