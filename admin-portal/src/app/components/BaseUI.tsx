"use client";
import ReservationsUI from "./ReservationsUI";
import SideBar from "./SideBar";
export default function BaseUI(){
    return (
        <div>
             {/* // <!-- ========== MAIN CONTENT ========== --> */}
{/* // <!-- Breadcrumb --> */}
<div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
  <div className="flex items-center py-2">
    {/* // <!-- Navigation Toggle --> */}
    <button type="button" className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
      <span className="sr-only">Toggle Navigation</span>
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>
    </button>
    {/* // <!-- End Navigation Toggle --> */}

    {/* // <!-- Breadcrumb --> */}
    <ol className="ms-3 flex items-center whitespace-nowrap">
      <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
        Application Layout
        <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </li>
      <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
        Dashboard
      </li>
    </ol>
    {/* // <!-- End Breadcrumb --> */}
  </div>
</div>
{/* // <!-- End Breadcrumb --> */}



{/* Sidebar */}
<SideBar/>
{/* // <!-- End Sidebar --> */}

{/* // <!-- Content --> */}
<div className="lg:ps-[260px] ">
  <div className="min-h-[75rem] p-4 md:p-8">
    {/* <!-- your content goes here ... --> */}

    {/* // <!-- Content --> */}
    <div id="scrollspy" className="space-y-10 md:space-y-16">
      <div id="dashboard" className="min-h-[25rem] scroll-mt-24">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Dashboard</h2>
      </div>

      <div id="reservations" className="min-h-[25rem] scroll-mt-24">
        <ReservationsUI />
      </div>

      <div id="customers" className="min-h-[25rem] scroll-mt-24">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Customers</h2>
      </div>

      <div id="users" className="min-h-[25rem] scroll-mt-24">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Users</h2>
      </div>

    </div>
    {/* // <!-- End Content --> */}
  </div>
</div>

        </div>
       
    );
}