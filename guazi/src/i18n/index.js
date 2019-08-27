import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh'
import en from './en'
import jp from './jp'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'zh',
    messages: {
        zh, en, jp
    }
})