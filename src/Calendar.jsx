import MonthView from "./MonthView.jsx"

export default function Calendar() {
    const currentMonth = new Date();
    const displayMonth = {year: currentMonth.getFullYear(), month: currentMonth.getMonth()}; //Month 0-11
    return (
        <div>
            <div className="container mx-auto my-6 py-4 px-8 border-2 border-gray-600 rounded-md">  
                <MonthView month={displayMonth}/>
            </div>
        </div>
    );
}

