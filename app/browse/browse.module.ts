import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { registerElement } from "nativescript-angular/element-registry";

import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIDataFormModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule
    ],
    declarations: [
        BrowseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
