import Player from "./entities/player"
import IPlayerProps from "./interfaces/iPlayerProps"
import Game from "./systems/game"
import Loader from "./systems/loader"

const playerProps: IPlayerProps = await request<IPlayerProps>("http://localhost:3000/user/1")
console.log(playerProps)

Loader.load().configuration("configuration")
Loader.load().multipliers("multipliers")
Loader.load().assets("assets")

new Game()
