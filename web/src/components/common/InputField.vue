<template>
    <div class="form__col" :style=wrapperStyle>
        <label
            class="form__label"
            :for=item.key
            :class="{'form__label_error' : withError}"
        >
            {{ item.title }}
            <span v-if="withError" class="form__label-attention">!</span>
        </label>
        <input
            class="form__input"
            type="text"
            :id=item.key
            :placeholder=item.placeholder
            :value="value"
            @input="value=$event.target.value">
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
    name: "InputField",
    props: ["item", "allWeight"],
    created() {
        if(this.item.value) {
            this.value = this.item.value
        }
    },
    data(){
        return {
            value: null
        }
    },
    computed:{
        withError(){
            return this.showValidation && (this.value === null || this.value === "")
        },
        weight(){
            return this.item.weight ? this.item.weight : 100
        },
        wrapperStyle(){
            let width = `${this.weight * 100/this.allWeight}%`

            return {
                width: width,
                maxWidth: width
            }
        },
        ...mapState(["showValidation"])
    },
    methods: {
        ...mapActions(["updateFieldItem"])
    },
    watch: {
        value(newVal){
            this.item.value = newVal

            this.updateFieldItem(this.item)

            this.$emit("changeName")
        }
    }
}
</script>