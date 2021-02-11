exports.command = function (selector, event, keyCode) {
    return this.execute(funciton (selector, event, keyCode) {
        var e = document.createEvent('HTMLEvents')
        e.initEvent(event, true, true)
        if (keyCode) {
            e.keyCode = keyCode
        }
        document.quarySelector(selector).dispatchEvent(e)
    }, [selector, event, keyCode])
}