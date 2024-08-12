import { useEffect, useState } from 'react';

export default function ReservationGrid() {

    const testData = [
        { id: 1, name: "EkOnkar", entityType:"Naam", description: "Dhan Dhan Mahraj ji", alias: "Waheguru", status: "Active", category: "Naam" },
        { id: 2, name: "Satnam", entityType:"Naam", description: "Dhan Dhan Baba Siri Chand Saheb", alias: "Waheguru", status: "Active", category: "Naam"},
        { id: 3, name: "SriWaheguru", entityType:"Naam", description: "Dhan Guru Gobind Singh Saheb", alias: "Waheguru", status: "Inactive", category: "Naam" },
        { id: 4, name: "Naam", entityType:"Naam", description: "Dhan Guru Gur Nanak Saheb", alias: "Waheguru", status: "Active", category: "Naam" }];

        const [data, setData] = useState([{'id': '', 'customerName': '', 'partySize': '', 'customerPhone': '', 'reservationStatus': '', 'customerContact': '', 'startTime':'', 'specialRequest':''}]);
        
        const today = new Date().toISOString().slice(0, 10);
        const [date, setDate] = useState(today);
        
        useEffect(() => {
          // Fetch data from API, by default load reservations for today
          getReservationsByDate(date);
          //getAllReservations();
        }, [date]);

        

        const getReservationsByDate = async (date: string) => {
          try {
            const response = await fetch('http://localhost:6002/api/reservations?date=' + date); // Replace with your API endpoint
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      
        const getAllReservations = async () => {
          try {
            const response = await fetch('http://localhost:6002/api/reservations'); // Replace with your API endpoint
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    return (
        <div>
            
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start">
                      <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main"/>
                        <span className="sr-only">Checkbox</span>
                      </label>
                    </th>

                    <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Customer Name
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Number of guests
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Time
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Status
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Special Requests
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-end"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">

                {data.map((item) => (
          <tr key={item.id}>
             <td className="size-px whitespace-nowrap">
                      <div className="ps-6 py-3">
                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                          <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1"/>
                          <span className="sr-only">Checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                        <div className="flex items-center gap-x-3">
                          {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"/> */}
                          <div className="grow">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{item.customerName}</span>
                            <span className="block text-sm text-gray-500 dark:text-neutral-500">{item.id}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <div className="px-6 py-3">
                        {/* <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{item.}</span> */}
                        <span className="block text-sm text-gray-500 dark:text-neutral-500">{item.partySize}</span>
                      </div>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <div className="px-6 py-3">
                        {/* <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{item.}</span> */}
                        <span className="block text-sm text-gray-500 dark:text-neutral-500">{item.startTime}</span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3">
                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                          {/* <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg> */}
                          {item.reservationStatus}
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                          <span className="text-xs text-gray-500 dark:text-neutral-500">{item.specialRequest}</span>
                          {/* <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"> */}
                            {/* <div className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                          {/* </div> */}
                        </div>
                      </div>
                    </td>
                    {/* <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3">
                        <span className="text-sm text-gray-500 dark:text-neutral-500">28 Dec, 12:12</span>
                      </div>
                    </td> */}
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-1.5">
                        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">
                          Edit
                        </a>
                      </div>
                    </td>
          </tr>
        ))}

                




                </tbody>
              </table>
              {/* <!-- End Table --> */}
        </div>
    )
}