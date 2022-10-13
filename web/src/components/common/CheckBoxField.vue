<template>
    <div class="form__col" :style=wrapperStyle>
        <div
            class="form__label"
            :class="{'form__label_error' : withError}"
        >
            {{ item.title }}
<!--            <span v-if="withError" class="form__label-attention">!</span>-->
        </div>
        <div class="form__checkboxes">
            <template v-for="value in item.values">
                <div class="form__checkbox">
                    <input
                        type="checkbox"
                        :id=value.value
                        :value=value.value
                        v-model="checked"
                    >
                    <label :for=value.value>{{ value.title }}</label>
                </div>
            </template>

            <div
                v-if="item.withAllVar"
                class="form__checkbox"
                :class="{'form__checkbox_checked': isAllChecked}"
                @click="clickAll"
            >
                <label>All</label>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex"
    import {validateField} from "@/api/config";

    export default {
        name: "CheckBoxField",
        props: ["item", "allWeight"],
        data(){
            return {
                checked: []
            }
        },
        created() {
            let checkedFromInit = []

            this.item.values.forEach(valueItem => {
                if (valueItem.isChosen) {
                    checkedFromInit.push(valueItem.value)
                }
            })

            if (checkedFromInit.length > 0) {
                this.checked = checkedFromInit
            }
        },
        computed:{
            isAllChecked(){
                let isAllChecked = true

                this.item.values.forEach(valueItem => {
                    if (!valueItem.isChosen) {
                        isAllChecked = false
                    }
                })

                return isAllChecked
            },
            withAllVariant(){
                return this.item.withAllVar;
            },
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
            clickAll(){
                if (this.isAllChecked) {
                    this.checked = []
                } else {
                    this.item.values.forEach(valueModel => {
                        this.checked.push(valueModel.value)
                    })
                }
            },
            ...mapMutations(["updateFieldItem"])
        },
        watch: {
            checked(newValue){
                this.item.values.forEach(valueItem => {
                    valueItem.isChosen = newValue.indexOf(valueItem.value) !== -1
                })

                this.updateFieldItem(this.item)
            }
        }
    }
</script>