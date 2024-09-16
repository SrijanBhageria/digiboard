import RoomContextProvider from "../context/Room.context"
import Canvas from "./Canvas"
import { MousePosition } from "./MousePosition"
import { MouseRenderer } from "./MouseRenderer"


export const TempRoom = () => {

    return(
        <RoomContextProvider>
            <div className="relative h-full w-full overflow-hidden">
                <Canvas/>
                <MousePosition />
                <MouseRenderer />
            </div>
        </RoomContextProvider>
    )
}
