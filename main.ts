let hungeryness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungeryness = hungeryness + 1
        basic.showNumber(hungeryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungeryness = 0
        basic.showNumber(hungeryness)
    } else {
    	
    }
})
