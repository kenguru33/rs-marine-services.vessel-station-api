import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class ResponseStationAgreementCustomerContactDto {
    @ApiProperty({ example: 1 })
    @Expose()
    id: number;

    @ApiProperty({ example: '67577777' })
    @Expose()
    phone: string;

    @ApiProperty({ example: 'poost@hoorten-kommune.no' })
    @Expose()
    email: string;

    @ApiProperty({ example: true })
    @Expose()
    onCall: boolean;

    customerId: number;
}