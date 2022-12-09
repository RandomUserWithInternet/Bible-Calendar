export default function Date(date, partOfMonth, key) {
    if(partOfMonth === true) { // Return current month date cells
        return (
            <div className="group w-auto h-32 m-1 p-2 font-bold border-2 hover:border-black">{date.date()}
                <div className="font-normal invisible group-hover:visible"><button className="border-2 border-gray-600 p-1 rounded-md hover:bg-slate-200">Mark Finished</button></div>
            </div>
        )
    } else { // Return overflow date cells
        return (
            <div className="w-auto h-32 m-1 p-2 text-slate-500 border-2">{date.date()}</div>
        );
    }
}