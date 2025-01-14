namespace comment {
    //% blockId=show_strings block="回転サーボ %v"
    let speed: number
    export function noaction1(): void {
    let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
    servos.P1.run(speed - speed * 2)
    servos.P2.run(speed * 2)
    strip.showRainbow(1, 360)
    }
    //% blockId=show_strings block="速度"
    export function noaction2(speed: string): void {
    }
}
basic.forever(function () {
	
})
