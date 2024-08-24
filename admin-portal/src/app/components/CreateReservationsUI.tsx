import { FormEvent, useEffect, useState } from 'react';

const START_TIME=process.env.NEXT_PUBLIC_RESTAURANT_START_TIME || "11:00 AM";
const END_TIME=process.env.NEXT_PUBLIC_RESTAURANT_END_TIME || "09:00 PM";

export default function CreateReservationsUI({ syncReservations }: any) {

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [timeSlots, setTimeSlots] = useState(generateTimeIntervals());

  useEffect(() => { 
    
  }, []);

  const closeMessage = () => {
    setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 3000);
  }

  const restaurantId = process.env.NEXT_PUBLIC_RESTAURANT_ID;
  console.log("RESTAURANT_ID: " + process.env.NEXT_PUBLIC_RESTAURANT_ID);
  const emptyReservation = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    bookingDate: "",
    timeSlot: "",
    numberOfGuests: "",
    specialRequest: "",
    reservationFor: restaurantId
  };

  const [reservation, setReservation] = useState(emptyReservation);

  const handleChange = (event: any) => {
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // building the request object which POST the form data to the Booking service
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation)
    };
    try {
      console.log(req);
      const res = await fetch('http://localhost:6002/api/reservations', req);
      const jsonRes = await res.json;
      console.log(jsonRes);
      setReservation(emptyReservation);
      if (res.status === 200) {
        setSuccessMessage("Reservation created successfully");
      }
      else {
        setErrorMessage("Failed to create reservation");
      }
      closeMessage();
    }
    catch (error) {
      console.log(error);
    }

  }



  function generateTimeIntervals() {
    const startTime = START_TIME || "11:00 AM";
    const endTime = END_TIME || "09:00 PM";
  
    const intervals = [];
    let current = convertToMinutes(startTime);
    const end = convertToMinutes(endTime);
  
    while (current <= end) {
      intervals.push(formatTime(current));
      current += 15;
    }
  
    return intervals;
  }
  
  function convertToMinutes(time: string) {
    const [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);
  
    if (modifier === 'PM' && hours !== 12) {
      hours += 12;
    }
    if (modifier === 'AM' && hours === 12) {
      hours = 0;
    }
  
    return hours * 60 + minutes;
  }
  
  function formatTime(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = String(mins).padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes} ${period}`;
  }


  const generateTimeOptions = () => {
    const startTime = START_TIME;
    const endTime = END_TIME;
    const timeOptions = [];

    // Convert start and end time to Date objects
    const startDate = new Date();
    startDate.setHours(Number(startTime.split(':')[0]), Number(startTime.split(':')[1]), 0, 0);
    const endDate = new Date();
    endDate.setHours(Number(endTime.split(':')[0]), Number(endTime.split(':')[1]), 0, 0);

    // Generate time options with 15-minute intervals
    let currentTime = startDate;
    while (currentTime <= endDate) {
      const time = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      timeOptions.push(<option key={time} value={time}>{time}</option>);
      currentTime.setMinutes(currentTime.getMinutes() + 15);
    }
    console.log(timeOptions);
    return timeOptions;
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
              (All fields marked with * are mandatory).
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
                    <label htmlFor="firstName" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">First Name *</label>
                    <input type="text" onChange={handleChange} value={reservation.firstName} name="firstName" id="firstName" required className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
                    <input type="text" onChange={handleChange} value={reservation.lastName} name="lastName" id="lastName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                  </div>
                </div>
                {/* ' End Grid ' */}

                {/* ' Grid ' */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="emailAddress" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
                    <input type="email" onChange={handleChange} value={reservation.emailAddress} name="emailAddress" id="emailAddress" autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Phone Number *</label>
                    <input type="text" onChange={handleChange} value={reservation.phoneNumber} name="phoneNumber" id="phoneNumber" required className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                  </div>
                </div>
                {/* ' End Grid ' */}

                <div>
                  <label htmlFor="bookingDate" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Date *</label>
                  <input type="date" onChange={handleChange} value={reservation.bookingDate} name="bookingDate" id="bookingDate" required className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Time *</label>
                  <select onChange={handleChange} value={reservation.timeSlot} name="timeSlot" id="timeSlot" required className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>



                <div>
                  <label htmlFor="numberOfGuests" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Number of guests *</label>
                  <input type="text" onChange={handleChange} value={reservation.numberOfGuests} name="numberOfGuests" id="numberOfGuests" required className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>

                <div>
                  <label htmlFor="specialRequest" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Special Requests</label>
                  <input type="text" id="specialRequest" onChange={handleChange} value={reservation.specialRequest} name="specialRequest" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"></input>
                </div>
              </div>
              {/* ' End Grid ' */}

              <div className="mt-6 grid">
                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
              </div>

              {errorMessage && (
                <div className="text-red-500 mt-4">{errorMessage}</div>
              )}

              {successMessage && (
                <div className="text-green-500 mt-4">{successMessage}</div>
              )}

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