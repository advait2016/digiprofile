import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BarcodeScanner } from 'nativescript-barcodescanner';
declare var android :any;
class Contact {
    constructor(public name: string) { }
}

    @Component({

    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]

})
export class HomeComponent implements OnInit {

    public contacts: Array<Contact>;
    
    constructor(private barcodeScanner: BarcodeScanner) {
        var permissions = require('nativescript-permissions');
        permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, 
        "<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/> <uses-permission android:name=\"android.permission.READ_CONTACTS\" /> <uses-permission android:name=\"android.permission.WRITE_CONTACTS\"/>")
          .then(function() {
             console.log("Woo Hoo, I have the power!");
          })
          .catch(function() {
             console.log("Uh oh, no permissions - plan B time!");
          });
        
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
            var json= JSON.parse(result.text);
            var app = require( "application" );
            var contacts = require( "nativescript-contacts" );
            var newContact = new contacts.Contact();
            newContact.name.given = json.fname;
            newContact.name.family = json.lname;
            newContact.phoneNumbers.push({ label: contacts.KnownLabel.HOME, value: json.ph1 }); // See below for known labels
            newContact.emailAddresses.push({ label:contacts.KnownLabel.HOME, value:json.email });
            newContact.urls.push({ label:"linkedin", value:json.linkedin });
            newContact.save();

        }, (error) => {
            console.log("No scan: " + error);
        });
    }

    
    getpermissions(){
        var permissions = require('nativescript-permissions');
        permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, "I need these permissions because I'm cool")
     .then(function() {
        console.log("Woo Hoo, I have the power!");
       })
     .catch(function() {
      console.log("Uh oh, no permissions - plan B time!");
      });
    }
}
