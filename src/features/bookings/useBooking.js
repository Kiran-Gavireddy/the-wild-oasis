import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    //by default react query makes 3 calls to get data. with retry allowing react to make one api call only.
    retry: false,
  });
  return {
    isLoading,
    booking,
    error,
  };
}
