IRnew.onIrDatagram(function () {
	
})
let len = 0
IRnew.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
serial.redirectToUSB()
basic.forever(function () {
    if (IRnew.hiwordr().length > len) {
        serial.writeLine(IRnew.hiwordr().substr(len, IRnew.hiwordr().length - len))
        len = IRnew.hiwordr().length
    }
})
