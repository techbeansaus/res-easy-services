import { useEffect, useState } from "react";
import { testNextEnvironment } from "../services/ApiService";
import ReservationGrid from "./ReservationGrid";
console.log(testNextEnvironment());


// following function is used to convert date from dd/mm/yyyy to yyyy-mm-dd
function convertDate(date: string): string {
  const parts = date.split('/');
  const year = parts[2];
  const month = parts[1].padStart(2, '0');
  const day = parts[0].padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// set default date to today
function setDefaultDate(): string {
  const localTime = new Date().toLocaleDateString();
  return convertDate(localTime);
}

// ReservationsUI component definition
export default function ReservationsUI(props: any) {
  const [selectedDate, setSelectedDate] = useState('');
  const [today, setToday] = useState('');

  useEffect(() => {
    setSelectedDate(setDefaultDate());
    setToday(setDefaultDate());
  }, []);



  // handle date selection
  function handleDateSelection(event: any): void {
    console.log("Date selection");
    console.log(event.target.value);
    setSelectedDate(event.target.value);
  }

  return (
    <div>
      {/* <!-- Card --> */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
              {/* <!-- Header --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    Reservations
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Add reservations, edit and more.
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">

                    <div>
                      <label htmlFor="dateFilter" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"></label>
                      <input type="date" id="dateFilter" value={selectedDate}  onChange={handleDateSelection} name="bookingDate" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                    </div>


                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#reservations" onClick={handleDateSelection}>
                      Refresh
                    </a>

                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#createReservationsUI">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Reserve a table
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}

              <ReservationGrid selectedDate={selectedDate} today={today}/>

              {/* <!-- Footer --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    <span className="font-semibold text-gray-800 dark:text-neutral-200"></span> results
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>

                    <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      Next
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Footer --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </div>
    //   <!-- End Content -->
  );
}