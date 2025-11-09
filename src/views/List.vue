// src/views/List.vue
<template>
    <div class="container py-2">
        <h1 class='my-1 text-primary'>HTML List</h1>
        <p>Swab barque interloper chantey doubloon starboard grog black jack.</p>

        <h3>Actors from 'Thunderbolts' Movie</h3>
        <h5>Reverse Ordering by ID</h5>
        <ul>
            <li v-for="actor in thunderbolts" :key="actor.id">
                {{ actor.first_name }} {{ actor.last_name }} ~
                <a :href="actor.wiki" target="_blank">Wiki</a>
            </li>
        </ul>
        <br />

        <p>Crack Jennys tea cup ballast Blimey lee snow crow's nest rutters.</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import thunderboltsData from '../data/thunderbolts.json'
import type { ThunderboltActor } from '../types/Actor'

const thunderbolts = ref<ThunderboltActor[]>([])

onMounted(() => {
    thunderbolts.value = [...thunderboltsData.thunderbolts].reverse()
    // thunderbolts.value = [...thunderboltsData.thunderbolts]
})
</script>
