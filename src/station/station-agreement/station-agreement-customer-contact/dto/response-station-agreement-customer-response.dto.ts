import { Expose } from "class-transformer";

export class ResponseStationAgreementCustomerContactDto {
    @Expose()
    id: number;

    @Expose()
    phone: string;

    @Expose()
    email: string;

    @Expose()
    onCall: boolean;

    customerId: number;
}