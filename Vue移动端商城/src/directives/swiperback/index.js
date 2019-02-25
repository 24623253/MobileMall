import swiper from './swiper'

export default {
    inserted(el, binding, vnode) {
        if (binding.value) {
            swiper(el, binding.value, vnode.context)
        }
    }
}
