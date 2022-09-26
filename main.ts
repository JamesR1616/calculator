let number_1 = 0
let Number_2 = 0
input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showNumber(number_1)
})
input.onGesture(Gesture.LogoUp, function () {
    control.reset()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(number_1 - Number_2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(number_1 + Number_2)
})
input.onButtonPressed(Button.B, function () {
    Number_2 += 1
    basic.showNumber(Number_2)
})
basic.forever(function () {
	
})
