import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { StationTypeService } from './station-type/station-type.service';
import { StationTypeController } from './station-type/station-type.controller';
import { StationAccommodationController } from './modules/station-accommodation/station-accommodation.controller';
import { StationAccommodationService } from './modules/station-accommodation/station-accommodation.service';
import { StationAccommodationTypeService } from './modules/station-accommodation/station-accommodation-type/station-accommodation-type.service';
import { StationAccommodationTypeController } from './modules/station-accommodation/station-accommodation-type/station-accommodation-type.controller';
import { StationPierService } from './modules/station-pier/station-pier.service';
import { StationPierController } from './modules/station-pier/station-pier.controller';
import { StationPierTypeService } from './modules/station-pier/station-pier-type/station-pier-type.service';
import { StationPierTypeController } from './modules/station-pier/station-pier-type/station-pier-type.controller';
import { DatabaseModule } from '../../database/database.module';
import { StationAgreementService } from './modules/station-agreement/station-agreement.service';
import { StationAgreementCustomerService } from './modules/station-agreement/station-agreement-customer/station-agreement-customer.service';
import { StationAgreementCustomerContactService } from './modules/station-agreement/station-agreement-customer-contact/station-agreement-customer-contact.service';
import { StationAgreementCustomerController } from './modules/station-agreement/station-agreement-customer/station-agreement-customer.controller';
import { StationAgreementController } from './modules/station-agreement/station-agreement.controller';
import { StationAgreementCustomerContactController } from './modules/station-agreement/station-agreement-customer-contact/station-agreement-customer-contact.controller';
import { StationAgreementModule } from './modules/station-agreement/station-agreement.module';
import { StationPierModule } from './modules/station-pier/station-pier.module';
import { StationAccommodationModule } from './modules/station-accommodation/station.accommodation.module';

@Module({
  imports: [
    DatabaseModule,
    StationAgreementModule,
    StationPierModule,
    StationAccommodationModule,
  ],
  providers: [
    StationService,
    StationTypeService,
    // StationAccommodationService,
    // StationAccommodationTypeService,
    // StationPierService,
    // StationPierTypeService,
    //StationAgreementService,
    //StationAgreementCustomerService,
    //StationAgreementCustomerContactService
  ],
  controllers: [
    StationController,
    StationTypeController,
    // StationAccommodationController,
    // StationAccommodationTypeController,
    // StationPierController,
    // StationPierTypeController,
    // StationAgreementCustomerController,
    // StationAgreementController,
    // StationAgreementCustomerContactController
  ],
  exports: [StationService],
})
export class StationModule {}
