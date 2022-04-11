<template>
    <div class="settings">
        <div class="settings__closer" @click="$emit('closeSettings')"></div>

        <h1 class="settings__title">Settings</h1>

        <div v-if="mode !== null" class="settings-choice">
            <div class="settings-choice__link">Изменить строку</div>
            <div class="settings-choice__link">Изменить поля</div>
            <div class="settings-choice__link">Скопировать настройки</div>
            <div class="settings-choice__link">Вставить настройки</div>
        </div>
        <template v-else>
            <SettingsChangePattern v-if="mode===MODE_CHANGE_STRING"/>
            <SettingsChangeFields v-if="mode===MODE_CHANGE_FIELDS"/>
            <SettingsCopyConfig v-if="mode===MODE_COPY_SETTINGS"/>
            <SettingsCopyConfig v-if="mode===MODE_SET_SETTINGS"/>
        </template>
    </div>
</template>

<script>
import SettingsChangePattern from "@/components/settings/SettingsChangePattern";
import SettingsChangeFields from "@/components/settings/SettingsChangeFields";
import SettingsCopyConfig from "@/components/settings/SettingsCopyConfig";
export default {
    name: "MainSettingsPage",
    components: {SettingsCopyConfig, SettingsChangeFields, SettingsChangePattern},
    data(){
        return {
            mode: null,
            MODE_CHANGE_STRING: "mode_change_string",
            MODE_CHANGE_FIELDS: "mode_change_fields",
            MODE_COPY_SETTINGS: "mode_copy_settings",
            MODE_SET_SETTINGS: "mode_set_settings",
        }
    }
}
</script>