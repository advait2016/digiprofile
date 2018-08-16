import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse.component.css"]
})
export class BrowseComponent implements OnInit {
    info: { fname: string, lname: string, p_no1: number, p_no2: number, p_no3: number, e1: string, e2: string } = {
        fname: "Ed Sheeran",
        lname: "X",
        p_no1: 2017,
        p_no2: 1,
        p_no3: 9.5,
        e1: "",
        e2: ""
    };

    //to add fields via fab

    fieldArray: Array<any> = [];
    newAttribute: any = {};

    // firstField = true;
    // firstFieldName = 'First Item name';
    isEditItems: boolean;

    //form fields
    textfield = "";
    textfield1 = "";
    textfield2 = "";

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    fabTap(index): void {
        console.log("tapped");
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};

        console.log(this.fieldArray.toString())
    }
    // addFieldValue(index) {
    //     if (this.fieldArray.length <= 2) {
    //         this.fieldArray.push(this.newAttribute);
    //         this.newAttribute = {};
    //     }
    // }
}
