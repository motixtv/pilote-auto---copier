input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    cap = input.compassHeading()
})
let écart_abs = 0
let Opposé_cap = 0
let cap = 0
servos.P0.setAngle(90)
cap = input.compassHeading()
basic.forever(function () {
    if (cap > 180) {
        Opposé_cap = cap - 180
        if (écart_abs > 3) {
            if (input.compassHeading() > Opposé_cap && input.compassHeading() < cap - 2) {
                if (input.compassHeading() > cap - 45) {
                    servos.P0.setAngle(90 + 3 * écart_abs)
                } else {
                    servos.P0.setAngle(135)
                }
            }
            if (input.compassHeading() < Opposé_cap || input.compassHeading() > cap + 2) {
                if (cap < 315) {
                    if (input.compassHeading() < cap + 45) {
                        servos.P0.setAngle(90 - 3 * écart_abs)
                    } else {
                        servos.P0.setAngle(45)
                    }
                }
                if (cap > 315) {
                    if (input.compassHeading() <= Opposé_cap - 135) {
                        servos.P0.setAngle(90 - (input.compassHeading() + (360 - cap)))
                    }
                    if (input.compassHeading() > cap + 2) {
                        servos.P0.setAngle(90 - 3 * écart_abs)
                    }
                    if (input.compassHeading() <= Opposé_cap && input.compassHeading() > Opposé_cap - 135) {
                        servos.P0.setAngle(45)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    écart_abs = Math.abs(cap - input.compassHeading())
    servos.P0.setRange(45, 135)
})
basic.forever(function () {
    if (cap < 180) {
        Opposé_cap = cap + 180
        if (écart_abs > 3) {
            if (input.compassHeading() < Opposé_cap && input.compassHeading() > cap + 2) {
                if (input.compassHeading() < cap + 45) {
                    servos.P0.setAngle(90 - 3 * écart_abs)
                } else {
                    servos.P0.setAngle(45)
                }
            }
            if (input.compassHeading() > Opposé_cap || input.compassHeading() < cap - 2) {
                if (cap > 45) {
                    if (input.compassHeading() > cap - 45) {
                        servos.P0.setAngle(90 + 3 * écart_abs)
                    } else {
                        servos.P0.setAngle(135)
                    }
                }
                if (cap < 45) {
                    if (input.compassHeading() >= Opposé_cap + 135) {
                        servos.P0.setAngle(90 + (cap + (360 - input.compassHeading())))
                    }
                    if (input.compassHeading() < cap - 2) {
                        servos.P0.setAngle(90 + 3 * écart_abs)
                    }
                    if (input.compassHeading() >= Opposé_cap && input.compassHeading() < Opposé_cap + 135) {
                        servos.P0.setAngle(135)
                    }
                }
            }
        }
    }
})
