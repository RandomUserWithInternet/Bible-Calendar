import DateComponent from "./DateComponent.jsx"

export default function MonthView(props) {
    const listOfDates = getDateList();

    return (
    <>
        <h1 className="text-3xl mx-auto py-6 text-center">{props.month.str}</h1>
        <div className="grid grid-cols-7 gap-4 justify-center align-items-center border-t-2">
            <WeekBar />
            {/* Add extra days from previous month */}
            {listOfDates.last.map(date => {
                return (
                    DateComponent(date, false)
                )
            })}
            {/* Add days from current month */}
            {listOfDates.current.map(date => {
                return (
                    DateComponent(date, true)
                )
            })}
            {/* Add extra days from next month */}
            {listOfDates.next.map(date => {
                return (
                    DateComponent(date, false)
                )
            })}
        </div>
    </>
    )
}

function WeekBar() {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const bar = dayNames.map(dayNames => {
        return (
            <div className="h-auto w-auto m-2" key={dayNames}>{dayNames}</div>
        )
    })
    return(bar)
}

// Makes a list of all the dates to display in a month view calendar
function getDateList() {
    const firstOfMonth = new Date();
    firstOfMonth.setDate(1);

    const lastOfMonth = new Date();
    lastOfMonth.setMonth(firstOfMonth.getMonth() + 1);
    lastOfMonth.setDate(0);

    // Initializing object and arrays that will be returned
    const listOfDates = {};
    const lastMonthDates = [];
    const currentMonthDates = [];
    const nextMonthDates = [];

    // Adding Previous Month Ending Dates
    for(let i = 0; i < firstOfMonth.getDay(); i++) {
        var x = firstOfMonth.setDate(1 - firstOfMonth.getDay() + i);
        lastMonthDates.push(x.getDate())
    }
    listOfDates.last = lastMonthDates;
    
    // Adding Current Month Dates
    for(let i = firstOfMonth.getDate(); i <= lastOfMonth.getDate(); i++) {
        const currentDate = new Date();
        currentDate.setDate(i);
        currentMonthDates.push(currentDate.getDate());
    }
    listOfDates.current = currentMonthDates;

    // Adding Next Month Starting Days
    for(let i = 1; i <= 6 - lastOfMonth.getDay(); i++) {
        const currentDate = new Date();
        currentDate.setDate(lastOfMonth.getDate() + i);
        nextMonthDates.push(currentDate.getDate());
    }
    listOfDates.next = nextMonthDates;

    return(listOfDates);
}