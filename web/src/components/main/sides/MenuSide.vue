<template>
    <div class="app-stage-menu">
        <div class="app-stage-menu__mover"></div>
        <div class="app-stage-menu__title" ref="menuTitle">Layers</div>

        <div class="app-stage-menu__inner" :style="{top: `${menuTitleHeight}px`}">
            <template v-for="part in parts">
                <div class="app-stage-menu-category">
                    <div class="app-stage-menu-category__actions">
                        <div class="app-stage-menu-category__action" @click="addAction(part)">
                            <plus-icon/>
                        </div>
                    </div>

                    <div class="app-stage-menu-category__title">
                        {{part.title}}
                    </div>
                </div>

                <template v-if="listForCreate[part.type].length" >
                    <div class="app-stage-menu-items">
                        <LineForCreate v-for="config in listForCreate[part.type]" :config="config" :part="part"/>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex"
    import LineForCreate from "@/components/main/LineForCreate";
    import MenuIconFrame from "@/assets/menu_icon_frame.svg";
    import PlusIcon from "@/assets/plus_icon.svg";
    import {PART_CREATE_FRAMES} from "@/consts"
    import {copyObject} from "@/lib/copyFunction";

    export default {
        name: "Menu",
        components: {LineForCreate, MenuIconFrame, PlusIcon},
        data(){
            return {
                menuTitleHeight: 0
            }
        },
        mounted() {
            this.menuTitleHeight = this.$refs.menuTitle.getBoundingClientRect().height

            this.parts.forEach(part => {
                if(part.type === PART_CREATE_FRAMES) this.addAction(part)
            })
        },
        computed: {
            ...mapState([
                "listForCreate",
                "parts"
            ]),
            ...mapState("frames", ["configCreateFrames"])
        },
        methods: {
            addAction(part){
                let config = null

                switch(part.type){
                    case PART_CREATE_FRAMES:
                        config = copyObject(this.configCreateFrames)
                }

                /// добавляем новый конфиг
                this.appendListForCreate({part, config})

                let listForCreate = this.listForCreate[part.type]

                /// сразу переключаемся на него
                this.setCurrentConfig(listForCreate[listForCreate.length - 1])
            },
            ...mapMutations(["appendListForCreate", "setCurrentConfig"])
        },
        watch: {
            listForCreate(oldObj, newObj){
                console.log(oldObj, newObj)
            }
        }
    }
</script>