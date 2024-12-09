//% block="thing"
namespace thing{
  //% block="test"
  export function test():number{
    return 1;
  }
  export class FwdEduDial {
    private _dialClient: jacdac.RotaryEncoderClient
    private _cwAction: (delta: number) => void
    private _ccwAction: (delta: number) => void

    constructor(role: string) {
      this._dialClient = new jacdac.RotaryEncoderClient(role)
    }
    
    //% group="Dial"
    //% block="clicks per full turn"
    //% blockId=fwd_dial_get_clicks_per_turn
    //% color="#00cc00"
    clicksPerTurn(): number { return this._dialClient.clicksPerTurn() }
    
    //% group="Dial"
    //% block="%dial position"
    //% blockId=fwd_dial_get_position
    //% color="#00cc00"
     position(): number { return this._dialClient.position() }
    
    

  }
}
