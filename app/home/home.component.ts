import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BarcodeScanner } from 'nativescript-barcodescanner';
class Contact {
    constructor(public name: string) { }
}

    @Component({

    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"

})
export class HomeComponent implements OnInit {

    public contacts: Array<Contact>;
    
    constructor(private barcodeScanner: BarcodeScanner) {
        
    }


    ngOnInit(): void {
        // Init your component properties here.
    }

    
    onDrawerButtonTap(): void {        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    fabTap(index): void {
        this.barcodeScanner.scan({
            cancelLabel: "Stop scanning",
            message: "Go scan something",
            preferFrontCamera: false,
            showFlipCameraButton: true
        }).then((result) => {

            console.log("Scan format: " + result.format);
            console.log("Scan text:   " + result.text);
            HomeComponent.SaveContact();
            var app = require( "application" );
            var contacts = require( "nativescript-contacts" );
            var newContact = new contacts.Contact();
            newContact.name.given = "Advait ";
            newContact.name.family = "Pundlik";
            newContact.phoneNumbers.push({ label: contacts.KnownLabel.HOME, value: "000000000" }); // See below for known labels
            newContact.phoneNumbers.push({ label: "My Custom Label", value: "1111111111" });
            newContact.save();
        
           
        }, (error) => {
            console.log("No scan: " + error);
        });
    }


   static SaveContact()
   {
        var app = require( "application" );
        var contacts = require( "nativescript-contacts" );
        var newContact = new contacts.Contact();
        newContact.name.given = "John";
        newContact.name.family = "Doe";
        newContact.phoneNumbers.push({ label: contacts.KnownLabel.HOME, value: "000000000" }); // See below for known labels
        newContact.phoneNumbers.push({ label: "My Custom Label", value: "1111111111" });
        newContact.save();
        alert("Contact saved");

    }
}
