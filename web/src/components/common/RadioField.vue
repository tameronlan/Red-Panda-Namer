<template>
    <div class="form__col" :style=wrapperStyle>
        <div
            class="form__label"
            :class="{'form__label_error' : withError}"
        >
            {{ item.title }}
<!--            <span v-if="withError" class="form__label-attention">!</span>-->
        </div>
        <div class="form__radios">
            <template v-for="value in item.values">
                <div class="form__radio">
                    <input type="radio" :id=value.value :value=value.value v-model="picked">
                    <label :for=value.value>{{value.title}}</label>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
import {validateField} from "@/api/config";

export default {
    name: "RadioField",
    props: ["item", "allWeight"],
    data(){
        return {
            picked: null
        }
    },
    created() {
        this.item.values.forEach(valueItem => {
            if (valueItem.isChosen){
                this.picked = valueItem.value
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
        ...mapMutations(["updateFieldItem"])
    },
    watch: {
        picked(newValue){
            this.item.values.forEach(valueItem => {
                valueItem.isChosen = valueItem.value === newValue
            })

            this.updateFieldItem(this.item)
        }
    }
}
</script>