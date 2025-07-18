import type ParentProps from "../ParentProps";

export default function Background({ children }: ParentProps){
    return (
        <div className='background'> 
            { children }
        </div>
    )
}