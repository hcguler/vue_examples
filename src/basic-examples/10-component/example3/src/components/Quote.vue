<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: #8d4288"><slot name="subtitle">The Subtitle</slot></span>
        </div>
        <hr>
        <div class="title">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    div {
        border: 1px solid #2c3e50;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2 {
        color: red;
    }
    .title {
        font-style: italic;
    }
</style>
