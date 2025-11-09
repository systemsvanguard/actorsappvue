// src/components/NavigationBar.vue
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <router-link class="navbar-brand" to="/">⚡ ActorsApp</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">
                        <i class="me-1 bi bi-house-door"></i> Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/list">
                        <i class="me-1 bi bi-list-ol"></i> List
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">
                        <i class="me-1 bi bi-info-lg"></i> About
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/resources">
                        <i class="me-1 bi bi-book"></i> Resources
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">
                        <i class="me-1 bi bi-telephone"></i> Contact
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
// Component logic here
</script>
