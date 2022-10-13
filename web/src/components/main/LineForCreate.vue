<template>
    <div
        class="app-stage-menu-item"
        :class="{
            'app-stage-menu-item_active': config.id === currentConfig.id,
            'app-stage-menu-item_alarm': !validateConfig(config) && showValidation
        }"
        :key="config.id"
    >
        <div class="app-stage-menu-item__actions">
            <div class="app-stage-menu-item__action" @click="copyAction">
                <copy-icon/>
            </div>
            <div class="app-stage-menu-item__action" @click="deleteAction">
                <minus-icon/>
            </div>
        </div>

        <div class="app-stage-menu-item__middle" @click="editAction">
            <div class="app-stage-menu-item__icon">
                <menu-icon-frame/>
            </div>

            <div class="app-stage-menu-item__title">
                {{name}}
            </div>

            <div class="app-stage-menu-item__count">
                x
                {{count}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex"
    import {getCountFromConfig, getNameFromConfig, validateConfig} from "@/api/config";
    import {copyObject} from "@/lib/copyFunction";
    import MenuIconFrame from "@/assets/menu_icon_frame.svg";
    import MinusIcon from "@/assets/minus_icon.svg";
    import CopyIcon from "@/assets/copy_icon.svg";

    export default {
        components: {MenuIconFrame, MinusIcon, CopyIcon},
        name: "LineForCreate",
        props: ["config", "part"],
        computed: {
            name(){
                return getNameFromConfig(this.pattern, this.config)
            },
            count(){
                return getCountFromConfig(this.config)
            },
            ...mapState("frames", ["pattern"]),
            ...mapState(["currentConfig", "showValidation"])
        },
        methods: {
            validateConfig,
            copyAction(){
                this.appendListForCreate({
                    part: this.part,
                    config: copyObject(this.config)
                })
            },
            deleteAction(){
                this.removeFromListForCreate({
                    id: this.config.id,
                    part: this.part
                })
            },
            editAction(){
                this.setCurrentConfig(this.config)
            },
            ...mapMutations([
                "removeFromListForCreate",
                "setCurrentConfig",
                "appendListForCreate"
            ])
        }
    }
</script>