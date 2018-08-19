import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Image } from "tns-core-modules/ui/image";
import { TextField } from "ui/text-field";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
const ZXing = require("nativescript-zxing");
const ImageSource = require("image-source");

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    @ViewChild("barcodeImg") barcodeImg: ElementRef;
    tabSelectedIndex: number;
    
    /*data = new Array("BEGIN:VCARD",
        "VERSION:3.0",
        "N:Doe;John;;;",
        "FN:John Doe",
        "ORG:Example.com Inc.;",
        "TITLE:Imaginary test person",
        "EMAIL;type=INTERNET;type=WORK;type=pref:johnDoe@example.org",
        "TEL;type=WORK;type=pref:+1 617 555 1212",
        "TEL;type=WORK:+1 (617) 555-1234",
        "TEL;type=CELL:+1 781 555 1212",
        "TEL;type=HOME:+1 202 555 1212",
        "item1.ADR;type=WORK:;;2 Enterprise Avenue;Worktown;NY;01111;USA",
        "item1.X-ABADR:us",
        "item2.ADR;type=HOME;type=pref:;;3 Acacia Avenue;Hoemtown;MA;02222;USA",
        "item2.X-ABADR:us",
        "NOTE:John Doe has a long and varied history\, being documented on more police files that anyone else. Reports of his death are alas numerous.",
        "item3.URL;type=pref:http\://www.example/com/doe",
        "item3.X-ABLabel:_$!<HomePage>!$_",
        "item4.URL:http\://www.example.com/Joe/foaf.df",
        "item4.X-ABLabel:FOAF",
        "item5.X-ABRELATEDNAMES;type=pref:Jane Doe",
        "item5.X-ABLabel:_$!<Friend>!$_",
        "CATEGORIES:Work,Test group",
        "X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\:ABPerson",
        "END:VCARD");*/

        fname:string; lname:string; email:string; ph1:string ; ph2:string; 
        data:string = "{ fname:"+this.fname+"lname:"+ this.lname + "email:"+this.email + "ph1:"+ this.ph1 +"ph2:"+ this.ph2 +"}"

    public barcodeText = new String();
    constructor() {
        this.tabSelectedIndex = 1;
    }




    ngOnInit(): void {
        // Init your component properties here.
    }

    generateBarCode() {
    
        this.barcodeText = this.data;
        const barcodeImage = <Image>this.barcodeImg.nativeElement;
        const zx = new ZXing();
        const newImg = zx.createBarcode({
            encode: this.barcodeText,
            formats: [ZXing.QR_CODE, ZXing.ITF]
        });
        barcodeImage.imageSource = ImageSource.fromNativeSource(newImg);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    changeTab() {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        } else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        } else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    }
}