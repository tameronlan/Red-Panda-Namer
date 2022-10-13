<template>
    <div class="form" :key="currentConfig.id">
        <Field
            v-for="field in currentConfig.rows"
            :field="field"
            @changeValue="changeValue"
        ></Field>
    </div>
</template>

<script>
import Field from "@/components/main/Field";
import { mapState} from "vuex";

export default {
    name: "CreateFramesForm",
    components: {Field},
    computed: {
        ...mapState([ "currentConfig"])
    },
    methods: {
        changeValue(){
            console.log()
        }
    }
}
</script>