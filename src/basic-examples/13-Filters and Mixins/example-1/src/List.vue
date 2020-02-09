<template>
    <div>
        <h1>Filter and Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruit" v-bind:key="fruit">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from "./fruitMixin.js";

    export default {
       mixins: [fruitMixin]
    }
</script>

<style>
</style>
