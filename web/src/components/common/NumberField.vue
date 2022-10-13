<template>
    <div class="form__col" :style=wrapperStyle>
        <label
            class="form__label"
            :for=item.key
            :class="{'form__label_error' : withError}"
        >
            {{item.title}}
<!--            <span v-if="withError" class="form__label-attention">!</span>-->
        </label>
        <input
            class="form__input"
            v-model="value"
            type="number"
            :id=item.key
            :max=item.max
            :min=item.min
        />
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"

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

            if (number < this.item.min){
                this.value = this.item.min
            }

            if (number > this.item.max){
                this.value = this.item.max
            }
        },
        ...mapMutations(["updateFieldItem"]),
    },
    watch: {
        value(newVal){
            this.item.value = newVal

            this.updateFieldItem(this.item)
        }
    }
}
</script>