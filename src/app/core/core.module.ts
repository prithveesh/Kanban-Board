import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './services/http.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [HttpService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw new Error('Core Module is already loaded');
        }
    }

}
