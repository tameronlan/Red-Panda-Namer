<template>
    <div>
        <div class="app-stage-example__name">
            {{name}}
        </div>

        <div class="app-stage-example-image" v-for="size in sizes">
            <div class="app-stage-example-image__inner" :style="{paddingBottom: `${size.height * 100 / size.width}%`}"></div>
            <div class="app-stage-example-image__icon">
                <image-icon/>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import { getNameFromConfig, getSizesFromConfig } from "@/api/config";
    import ImageIcon from "@/assets/image_icon.svg";

    export default {
        name: "CreateFramesExample",
        components: {ImageIcon},
        mounted() {
            console.log(this.pattern)
        },
        computed: {
            name(){
                return getNameFromConfig(this.pattern, this.currentConfig)
            },
            sizes(){
                return getSizesFromConfig(this.currentConfig)
            },
            ...mapState(["currentConfig"]),
            ...mapState("frames", ["pattern"])
        },
    }
</script>
