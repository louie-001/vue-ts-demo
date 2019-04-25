/**
* user page
* @author louie
* @date created in 2019-4-25 11:12
*/
<template>
    <div>
        name: <input title="name" v-model="name"/><br/>
        age: <input title="age" type="number" v-model="age"/><br/>

        <hello-world v-if="showHello" :name="name" :age="age"/>
        <button type="button" @click="onShowHelloClick">Show Hello</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from "../components/HelloWorld.vue";

@Component({
    components: {
        HelloWorld
    }
})
export default class User extends Vue {
    showHello = false;
    name: string = '';
    age: number = 0;

    onShowHelloClick() {
        this.showHello = !this.showHello
    }
 }
</script>

<style scoped>

</style>
