import HotelCardProps from "@resort-site/types/hotel_class";
import hotelCards from "@resort-site/mocks/hotelCard_moks";

export function getHotels(): HotelCardProps[] {
  return hotelCards;
}
