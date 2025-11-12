input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showString("Scissors")
    } else if (Math.randomBoolean()) {
        basic.showString("Paper")
    } else {
        basic.showString("Stone")
    }
})
