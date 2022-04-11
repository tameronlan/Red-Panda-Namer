<template>
    <div class="form__col" :style=wrapperStyle>
        <label
            class="form__label"
            :class="{'form__label_error' : withError}"
            :for=item.key
        >
            {{ item.title }}
            <span v-if="withError" class="form__label-attention">!</span>
        </label>
        <select name="selector" :id=item.key required v-model="selected">
            <template v-if="item.placeholder.length > 0">
                <option value="" selected hidden>{{ item.placeholder }}</option>
            </template>
            <option v-for="value in item.values" :value=value.value>{{value.title}}</option>
        </select>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
import {validateField} from "@/api/config";

export default {
    name: "SelectField",
    props: ["item", "allWeight"],
    data(){
        return {
            selected: null
        }
    },
    created() {
        this.item.values.forEach(valueItem => {
            if (valueItem.isChosen){
                this.selected = valueItem.value
            }
        })
    },
    computed:{
        withError(){
            return this.showValidation && !validateField(this.item)
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
        selected(newValue, oldValue){
            this.item.values.forEach(valueItem => {
                valueItem.isChosen = valueItem.value === newValue
            })

            this.updateFieldItem(this.item)

            this.$emit("changeName")
        }
    }
}
</script>