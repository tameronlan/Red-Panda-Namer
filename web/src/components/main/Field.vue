<template>
    <div class="form__row">
        <template v-for="fieldItem in field">
            <comment
                ref="fieldComponent"
                :is="getFieldComponent(fieldItem)"
                :item="fieldItem"
                :allWeight="allWeight"
                @changeName="$emit('changeName')"
            ></comment>
        </template>
    </div>
</template>

<script>
import SelectField from "@/components/common/SelectField";
import {FIELD_CHECKBOX, FIELD_INPUT, FIELD_NUMBER, FIELD_RADIO, FIELD_SELECT} from "@/consts";
import InputField from "@/components/common/InputField";
import CheckBoxField from "@/components/common/CheckBoxField";
import NumberField from "@/components/common/NumberField";
import RadioField from "@/components/common/RadioField";

export default {
    name: "Field",
    props: ["field"],
    computed: {
        allWeight(){
            let weightAll = 100

            if (this.field !== undefined) {
                weightAll = 0

                this.field.forEach(col => {
                    weightAll += col.weight ? col.weight : 100
                })
            }

            return weightAll
        }
    },
    methods: {
        getFieldComponent(col){
            switch (col.type) {
                case FIELD_INPUT:
                    return InputField
                case FIELD_CHECKBOX:
                    return CheckBoxField
                case FIELD_SELECT:
                    return SelectField
                case FIELD_NUMBER:
                    return NumberField
                case FIELD_RADIO:
                    return RadioField
            }
        }
    }
}
</script>