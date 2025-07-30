import type { AudioProps } from "./types";

export default function Audio({ macaroniRef, stirringRef }: AudioProps){
    return (
        <>
            <audio loop ref={ macaroniRef }>
                <source src="../../public/macaroni-in-a-pot.flac" type="audio/flac" />
            </audio>
            <audio loop ref={ stirringRef }>
                <source src="../../public/stirring-macaroni-and-cheese.mp3" type="audio/mpeg" />
            </audio>
        </>
    )
}