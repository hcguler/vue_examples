export const fruitMixin = {
    data() {
        return {
            filterText: '',
            fruits: ['Apple', 'Banana', 'Mango', 'Melon']
        }
    },
    computed: {
        filteredFruit() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
}