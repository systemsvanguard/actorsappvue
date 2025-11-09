// src/views/Home.vue
<template>
    <div class="container py-2">
        <h1 class='my-1 text-primary'>Movie Actors App ~ Vue.js</h1>
        <p>Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits. This simple
            coding pratice/kata & portfolio app demonstrates (i) list rendering from a REST API via axios library to CSS
            Cards, (ii)
            list rendering from a local JSON file to an HTML unordered list, (iii) image rendering, and (iv) basic page
            routing. Built with
            Vue.js, TypeScript, Vite, axios, JSON, Bootstrap ver 5 CSS framework, Bootstrap Icons, 'Lorem Ipsum' filler
            text, & Google Fonts. This same app is
            also available in <a href="actorsappreact.ryanhunter.ca">React.js</a> and <a
                href="https://actorsappdjango.ryanhunter.ca/">Django</a>
            framework.
        </p>
        <!-- 
        actorsappvue.ryanhunter.ca
        actorsappreact.ryanhunter.ca
        actorsappdjango.ryanhunter.ca
        -->

        <h3>Popular Actors</h3>
        <h5>Reverse Ordering by ID</h5>

        <div class="row">
            <div class="col-lg-4" v-for="actor in actors" :key="actor.id" style="max-width:400px">
                <!-- Note2Self: Bootstrap is 12 column grid. | col-lg-4 for 3 columns. & col-lg-2 for 2 columns | Ensure to config the "style="width:350px" properly, for image size to look correct! -->
                <div class="card mb-4">
                    <img class="card-img-top" :alt="actor.first_name + ' ' + actor.last_name" :src="actor.picture">
                    <div class="card-body">
                        <h5 class="card-title">{{ actor.first_name }} {{ actor.last_name }}</h5>
                        <p class="card-text">
                            <span class="fw-bold">Major Movie : </span>{{ actor.major_movie }} <br />
                            <span class="fw-bold"><i class="me-1 bi bi-telephone"></i> Phone : </span>{{ actor.phone }}
                            <br />
                            <span class="fw-bold"><i class="me-1 bi bi-envelope-at"></i> Email : </span>
                            <a :href="`mailto:${actor.email}`">{{ actor.email }}</a>
                        </p>
                        <a target="_blank" :href="actor.wiki" class="btn btn-primary">
                            <i class="me-1 bi bi-wikipedia"></i> Wikipedia ...
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <p>Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl.</p>
    </div>
    <br />
    <img src='/images/site/misc_1.webp' alt="Actors REST API" class="img-fluid w-100" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Actor } from '../types/Actor'

const actors = ref<Actor[]>([])

const fetchActors = async () => {
    try {
        const response = await axios.get('https://actorsapi.ryanhunter.ca/actors')
        actors.value = response.data.reverse() // Reverse order by ID
    } catch (error) {
        console.error('Error fetching actors:', error)
    }
}

onMounted(() => {
    fetchActors()
})
</script>
