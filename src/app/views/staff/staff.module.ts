import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {StaffComponent} from './staff.component';

// Dropdowns Component
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

// Buttons Routing
import {StaffRoutingModule} from './staff-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import {CreateStaffComponent} from './create-staff/create-staff.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

// Angular

@NgModule({
  imports: [
    CommonModule,
    StaffRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    StaffComponent,
    CreateStaffComponent,
  ],
  entryComponents: [CreateStaffComponent]
})
export class StaffModule {
}
