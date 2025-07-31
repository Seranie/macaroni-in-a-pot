import { useEffect } from "react";
import type { AudioProps } from "./types";

export default function Audio({ macaroniRef, stirringRef }: AudioProps){

    useEffect(() => {
        let volumeString: string | null = localStorage.getItem('audioVolume');
        if (volumeString) {
            // divide by 100 because volumeString is in int form
            let volume: number = parseFloat(volumeString) / 100;
            macaroniRef.current!.volume = volume;
            stirringRef.current!.volume = volume;
        }
    }, []);

    return (
        <>
            <audio loop ref={ macaroniRef }>
                <source src="../../macaroni.flac" type="audio/flac" />
            </audio>
            <audio loop ref={ stirringRef }>
                <source src="../../stirring-macaroni-and-cheese.mp3" type="audio/mpeg" />
            </audio>
        </>
    )
}