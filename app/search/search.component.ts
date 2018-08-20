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
    
   

    fname: string="rrrrr"; lname: string="eeeeeee"; email :string="advait.pundlik@xoriant.com";  ph1:string="8007795817";  ph2:string="9876543210";
    data = "{\"fname\": " + this.fname + "," + "\"lname\": "+ this.lname+ "," + "\"email\":" + this.email + "," + "\"ph1\":" + this.ph1  + "," +  "\"ph2\":" + this.ph2 + "}"
      
    public barcodeText = new String();
    constructor() {
        this.tabSelectedIndex = 1;
    }




    ngOnInit(): void {
        // Init your component properties here.
    }

    generateBarCode() {

        this.pref = require("nativescript-android-preferences");
        var fname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "fname"
        }
        var lname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "lname"
        }

        var email = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "email"
        }

        var ph1 = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "ph1"
        }

        this.fname =this.pref.GetPreference(lname) ;
        this.lname= this.pref.GetPreference(fname) ;
        this.email =this.pref.GetPreference(email) ;
        this.ph1 = this.pref.GetPreference(ph1);
        this.data = "{\"fname\": " + "\""+this.fname+"\""+","+"\"lname\":"+ "\""+this.lname +"\""+","+"\"email\":" + "\"" + this.email +"\""+ "," + "\"ph1\":" + "\"" + this.ph1 + "\"" + "," + "\"ph2\":" + "\"" +this.ph2 + "\"" + "}"
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

    pref:any;

    show() {

        this.pref = require("nativescript-android-preferences");
        var fname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "fname"
        }
        var lname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "lname"
        }

        var email = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "email"
        }

        var ph1 = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "ph1"
        }


     this.pref.GetPreference(lname) ;
     this.pref.GetPreference(fname) 
     this.pref.GetPreference(email) 
     this.pref.GetPreference(ph1);

    }






}