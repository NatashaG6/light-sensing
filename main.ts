let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    pins.digitalWritePin(DigitalPin.P16, 0)
    if (input.lightLevel() < 80) {
        basic.showIcon(IconNames.Sad)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showIcon(IconNames.Happy)
    }
})
