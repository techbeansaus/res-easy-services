
import React, { useState } from 'react';


export function testEnvironment(){
    console.log("Inside testEnvironment");
    console.log(process.env.RESTAURANT_ID);
}

export default function CreateReservationsUI(){
   const restaurantId= process.env.RESTAURANT_ID;
const { REACT_APP_RESTAURANT_ID } = process.env;
console.log("RESTAURANT_ID: " + testEnvironment());
    console.log("RESTAURANT_ID: " + process.env.RESTAURANT_ID);
    const emptyReservation = {
        firstName:"",
        lastName:"",
        phoneNumber:"",
        emailAddress:"",
        bookingDate:"",
        timeSlot:"",
        numberOfGuests:"",
        specialRequest:"",
        reservationFor: restaurantId
      };

    const [reservation, setReservation] = useState(emptyReservation);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(reservation);
        console.log(event);
        const { name, value } = event.target;
        console.log(name + " " + value);
        setReservation((reservation) => {
          return {
            ...reservation,
            [name]: value,
          };
        });
      }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        console.log(event);
        console.log(reservation);

        console.log("Inside Submit: " + process.env.RESTAURANT_ID);


        //setReservation(emptyReservation);
        //let errors = validateForm();
      
        // building the request object which POST the form data to the Booking service
        const req={
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservation)
        };



        try {
                console.log(req);
                const res = await fetch('http://localhost:6002/api/reservations',req);
              const jsonRes = await res.json;
                console.log(jsonRes);
                setReservation(emptyReservation);
              //setResponse(JSON.stringify(jsonRes));
                //await setReservation(reservation);
                //setSubmitError(false);
                //setSubmitSuccess(true);
                //setReservation({});
            //     setTimeout(() => {
            //       //setSubmitSuccess(false);
            //     }, 5000);
            //   } catch (error) {
            //     setSubmitSuccess(false);
            //     setSubmitError(true);
            //     setSubmitErrorMessage(error.message);
            //     setTimeout(() => {
            //       setSubmitError(false);
            //     }, 5000);
              }
                catch (error) {
                    console.log(error);
                }
        
        // // if no errors detected by validate
        // if (Object.keys(errors).length === 0) {
        //   // submit form data to server
        //   try {
        //     console.log(req);
        //     const res = await fetch('http://localhost:6002/api/reservations',req);
        //   const jsonRes = await res.json;
        //   setResponse(JSON.stringify(jsonRes));
        //     await setReservation(reservation);
        //     setSubmitError(false);
        //     setSubmitSuccess(true);
        //     setReservation({});
        //     setTimeout(() => {
        //       setSubmitSuccess(false);
        //     }, 5000);
        //   } catch (error) {
        //     setSubmitSuccess(false);
        //     setSubmitError(true);
        //     setSubmitErrorMessage(error.message);
        //     setTimeout(() => {
        //       setSubmitError(false);
        //     }, 5000);
        //   }
      
        // } else { // if there are errors in validation, set error message for the respective field
        //   Object.keys(errors).forEach((fieldName) => {
        //     setFormError(fieldName, errors[fieldName]);
        //   });
        // }
      }

    return (
        
        <div id="createReservationsUI">
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Create a new reservation
      </h1>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
        Enter the required details to create a new reservation.
      </p>
    </div>
  </div>

  <div className="mt-12 max-w-lg mx-auto">
    {/* ' Card ' */}
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
      <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
        Fill in the form
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 lg:gap-6">
          {/* ' Grid ' */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">First Name</label>
              <input type="text" onChange={handleChange} value={reservation.firstName} name="firstName" id="firstName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
              <input type="text" onChange={handleChange} value={reservation.lastName} name="lastName" id="lastName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>
          </div>
          {/* ' End Grid ' */}

          {/* ' Grid ' */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label htmlFor="emailAddress" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input type="email" onChange={handleChange} value={reservation.emailAddress} name="emailAddress" id="emailAddress" autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Phone Number</label>
              <input type="text"  onChange={handleChange} value={reservation.phoneNumber} name="phoneNumber" id="phoneNumber" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>
          </div>
          {/* ' End Grid ' */}

          <div>
              <label htmlFor="bookingDate" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Date</label>
              <input type="date" onChange={handleChange} value={reservation.bookingDate} name="bookingDate" id="bookingDate" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>

            <div>
              <label htmlFor="timeSlot" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Time</label>
              <input type="time" onChange={handleChange} value={reservation.timeSlot} name="timeSlot" id="timeSlot" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>

            <div>
              <label htmlFor="numberOfGuests" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Number of guests</label>
              <input type="text" onChange={handleChange} value={reservation.numberOfGuests} name="numberOfGuests" id="numberOfGuests" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>

          <div>
            <label htmlFor="specialRequest" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Special Requests</label>
            <input type="text" id="specialRequest" onChange={handleChange} value={reservation.specialRequest} name="specialRequest"  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"></input>
          </div>
        </div>
        {/* ' End Grid ' */}

        <div className="mt-6 grid">
          <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            
          </p>
        </div>
      </form>
    </div>
    {/* ' End Card ' */}
  </div>

  
</div>


        </div>
    );
}