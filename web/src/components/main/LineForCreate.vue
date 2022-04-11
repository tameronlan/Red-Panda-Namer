<template>
    <div class="line-for-create" :key="config.updated">
        <div class="line-for-create__name">
            {{name}}
        </div>
        <div class="line-for-create__count">x{{count}}</div>
        <div class="line-for-create__actions">
            <span class="link" @click="copyAction">copy</span> /
            <span class="link" @click="editAction">edit</span> /
            <span class="link" @click="deleteAction">delete</span>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex"
    import {getCountFromConfig, getNameFromConfig, getPatternString} from "@/api/config";
    import {MODE_EDIT} from "@/consts";
    import {copyObject} from "@/lib/copyFunction";

    export default {
        name: "LineForCreate",
        props: ["config"],
        computed: {
            name(){
                return getNameFromConfig(this.currentPatternString, this.config)
            },
            count(){
                return getCountFromConfig(this.config)
            },
            ...mapState(["currentPatternString"])
        },
        methods: {
            copyAction(){
                this.appendListForCreate(copyObject(this.config))
            },
            deleteAction(){
                this.removeFromListForCreate(this.config.id)

                this.$toasted.show("Configuration removed")
            },
            editAction(){
                this.removeFromListForCreate(this.config.id)
                this.setCurrentConfigId(this.config.id)
                this.setCurrentConfig(this.config)
                this.changeMode(MODE_EDIT)
            },
            ...mapMutations([
                "removeFromListForCreate",
                "changeMode",
                "setCurrentConfigId",
                "setCurrentConfig",
                "appendListForCreate"
            ])
        },
        watch: {
            name(){
                console.log("name_changed")
            }
        }
    }
</script>