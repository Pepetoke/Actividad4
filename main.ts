basic.forever(function () {
    led.plotBrightness(0, 0, 255)
    basic.pause(100)
    led.plotBrightness(0, 0, 107)
    led.plotBrightness(1, 0, 255)
    basic.pause(100)
    led.plotBrightness(0, 0, 29)
    led.plotBrightness(1, 0, 107)
    led.plotBrightness(2, 0, 255)
    basic.pause(100)
    led.unplot(0, 0)
    led.plotBrightness(1, 0, 29)
    led.plotBrightness(2, 0, 107)
    led.plotBrightness(3, 0, 255)
    basic.pause(100)
    led.unplot(1, 0)
    led.plotBrightness(2, 0, 29)
    led.plotBrightness(3, 0, 107)
    led.plotBrightness(4, 0, 255)
    basic.pause(100)
    led.unplot(2, 0)
    led.plotBrightness(3, 0, 29)
    led.plotBrightness(4, 0, 107)
    led.plotBrightness(4, 1, 255)
    basic.pause(100)
    led.unplot(3, 0)
    led.plotBrightness(4, 0, 29)
    led.plotBrightness(4, 1, 107)
    led.plotBrightness(3, 1, 255)
    basic.pause(100)
    led.unplot(4, 0)
    led.plotBrightness(4, 1, 29)
    led.plotBrightness(3, 1, 107)
    led.plotBrightness(2, 1, 255)
    basic.pause(100)
    led.unplot(4, 1)
    led.plotBrightness(3, 1, 29)
    led.plotBrightness(2, 1, 107)
    led.plotBrightness(1, 1, 255)
    basic.pause(100)
    led.unplot(3, 1)
    led.plotBrightness(2, 1, 29)
    led.plotBrightness(1, 1, 107)
    led.plotBrightness(0, 1, 255)
    basic.pause(100)
    led.unplot(2, 1)
    led.plotBrightness(1, 1, 29)
    led.plotBrightness(0, 1, 107)
    basic.pause(100)
    led.unplot(1, 1)
    led.plotBrightness(0, 1, 29)
    basic.pause(100)
    led.unplot(0, 1)
    basic.pause(1000)
})
