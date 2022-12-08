import dayjs from "dayjs"

export default function Calendar() {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Month to display
    let year = 2022;
    let month = {int: 11, str: "December"};

    //Fetch the list of dates that will be displayed
    const listOfDates = getDates(year, month.int);

    return (
        <div>
            <h1 className="text-2xl mx-auto">{month.str}</h1> 
            <div className="container mx-auto my-6 py-4 px-8 border-2 border-gray-600 rounded-md">
                <div className="grid grid-cols-7 gap-4 justify-center align-items-center">
                     {/* Sun-Sat above the dates */}
                    {dayNames.map(dayNames => {
                        return (
                            <div className="h-auto w-auto m-2" key={dayNames}>{dayNames}</div>
                        )
                    })}
                    {/* Add extra days from previous month */}
                    {listOfDates.last.map(date => {
                        return (
                            Date(date, false)
                        )
                    })}
                    {/* Add days from current month */}
                    {listOfDates.current.map(date => {
                        return (
                            Date(date, true)
                        )
                    })}
                    {/* Add extra days from next month */}
                    {listOfDates.next.map(date => {
                        return (
                            Date(date, false)
                        )
                    })}
                    
                </div>
            </div>
        </div>
    );
}

// Date component
function Date(date, partOfMonth) {
    
    if(partOfMonth === true) { // Return current month date cells
        return (
        <>    
            <div className="group w-auto h-32 m-1 p-2 font-bold border-2 hover:border-black">{date.date()}
                <div className="font-normal invisible group-hover:visible"><button className="border-2 border-gray-600 p-1 rounded-md hover:bg-slate-200">Mark Finished</button></div>
            </div>
        </>
        )
    } else { // Return overflow date cells
        return (
            <div className="w-auto h-32 m-1 p-2 text-slate-500 border-2">{date.date()}</div>
        );
    }
    
    
}

// Makes a list of all the dates to display in a month view calendar
function getDates(year, month) {
    
    const currentMonth = dayjs().year(year).month(month);
    const firstDateOfMonth = currentMonth.startOf("month");
    const lastDateOfMonth = currentMonth.endOf("month");

    // Initializing object and arrays that will be returned
    const listOfDates = {};
    const lastMonthDates = [];
    const currentMonthDates = [];
    const nextMonthDates = [];

    // Adding Previous Month Ending Dates
    for(let i = 0; i < firstDateOfMonth.day(); i++) {
        lastMonthDates.push(firstDateOfMonth.day(i));
    }
    listOfDates.last = lastMonthDates;
    
    // Adding Current Month Dates
    for(let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
        currentMonthDates.push(currentMonth.date(i));
    }
    listOfDates.current = currentMonthDates;

    // Adding Next Month Starting Days
    const remainder = 6 - lastDateOfMonth.day();
    for(let i = lastDateOfMonth.day() + 1; i <= 6; i++) {
        nextMonthDates.push(lastDateOfMonth.day(i));
    }
    listOfDates.next = nextMonthDates;
    
    return(listOfDates);
}

