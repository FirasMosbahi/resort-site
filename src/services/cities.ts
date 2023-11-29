import CityCardProps from "@resort-site/types/city_class";
import { cityCards } from "@resort-site/mocks";

export function getCities(): CityCardProps[] {
  return cityCards;
}
