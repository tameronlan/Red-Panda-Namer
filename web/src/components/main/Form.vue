<template>
    <div class="form__cover">
<!--        <span-->
<!--            class="form__settings link"-->
<!--            @click="switchSettingsPage(true)"-->
<!--        >Settings</span>-->

        <h1>Red Panda Namer</h1>

        <div class="form__description">
            Choose options and create name
        </div>

        <template v-if="listForCreate.length > 0">
            <transition name="fade-slide" v-for="config in listForCreate" >
                <LineForCreate :config="config"/>
            </transition>
        </template>

        <div class="form">
            <template v-if="currentConfig">
                <div :key="mode === MODE_EDIT ? currentConfigId : listNextId">
                    <div class="form__fields">
                        <Field
                            v-for="field in currentConfig.rows"
                            :field="field"
                            @changeName="changeName"
                        ></Field>
                    </div>

                    <div class="concept__wrapper">
                        <div class="concept__name">{{ name }}</div>
                    </div>

                    <div class="form__actions">
                        <template v-if="mode === MODE_EDIT">
                            <button class="button button_primary form__button" @click="saveAction">Save changes</button>
                        </template>
                        <template v-else>
                            <button class="button button_transparent form__button form__button-add" @click="addAction">
                                <span class="icon__plus concept__icon-plus"></span> Add
                            </button>
                            <button class="button button_primary form__button" @click="createAction">Create</button>
                        </template>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="loader">Load config...</div>
            </template>
        </div>

        <transition name="fade-slide">
            <MainSettingsPage v-if="isSettingsShown" @closeSettings="switchSettingsPage(false)"/>
        </transition>
    </div>
</template>

<script>
import Field from "@/components/main/Field";
import {mapMutations, mapState} from "vuex";
import {MODE_ADD, MODE_EDIT} from "@/consts";
import {
    getCountFromConfig,
    getNameFromConfig,
    getSizeFromConfig, getStartVariantFromConfig,
    validateConfig
} from "@/api/config";
import LineForCreate from "@/components/main/LineForCreate";
import {copyObject} from "@/lib/copyFunction";
import MainSettingsPage from "@/components/settings/MainSettingsPage";

export default {
    name: "Form",
    components: {MainSettingsPage, LineForCreate, Field},
    data(){
        return {
            name: "",
            MODE_ADD: MODE_ADD,
            MODE_EDIT: MODE_EDIT,
            isSettingsShown: false
        }
    },
    created() {
        if (!this.currentConfig) {
            this.setCurrentConfig(copyObject(this.baseConfig))
        }

        if (!this.currentPatternString.length) {
            this.setCurrentPatternString(this.basePatternString)
        }

        this.changeName()
    },
    computed: {
        ...mapState([
            "currentConfig",
            "baseConfig",
            "currentPatternString",
            "basePatternString",
            "listForCreate",
            "listNextId",
            "mode",
            "currentConfigId"
        ])
    },
    methods: {
        addAction(){
            if (!validateConfig(this.currentConfig)){
                this.setShowValidation(true)
            } else {
                this.setShowValidation(false)
                this.appendListForCreate(this.currentConfig)
                this.setCurrentConfig(copyObject(this.currentConfig))
                this.changeName()
                this.$toasted.show("Configuration added")
            }
        },
        saveAction(){
            this.updateConfigInListForCreate(this.currentConfig)
            this.changeMode(MODE_ADD)
            this.setCurrentConfigId(null)
            this.setCurrentConfig(copyObject(this.currentConfig))
            this.changeName()
            this.$toasted.show("Configuration changed")
        },
        createAction(){
            // if (validateConfig(this.currentConfig)) {
            //     this.appendListForCreate(this.currentConfig)
            //     this.setCurrentConfig(copyObject(this.baseConfig))
            //     this.changeName()
            // }

            if (this.listForCreate.length === 0) {
                this.setShowValidation(true)
                this.$toasted.show("Add configuration before create")
                return
            }

            let simpleData = []

            this.listForCreate.forEach(config => {
                let {width, height} = getSizeFromConfig(config)
                let count = getCountFromConfig(config)
                let startVariant = getStartVariantFromConfig(config)
                let names = []

                for(let varDelta = 0; varDelta < count; varDelta++){
                    names.push(getNameFromConfig(this.currentPatternString, config, +startVariant + varDelta))
                }

                simpleData.push({ names, width, height })
            })

            console.log(`config:`, simpleData)

            parent.postMessage({ pluginMessage: { type: 'create-art-board', list: simpleData } }, '*')
        },
        changeName(){
            this.name = getNameFromConfig(this.currentPatternString, this.currentConfig)
        },
        switchSettingsPage(isShown){
            this.isSettingsShown = isShown
        },
        ...mapMutations([
            "setCurrentConfig",
            "setCurrentPatternString",
            "setShowValidation",
            "appendListForCreate",
            "changeMode",
            "setCurrentConfigId",
            "updateConfigInListForCreate"
        ])
    },
    watch: {
        mode(newVal, oldVal){
            console.log("mode::", newVal)
        }
    }
}
</script>