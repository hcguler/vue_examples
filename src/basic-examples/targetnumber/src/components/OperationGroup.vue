<template>
    <div>
        <button :class="getClass(sum)" @click="operationChange('+')">+</button>
        <button :class="getClass(sub)" @click="operationChange('-')">-</button>
        <button :class="getClass(divide)" @click="operationChange('/')">/</button>
        <button :class="getClass(mul)" @click="operationChange('x')">x</button>
    </div>
</template>

<script>
    export default {
        name: 'OperationGroup',
        data: function () {
            return {
                activeOperation: '',
                sum: false,
                sub: false,
                mul: false,
                divide: false,
            }
        },
        methods: {
            getClass: function (condition) {
                return condition ? 'enabled_stated' : 'disabled_stated'
            },
            operationChange: function (operation) {
                this.activeOperation = operation;
                this.$emit('operationSelected', this.activeOperation)
                if (this.activeOperation == '+') {
                    this.sum = true;
                    this.sub = false;
                    this.mul = false;
                    this.divide = false;
                } else if (this.activeOperation == '-') {
                    this.sum = false;
                    this.sub = true;
                    this.mul = false;
                    this.divide = false;
                } else if (this.activeOperation == '/') {
                    this.sum = false;
                    this.sub = false;
                    this.mul = false;
                    this.divide = true;
                } else if (this.activeOperation == 'x') {
                    this.sum = false;
                    this.sub = false;
                    this.mul = true;
                    this.divide = false;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .disabled_stated {
        background-color: lightgreen;
    }

    .enabled_stated {
        background-color: green;
    }
</style>
