<template>
    <div class="app-stage-example">
        <div class="app-stage-example__title" ref="exampleTitle">Example</div>
        <div class="app-stage-example__inner" :style="{top: `${topTitleHeight}px`}">
            <template v-if="currentPartModel.type === PART_CREATE_FRAMES">
                <create-frames-example/>
            </template>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    import {PART_CREATE_FRAMES} from "@/consts";
    import CreateFramesExample from "@/components/examples/CreateFramesExample";

    export default {
        name: "Example",
        components: {CreateFramesExample},
        data(){
            return {
                PART_CREATE_FRAMES,
                topTitleHeight: 0
            }
        },
        mounted() {
            this.topTitleHeight = this.$refs.exampleTitle.getBoundingClientRect().height
        },
        computed: {
            ...mapGetters(["currentPartModel"])
        }
    }
</script>