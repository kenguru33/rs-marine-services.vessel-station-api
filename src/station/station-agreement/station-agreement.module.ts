import { Module } from '@nestjs/common';
import { StationAgreementCustomerContactService } from './station-agreement-customer-contact/station-agreement-customer-contact.service';
import { StationAgreementCustomerService } from './station-agreement-customer/station-agreement-customer.service';
import { StationAgreementService } from './station-agreement.service';
import { StationAgreementCustomerContactController } from './station-agreement-customer-contact/station-agreement-customer-contact.controller';
import { StationAgreementCustomerController } from './station-agreement-customer/station-agreement-customer.controller';
import { StationAgreementController } from './station-agreement.controller';
import { DatabaseModule } from '../../database/database.module';
import { StationAgreementTypeController } from './station-agreement-type/station-agreement-type.controller';
import { StationAgreementTypeService } from './station-agreement-type/station-agreement-type.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    StationAgreementCustomerController,
    StationAgreementController,
    StationAgreementCustomerContactController,
    StationAgreementTypeController,
  ],
  providers: [
    StationAgreementService,
    StationAgreementCustomerService,
    StationAgreementCustomerContactService,
    StationAgreementTypeService,
  ],
  exports: [],
})
export class StationAgreementModule {}
