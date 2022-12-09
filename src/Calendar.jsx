import MonthView from "./MonthView.jsx"

export default function Calendar() {
    let month = {year: 2022, int: 11, str: "December"};

    return (
        <div>
            <div className="container mx-auto my-6 py-4 px-8 border-2 border-gray-600 rounded-md">
                <h1 className="text-3xl mx-auto py-6 text-center">{month.str}</h1> 
                <MonthView month={month}/>
            </div>
        </div>
    );
}

