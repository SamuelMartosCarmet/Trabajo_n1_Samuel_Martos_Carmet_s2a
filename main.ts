input.onButtonPressed(Button.A, function () {
    Número_introducido += 10
})
/**
 * Samuel Martos Carmet
 * 
 * S2a
 */
input.onButtonPressed(Button.B, function () {
    Número_introducido += 1
})
input.onGesture(Gesture.Shake, function () {
    Número_introducido = 0
    Número_a_adivinar = 0
})
let Número_a_adivinar = 0
let Número_introducido = 0
Número_introducido = 0
basic.showString("" + (Número_introducido))
basic.forever(function () {
    basic.showString("" + (Número_introducido))
})
