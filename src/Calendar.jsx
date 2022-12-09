import MonthView from "./MonthView.jsx"
import { useState } from "react";

export default function Calendar() {
    let month = {year: 2022, int: 11, str: "December"};

    return (
        <div>
            <div className="container mx-auto my-6 py-4 px-8 border-2 border-gray-600 rounded-md">
                 
                <MonthView month={month}/>
            </div>
        </div>
    );
}

