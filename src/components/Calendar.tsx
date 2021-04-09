import * as dateFns from 'date-fns';
import { useState } from 'react';
import './Calendar.css';

export const Calendar = (): JSX.Element => {

    interface Calendar {
        currentMonth: Date,
        selectedDate: Date
    }

    const [date, setDate] = useState<Calendar>({
        currentMonth: new Date(),
        selectedDate: new Date(),
    })

    let expandRows = '';

    const renderHeader = (): JSX.Element => {

        const dateMonthFormat: string = "MMMM";
        const dateYearFormat: string = "yyyy";

        return (
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl text-gray-700"><strong className="font-bold">{dateFns.format(date.currentMonth, dateMonthFormat)}</strong> {dateFns.format(date.currentMonth, dateYearFormat)}</h2>
                <div>
                    <button className="transition-all transform hover:scale-110 duration-300 ease-in-out mr-2" onClick={prevMonth}>
                        <i className="fas fa-chevron-left bg-gray-200 px-2.5 rounded py-2"></i>
                    </button>
                    <button className="transition-all transform hover:scale-110 duration-300 ease-in-out" onClick={nextMonth}>
                        <i className="fas fa-chevron-right bg-gray-600 px-2.5 rounded text-white py-2"></i>
                    </button>
                </div>
            </div>
        )
    }

    const renderDays = (): JSX.Element => {
        const dateFormat: string = 'E';
        const days: JSX.Element[] = [];

        let startDate = dateFns.startOfWeek(date.currentMonth, { weekStartsOn: 1 });

        for (let i: number = 0; i < 7; i++) {
            days.push(
                <div className="col col-center font-bold text-gray-500" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            )
        }
        return <div className="days row">{days}</div>
    }

    const renderCells = () => {
        const { currentMonth, selectedDate } = date;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(currentMonth);
        const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 });
        const endDate = dateFns.endOfWeek(monthEnd, { weekStartsOn: 0 });

        const dateFormat: string = 'd';
        const rows: JSX.Element[] = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i: number = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                const dateState: string = !dateFns.isSameMonth(day, monthStart) ? 'disabled' :
                    dateFns.isSameDay(day, selectedDate) ? 'selected' : '';
                days.push(
                    <div
                        className={`col cell ${dateState}`}
                        key={`${day}`}
                        onClick={() => onDateClick(cloneDay)}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={`${day}`}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className={`body`}>{rows}</div>
    }

    const onDateClick = (day: any) => {
        setDate({ ...date, selectedDate: day })
    };

    const nextMonth = (): void => {
        const nextMonth: Date = dateFns.addMonths(date.currentMonth, 1);
        setDate({ ...date, currentMonth: nextMonth })
    };

    const prevMonth = (): void => {
        const previousMonth: Date = dateFns.subMonths(date.currentMonth, 1);
        setDate({ ...date, currentMonth: previousMonth })
    };

    return (
        <div>
            <div>{renderHeader()}</div>
            <div className="calendar rounded overflow-hidden shadow rounded-2xl border transition-transform duration-300 ease-in-out transform scale-y-100">
                <main>
                    <div>{renderDays()}</div>
                    <div>{renderCells()}</div>
                </main>
            </div>
        </div>
    )
}