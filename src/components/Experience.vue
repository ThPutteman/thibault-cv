<template>
    <div class="h-screen">
        <div class="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div v-for="experience in experiences" :key="experience" class="bg-stone-200 rounded-lg flex flex-col p-4">
                <h1 class="text-3xl text-blue-900">{{experience.name}}</h1>
                <img :src="experience.logo" :alt="experience.name" class="w-64 h-30 object-fit my-4">
                <p class="mb-4">{{experience.description}}</p>
                <a :href="experience.url" class="hover:underline text-blue-900" target="__blank">Bekijk hun site</a>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: "Experience",
    data(){
        return{
            experiences : [
                {name: 'code-on', url: 'https://code-on.eu', description: 'Bij code-on heb ik stage gelopen voor 6 weken (in mijn opleiding waren de stages nog 6 weken, is ondertussen de gewoonlijke 3 maanden geworden). Tijdens mijn stage heb ik met het Wagtail CMS en een beetje Vue gewerkt. Wagtail CMS is een CMS dat in django werkt en ik geleerd heb via een YouTube course. Hier heb ik het merendeel van mijn tijd aan één site gewerkt waar ik het design van gekregen had.', logo: 'https://www.reclamebureau-info.be/cache/e/d/3/c/d/ed3cd2fba5ef21142a417ffedc2029ea52608128.webp'},
                {name: 'Antenna', url: 'https://weareantenna.be', description: 'Bij Antenna heb ik ongeveer 3 maand gewerkt als junior webdeveloper. Mijn taak was voornamelijk aanpassingen maken aan bestaande WordPress sites en één maal per maand alle nodige plugins onderhouden en updaten. Een paar keer heb ik ook in Craft CMS een aanpassing moeten doen aan een bestaande site.', logo: 'https://weareantenna.be/images/antenna-logo.png'},
                
            ]
        }
    }
}

</script>