<template>
    <div id="app">
        <question-number disabled_state="false" number_of_question="5"></question-number>
        <operation-group @operationSelected="operation_1 = $event"></operation-group>
        {{ "test"+operation_1 }}
    </div>
</template>

<script>
    import QuestionNumber from './components/QuestionNumber.vue'
    import OperationGroup from './components/OperationGroup.vue'

    export default {
        name: 'app',
        data: function () {
            return {
                operation_1:'',
                number_of_question_6_arr: [15, 20, 25, 30, 40, 50, 60, 75, 80, 90]
            }
        },
        components: {
            QuestionNumber,
            OperationGroup
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
