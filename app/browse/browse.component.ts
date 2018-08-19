import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { registerElement } from "nativescript-angular/element-registry";
//import { TextField } from "../../node_modules/tns-core-modules/ui/text-field/text-field";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse.component.css"]
})
export class BrowseComponent implements OnInit  {

     pref:any;
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

    save()
    {
        console.log("hello");
        this.pref = require("nativescript-android-preferences");
            var lname ={
                datavalue: "",
                datatype: this.pref.DataTypes.STRING,
                prefname: "lname"
               }
            lname.datavalue="Doe"
            this.pref.SavePreference(lname);
            lname.datavalue = "DefStringPreference";

           var fname ={
                datavalue: "",
                datatype: this.pref.DataTypes.STRING,
                prefname: "fname"
               }
               fname.datavalue="john";
               this.pref.SavePreference(fname);
               fname.datavalue = "DefStringPreference";
              
                 var email ={
                datavalue: "",
                datatype: this.pref.DataTypes.STRING,
                prefname: "email"
               }   
               email.datavalue="johndoe@example.com";
               this.pref.SavePreference(email);
               email.datavalue="DefStringPreference";

               var ph1 ={
                datavalue: "",
                datatype: this.pref.DataTypes.STRING,
                prefname: "ph1"
               }
                ph1.datavalue="9876543210";
                this.pref.SavePreference(ph1);
                ph1.datavalue="DefStringPreference";
            console.log(this.pref.GetPreference(lname) +" "+ this.pref.GetPreference(fname)+ " " + this.pref.GetPreference(email) + " " +this.pref.GetPreference(ph1) );
   }

   show()
   {
   var fname ={
        datavalue: "",
        datatype: this.pref.DataTypes.STRING,
        prefname: "fname"
       }
     var  lname ={
        datavalue: "",
        datatype: this.pref.DataTypes.STRING,
        prefname: "lname"
       }
    
      var email ={
        datavalue: "",
        datatype: this.pref.DataTypes.STRING,
        prefname: "email"
       }   

       var ph1 ={
        datavalue: "",
        datatype: this.pref.DataTypes.STRING,
        prefname: "ph1"
       }
    
       
      console.log(this.pref.GetPreference(lname) +" "+ this.pref.GetPreference(fname)+ " " + this.pref.GetPreference(email) + " " + this.pref.GetPreference(ph1));
     
    }
   







    /**
     *  Allows user to make the user information editable
     * and allows to add new fields(of type: contact, email, and additional text fields. )
     * @param index
     *
     */

}



 /*var  fname ={
           datavalue: "",
           datatype: this.pref.DataTypes.STRING,
           prefname: "fname"
          }
        var  lname ={
           datavalue: "",
           datatype: this.pref.DataTypes.STRING,
           prefname: "lname"
          }
       
         var email ={
           datavalue: "",
           datatype: this.pref.DataTypes.STRING,
           prefname: "email"
          }   
          var ph1 ={
           datavalue: "",
           datatype: this.pref.DataTypes.STRING,
           prefname: "ph1"
          }
   
          var ph2 ={
           datavalue: "",
           datatype: this.pref.DataTypes.STRING,
           prefname: "ph1"
          }
           
          ph1.datavalue="8007795817";
          ph2.datavalue="9898989898";
          fname.datavalue="Advait";
          lname.datavalue="Pundlik";
          email.datavalue="advait.pundlik@xoriant.com";

         
          this.pref.SavePreference(fname);
          this.pref.SavePreference(lname);
          this.pref.SavePreference(email);
          this.pref.SavePreference(ph1);
          this.pref.SavePreference(ph2); */
