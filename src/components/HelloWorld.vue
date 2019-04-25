<template>
  <div>
    {{hello}}
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Prop({
        type: String,
        required: false,
        default: 'world'
    })
    name!: string;
    @Prop([String,Number])
    age!: number;

    helloName: string = this.name;
    helloAge: number = this.getAgeSync(this.age);

    get hello (): string {
        return `name is: ${this.name}, age is: ${this.age}`
    }

    @Watch('helloName')
    onNameChange(newVal: string, oldVal: string) {
        // do something
    }

    getAgeSync(age: number) :number {
        setTimeout(() => {}, 2000);
        return 10;
    }


}
</script>

<style scoped>

</style>
