import { Expose } from "class-transformer";
import { ResponseVesselDto } from "../../../dto/response-vessel.dto";

export class ResponseVesselInspectorDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    email: string;

    @Expose()
    phone: string;

    @Expose()
    address: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

    @Expose()
    vessels: ResponseVesselDto[];
}