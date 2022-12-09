import { useState } from "react";

export default function Date(date, partOfMonth) {
    const finishedState = {
        completionStatus: "finished", 
        buttonText: "Mark Unfinished", 
        buttonStyle: "absolute inset-x-0 bottom-0 p-1 bg-red-100",
        imageStyle: "visible absolute top-0 right-0"
    }
    
    const unfinishedState = {
        completionStatus: "unfinished", 
        buttonText: "Mark Finished", 
        buttonStyle: "absolute inset-x-0 bottom-0 p-1 bg-green-100",
        imageStyle: "invisible absolute top-0 right-0"
    }
    
    const [dayState, setDayState] = useState(unfinishedState);

    

    function handleClick() {
        if (dayState.completionStatus === "unfinished") {
            setDayState(finishedState);
        } else {
            setDayState(unfinishedState);
        }
    }

    if(partOfMonth === true) { // Return current month date cells
        return (
            <div className="relative group w-auto h-32 m-1 p-2 font-bold border-2">{date.date()}
                <img className={dayState.imageStyle} src={localStorage.getItem("profilePicture")} />
                <div className="font-normal invisible group-hover:visible"><button onClick={handleClick} className={dayState.buttonStyle}>{dayState.buttonText}</button></div>
            </div>
        )
    } else { // Return overflow date cells
        return (
            <div className="w-auto h-32 m-1 p-2 text-slate-500 border-2">{date.date()}</div>
        );
    }
}