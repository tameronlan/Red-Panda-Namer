import Vue from 'vue';
import Vuex from 'vuex';
import {getConfig, getPatternString} from "@/api/config";
import {MODE_ADD} from "@/consts";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        packageName: "RedPandaNamer",
        currentConfig: null,
        currentConfigId: null,
        currentPatternString: "",
        bufferedConfig: null,
        showValidation: false,
        listForCreate: [],
        listNextId: 0,
        baseConfig: getConfig(),
        basePatternString: getPatternString(),
        mode: MODE_ADD
    },
    getters: {

    },
    mutations: {
        setCurrentConfig(state, config){
            state.currentConfig = config
        },
        setCurrentConfigId(state, id){
            state.currentConfigId = id
        },
        setCurrentPatternString(state, pattern){
            state.currentPatternString = pattern
        },
        setShowValidation(state, showValidation){
            state.showValidation = showValidation
        },
        appendListForCreate(state, config){
            config.id = state.listNextId++
            config.updated = +(new Date())
            config.created = +(new Date())

            state.listForCreate.push(config)
        },
        clearListForCreate(state){
            state.listForCreate = []
        },
        removeFromListForCreate(state, id){
            state.listForCreate = state.listForCreate.filter(config => config.id !== id)
        },
        changeMode(state, mode){
            state.mode = mode
        },
        updateConfigInListForCreate(state, config){
            let lastList = state.listForCreate
            let hasConfig = false

            lastList.forEach(configItem => {
                if (configItem.id === config.id ) {
                    hasConfig = true
                    configItem = config
                    configItem.updated = +(new Date())
                }
            })

            if (hasConfig) {
                state.listForCreate = lastList
            } else {
                state.listForCreate.push(config)
            }
        }
    },
    actions: {
        updateFieldItem({state, commit}, fieldItem){
            let key = fieldItem.key
            let newConfig = state.currentConfig

            if (newConfig) {
                newConfig.rows.forEach(row => {
                    row.forEach(field => {
                        if (field.key === key) {
                            field = fieldItem
                        }
                    })
                })
            }

            commit("setCurrentConfig", newConfig)
        }
    },
    modules: {

    }
});

export default store;
