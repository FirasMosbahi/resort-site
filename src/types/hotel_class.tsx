
class HotelCard {
    cityName: string;
    detail: string;
    imageUrl: string;
    rate: number;
    price: number;
    minimumStay: number;
    inclusive: boolean;
    detailEnfant: String;
    constructor(cityName: string, detail: string, imageUrl: string, rate: number, price: number, minimumStay: number, inclusive: boolean, detailEnfant: String) {
        this.cityName = cityName;
        this.detail = detail;
        this.imageUrl = imageUrl;
        this.rate = rate;
        this.price = price;
        this.minimumStay = minimumStay;
        this.inclusive = inclusive;
        this.detailEnfant = detailEnfant;
    }
}
