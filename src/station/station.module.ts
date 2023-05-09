import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { StationTypeService } from './station-type/station-type.service';
import { StationTypeController } from './station-type/station-type.controller';
import { StationAccommodationController } from './station-accommodation/station-accommodation.controller';
import { StationAccommodationService } from './station-accommodation/station-accommodation.service';
import { StationAccommodationTypeService } from './station-accommodation-type/station-accommodation-type.service';
import { StationAccommodationTypeController } from './station-accommodation-type/station-accommodation-type.controller';
import { StationPierService } from '../station-pier/station-pier.service';
import { StationPierController } from '../station-pier/station-pier.controller';
import { StationPierTypeService } from '../station-pier/station-pier-type/station-pier-type.service';
import { StationPierTypeController } from '../station-pier/station-pier-type/station-pier-type.controller';
import { DatabaseModule } from '../database/database.module';
import { StationAgreementService } from '../station-agreement/station-agreement.service';
import { StationAgreementCustomerService } from '../station-agreement/station-agreement-customer/station-agreement-customer.service';
import { StationAgreementCustomerContactService } from '../station-agreement/station-agreement-customer-contact/station-agreement-customer-contact.service';
import { StationAgreementCustomerController } from '../station-agreement/station-agreement-customer/station-agreement-customer.controller';
import { StationAgreementController } from '../station-agreement/station-agreement.controller';
import { StationAgreementCustomerContactController } from '../station-agreement/station-agreement-customer-contact/station-agreement-customer-contact.controller';
import { StationAgreementModule } from '../station-agreement/station-agreement.module';
import { StationPierModule } from '../station-pier/station-pier.module';

@Module({
  imports: [DatabaseModule, StationAgreementModule, StationPierModule],
  providers: [
    StationService,
    StationTypeService,
    StationAccommodationService,
    StationAccommodationTypeService,
    // StationPierService,
    // StationPierTypeService,
    //StationAgreementService,
    //StationAgreementCustomerService,
    //StationAgreementCustomerContactService
  ],
  controllers: [
    StationController,
    StationTypeController,
    StationAccommodationController,
    StationAccommodationTypeController,
    // StationPierController,
    // StationPierTypeController,
    // StationAgreementCustomerController,
    // StationAgreementController,
    // StationAgreementCustomerContactController
  ],
  exports: [StationService],
})
export class StationModule {}
