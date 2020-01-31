<template>
  <div>
    <button class="disabled_state ? disabled_stated : enabled_stated"> {{ number_of_question }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    number_of_question: String,
    disabled_state: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .disabled_stated {
    background-color: lightblue;
  }
  .enabled_stated {
    background-color: blue;
  }
</style>
