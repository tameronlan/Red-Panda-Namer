<template>
    <div class="app-stage">
        <div class="app-stage__main">
            <MenuSide/>
            <FormSide v-if="currentPartModel !== null"/>
            <ExampleSide v-if="currentPartModel !== null"/>
        </div>

        <div class="app-stage__bottom">
            <div class="button button_primary app-stage__create-btn" @click="createAction">Create</div>
        </div>
    </div>
</template>

<script>
    import MenuSide from "@/components/main/sides/MenuSide";
    import ExampleSide from "@/components/main/sides/ExampleSide";
    import FormSide from "@/components/main/sides/FormSide";
    import {
        getCountFromConfig,
        getNameFromConfig,
        getSizesFromConfig,
        getStartVariantFromConfig,
        getAppsFromConfig,
        getMediaFromConfig,
        validateConfig
    } from "@/api/config";
    import {mapGetters, mapMutations, mapState} from "vuex"

    export default {
        name: "Stage",
        components: {FormSide, ExampleSide, MenuSide},
        methods: {
            isValidCountOfCreates(){
                let countForCreate = 0;

                for (let partType in this.listForCreate) {
                    countForCreate += this.listForCreate[partType].length
                }

                return countForCreate !== 0
            },
            isValidAllCreates(){
                let isValid = true

                for (let partType in this.listForCreate) {
                    this.listForCreate[partType].forEach(config => {
                        if (!validateConfig(config)) {
                            isValid = false
                        }
                    })
                }

                return isValid
            },
            createAction(){
                if (!this.isValidCountOfCreates()) {
                    this.setShowValidation(true)

                    this.$toasted.show("Add configuration before create")

                    return
                }

                if (!this.isValidAllCreates()) {
                    this.setShowValidation(true)

                    this.$toasted.show("Check your configurations")

                    return
                }

                let simpleData = []

                for (let partType in this.listForCreate) {
                    this.listForCreate[partType].forEach(config => {
                        let sizes = getSizesFromConfig(config)
                        let count = getCountFromConfig(config)
                        let startVariant = getStartVariantFromConfig(config)
                        let apps = getAppsFromConfig(config)
                        let medias = getMediaFromConfig(config)

                        apps.forEach(app => {
                            medias.forEach(media => {
                                sizes.forEach(size => {
                                    let names = []
                                    let {width, height} = size

                                    for(let varDelta = 0; varDelta < count; varDelta++){
                                        names.push(getNameFromConfig(this.pattern, config, {
                                            variant: +startVariant + varDelta,
                                            app: app.value,
                                            media: media.value,
                                            size
                                        }))
                                    }

                                    simpleData.push({ names, width, height })
                                })
                            })
                        })

                    })
                }

                console.log(simpleData)

                parent.postMessage({ pluginMessage: { type: 'create-art-board', list: simpleData } }, '*')
            },
            ...mapMutations(["setShowValidation"])
        },
        computed: {
            ...mapGetters(["currentPartModel"]),
            ...mapState(["listForCreate"]),
            ...mapState("frames", ["pattern"]),
        }
    }
</script>