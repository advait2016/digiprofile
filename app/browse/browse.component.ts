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

    // to add fields via fab
    fieldArray: Array<any> = [];
    newAttribute: any = {};

    // Added isEditIcon to allow to track whether adding icon or edit icon is to be displayed.
    isEditIcon: boolean = false;

    // To check if editing is enabled.
    isEditItems: boolean;

    // form fields
    textfield = "";
    textfield1 = "";
    textfield2 = "";

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    // Drawer Button function to open side-navigation bar
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    /**
     *  Allows user to make the user information editable
     * and allows to add new fields(of type: contact, email, and additional text fields. )
     * @param index
     *
     */

    fabTap(index): void {
        this.isEditIcon = true;
        console.log("tapped");
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
        console.log(this.fieldArray.toString());
    }
}
