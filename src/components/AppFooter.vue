// src/components/AppFooter.vue
<template>
    <footer class="bg-light text-dark py-4 mt-5">
        <div class="container text-center">
            Copyright © 2023 - {{ currentYear }} <strong><span class="fs-4 text-primary">Ryan
                    Hunter</span></strong> |
            All rights reserved.
            <br />Yet another coding practice portfolio site by <a href="https://ryanhunter.ca/"
                class="link_no_underline">Ryan Hunter</a> | GitHub handle
            <span class="fw-bold fst-italic">
                <a href="https://github.com/systemsvanguard" class="link_no_underline">SystemsVanguard
                </a>
            </span>.
            <br />Built using React, Typescript, JSON, Bootstrap v5, Bootstrap Icons, Google Fonts, CSS, & and lots of
            love <span class="text-danger">&#9825; </span> <span class="text-danger">&#9829; </span> <span
                class="text-danger">&#9825; </span> .
            <br />
        </div>
        <div class="container text-center">
            <a class="link_no_underline mx-2" href="/">Home</a> |
            <a class="link_no_underline mx-2" href="#">List</a> |

            <a class="link_no_underline mx-2" href="/about">About</a> |
            <a class="link_no_underline mx-2" href="/resources">Resources</a> |
            <a class="link_no_underline mx-2" href="/contact">Contact</a>
            <br />
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
