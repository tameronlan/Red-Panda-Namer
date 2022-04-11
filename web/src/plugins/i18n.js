import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en_US from '../lang/en_US.json';
import Formatter from './formatter'
import {DEFAULT_LANGUAGE, FALLBACK_LANGUAGE} from '../consts';

const formatter = new Formatter({ locale: DEFAULT_LANGUAGE });

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: DEFAULT_LANGUAGE,
    formatter,
    fallbackLocale: FALLBACK_LANGUAGE,
    messages: {en_US}
});
