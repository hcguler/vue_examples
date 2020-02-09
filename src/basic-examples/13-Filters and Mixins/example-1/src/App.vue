<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filter and Mixins</h1>
                <p>{{ text | toUpperCase | toLowerCase}}</p>
                <hr>
                <button @click="fruits.push('Barries')"> Add new Item</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruit" v-bind:key="fruit">
                        {{ fruit }}
                    </li>
                </ul>

                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>

    import List from './List.vue'
    import {fruitMixin} from './fruitMixin.js'

    export default {
        data() {
            return {
                text: 'Hello There!',
            }
        },
        filters: {
            toUpperCase: function (value) {
                return value.toUpperCase();
            }
        },
        components: {
            'app-list': List
        },
        mixins: [fruitMixin]
    }
</script>

<style>
</style>
