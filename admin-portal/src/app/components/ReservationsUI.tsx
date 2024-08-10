import ReservationGrid from "./ReservationGrid";
export default function ReservationsUI() {

    const data = [
        { id: 1, name: "EkOnkar", entityType:"Naam", description: "Dhan Dhan Mahraj ji", alias: "Waheguru", status: "Active", category: "Naam" },
        { id: 1, name: "Satnam", entityType:"Naam", description: "Dhan Dhan Baba Siri Chand Saheb", alias: "Waheguru", status: "Active", category: "Naam"},
        { id: 1, name: "SriWaheguru", entityType:"Naam", description: "Dhan Guru Gobind Singh Saheb", alias: "Waheguru", status: "Active", category: "Naam" },
        { id: 1, name: "Naam Jap", entityType:"Naam", description: "Dhan Guru Gur Nanak Saheb", alias: "Waheguru", status: "Active", category: "Naam" }
      ];

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
                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                      View all
                    </a>

                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
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

                <ReservationGrid />

              {/* <!-- Footer --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    <span className="font-semibold text-gray-800 dark:text-neutral-200">12</span> results
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