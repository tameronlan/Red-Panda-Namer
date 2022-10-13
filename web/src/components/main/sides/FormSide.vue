<template>
    <div class="app-stage-form">
        <div class="app-stage-form__title" ref="formTitle">{{ currentPartModel.title }}</div>
        <div class="app-stage-form__inner" :style="{top: `${topTitleHeight}px`}">
            <template v-if="currentPartModel.type === PART_CREATE_FRAMES">
                <CreateFramesForm/>
            </template>
        </div>
        <div class="app-stage-form__mover"></div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from "vuex"
    import CreateFramesForm from "@/components/forms/CreateFramesForm";
    import {PART_CREATE_FRAMES} from "@/consts";

    export default {
        name: "FormSide",
        components: {CreateFramesForm},
        data(){
            return {
                PART_CREATE_FRAMES,
                topTitleHeight: 0
            }
        },
        mounted() {
            this.topTitleHeight = this.$refs.formTitle.getBoundingClientRect().height
        },
        computed: {
            ...mapState(["currentPart"]),
            ...mapGetters(["currentPartModel"])
        }
    }
</script>