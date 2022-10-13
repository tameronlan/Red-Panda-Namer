import Vue from 'vue';
import Vuex from 'vuex';
import {PART_CREATE_FRAMES} from "@/consts";

import frames from "@/store/frames";

Vue.use(Vuex);

let listForCreateDefault = {
    [PART_CREATE_FRAMES]: []
}

let store = new Vuex.Store({
    state: {
        packageName: "RedPandaNamer",
        currentConfig: null,
        showValidation: false,
        listForCreate: listForCreateDefault, // объект, куда будем складывать по типам частей создаваемые объекты
        listNextId: 0,
        parts: [
            {
                type: PART_CREATE_FRAMES,
                title: "Create Frames"
            }
        ]
    },
    getters: {
        currentPartModel(state){
            let model = null

            if (state.currentConfig !== null){
                state.parts.forEach(part => {
                    if(part.type === state.currentConfig.type) {
                        model = part
                    }
                })
            }

            return model
        }
    },
    mutations: {
        setCurrentConfig(state, config){
            state.currentConfig = config
        },
        setCurrentPatternString(state, pattern){
            state.currentPatternString = pattern
        },
        setShowValidation(state, showValidation){
            state.showValidation = showValidation
        },
        appendListForCreate(state, {part, config}){
            config.id = state.listNextId++
            config.updated = +(new Date())
            config.created = +(new Date())
            config.type = part.type

            if (state.listForCreate[part.type] === undefined) {
                state.listForCreate[part.type] = []
            }

            state.listForCreate[part.type].push(config)
        },
        removeFromListForCreate(state, {id, part}){
            state.listForCreate[part.type] = state.listForCreate[part.type].filter(config => config.id !== id)
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
        },
        updateFieldItem(state, fieldItem){
            let key = fieldItem.key

            state.currentConfig.rows.forEach(row => {
                row.forEach(field => {
                    if (field.key !== key) return

                    field = fieldItem

                })
            })
        }
    },
    modules: {
        frames
    }
});

export default store;
