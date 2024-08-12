// not used yet

export const getAllReservations = async () => {
    try {
        const response = await fetch('http://localhost:6002/api/reservations'); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

export const submitReservation = async (reservation) => {

}