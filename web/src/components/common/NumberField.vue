<template>
    <div class="form__col" :style=wrapperStyle>
        <label
            class="form__label"
            :for=item.key
            :class="{'form__label_error' : withError}"
        >
            {{item.title}}
            <span v-if="withError" class="form__label-attention">!</span>
        </label>
        <input
            class="form__input"
            :value="value"
            @input="value=$event.target.value"
            type="number"
            :id=item.key
            :max=item.max
            :min=item.min
        />
    </div>
</template>

<script>
import {mapMutations, mapActions, mapState} from "vuex"
import {updateField, validateField} from "@/api/config";

export default {
    name: "NumberField",
    props: ["item", "allWeight"],
    data(){
        return {
            value: null
        }
    },
    created() {
        if(this.item.value) {
            this.value = this.item.value
        } else if(this.item.defaultValue){
            this.value = this.item.defaultValue
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
        changeNumber(number){
            number = Number(number)

            console.log(number < this.item.min)

            if (number < this.item.min){
                this.value = this.item.min
            }

            if (number > this.item.max){
                this.value = this.item.max
            }
        },
        ...mapActions(["updateFieldItem"]),
        ...mapMutations(["setCurrentConfig"]),
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