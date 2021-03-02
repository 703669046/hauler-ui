
import Lacale from "./locale"


const components = [
]

const install = function (Vue, opts = {}) {
    Lacale.use(opts.locale)
    // Vue.use(Layout)

    components.forEach(component => {
        Vue.component(component.name, component)
    })
    Vue.prototype.$MS_OPTION = {
        size: opts.size || 'medium',
        zIndex: opts.size || 2000
    }
}

// 通过脚本引入安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {}
