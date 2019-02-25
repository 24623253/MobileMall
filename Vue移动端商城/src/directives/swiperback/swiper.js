// 判断方向
function getSwiperDirection(startX, startY, endX, endY, move) {
    let dy = startY - endY
    let dx = endX - startX
    let result = ''
    // 如果滑动距离太短
    if (Math.abs(dx) < move && Math.abs(dy) < move) {
        return
    }
    let angle = Math.atan2(dy, dx) * 180 / Math.PI // 获取角度
    if (angle >= -45 && angle <= 45) {
        result = 'swiperRight' // 右
    } else if (angle > 45 && angle < 135) {
        result = 'swiperUp' // 上
    } else if (angle >= -135 && angle <= -45) {
        result = 'swiperDown' // 下
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 'swiperLeft' // 左
    }
    return result
}
// 根据触摸方向做相应需求
export default function swiper(el, direction, vm) {
    if (!el || !direction) {
        return
    }
    let res = '' // 存储判断方向的结果
    let startX, startY, endX, endY
    el.addEventListener('touchstart', (ev) => {
        startX = ev.touches[0].pageX
        startY = ev.touches[0].pageY
    })
    el.addEventListener('touchend', (ev) => {
        // 触摸滑动的方向和组件传的方向相等，则返回上一页
        endX = ev.changedTouches[0].pageX
        endY = ev.changedTouches[0].pageY
        res = getSwiperDirection(startX, startY, endX, endY, 50)
        if (direction === res) {
            vm.$router.go(-1)
        }
    })
}
