namespace comment {
    //% blockId=show_strings block="回転サーボ %v"
    export function noaction(): void {
    servos.P1.run(-50)
    servos.P2.run(50)
    }
}
basic.forever(function () {
    comment.noaction()
})
