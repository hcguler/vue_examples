<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='quote'">Quote</button>
                <button @click="selectedComponent='author'">Author</button>
                <button @click="selectedComponent='new-quote'">New</button>
                <hr>
                <p>
                    {{ selectedComponent }}
                </p>
                <component :is="selectedComponent">
                    <p>Default Content</p>
                </component>
               <!-- <quote>
                    <h2 slot="title">{{quoteTitle}}</h2>
                    <p slot="content">A Wonderful Quote</p>
                </quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import NewQuote from './components/NewQuote.vue'

    export default {
        name: 'app',
        data: function () {
            return {
                quoteTitle: 'The Quote Header',
                selectedComponent: 'quote'
            }
        },
        components: {
            Quote,
            Author,
            NewQuote
        }
    }
</script>

<style>
    @import '~bootstrap/dist/css/bootstrap.css';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>

