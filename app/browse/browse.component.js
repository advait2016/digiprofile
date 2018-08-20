"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
//import { TextField } from "../../node_modules/tns-core-modules/ui/text-field/text-field";
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
        this.firstname = "";
        this.lastname = "";
        this.emailID = "";
        this.phone_number = "";
        this.LinkedIn = "";
        // Use the component constructor to inject providers.
    }
    BrowseComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    // Drawer Button function to open side-navigation bar
    BrowseComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    BrowseComponent.prototype.save = function () {
        console.log("hello");
        this.pref = require("nativescript-android-preferences");
        var lname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "lname"
        };
        lname.datavalue = this.lastname;
        this.pref.SavePreference(lname);
        lname.datavalue = "DefStringPreference";
        var fname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "fname"
        };
        fname.datavalue = this.firstname;
        this.pref.SavePreference(fname);
        fname.datavalue = "DefStringPreference";
        var email = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "email"
        };
        email.datavalue = this.emailID;
        this.pref.SavePreference(email);
        email.datavalue = "DefStringPreference";
        var ph1 = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "ph1"
        };
        ph1.datavalue = this.phone_number;
        this.pref.SavePreference(ph1);
        ph1.datavalue = "DefStringPreference";
        console.log(this.pref.GetPreference(lname) + " " + this.pref.GetPreference(fname) + " " + this.pref.GetPreference(email) + " " + this.pref.GetPreference(ph1));
    };
    BrowseComponent.prototype.show = function () {
        var fname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "fname"
        };
        var lname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "lname"
        };
        var email = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "email"
        };
        var ph1 = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "ph1"
        };
        console.log(this.pref.GetPreference(lname) + " " + this.pref.GetPreference(fname) + " " + this.pref.GetPreference(email) + " " + this.pref.GetPreference(ph1));
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: "Browse",
            moduleId: module.id,
            templateUrl: "./browse.component.html",
            styleUrls: ["./browse.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUNBQW1DO0FBR25DLDJGQUEyRjtBQVEzRjtJQU9JO1FBTk8sY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdqQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUNELHFEQUFxRDtJQUNyRCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN4RCxJQUFJLEtBQUssR0FBRztZQUNSLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDcEMsUUFBUSxFQUFFLE9BQU87U0FDcEIsQ0FBQTtRQUNELEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBRXhDLElBQUksS0FBSyxHQUFHO1lBQ1IsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsSUFB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Q25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzs7T0FDVyxlQUFlLENBd0czQjtJQUFELHNCQUFDO0NBQUEsQUF4R0QsSUF3R0M7QUF4R1ksMENBQWU7QUE0RzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBdUMwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkL3RleHQtZmllbGRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9icm93c2UuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBmaXJzdG5hbWUgPSBcIlwiO1xyXG4gICAgcHVibGljIGxhc3RuYW1lID0gXCJcIjtcclxuICAgIHB1YmxpYyBlbWFpbElEID0gXCJcIjtcclxuICAgIHB1YmxpYyBwaG9uZV9udW1iZXIgPSBcIlwiO1xyXG4gICAgcHVibGljIExpbmtlZEluID0gXCJcIjtcclxuICAgIHByZWY6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcbiAgICAvLyBEcmF3ZXIgQnV0dG9uIGZ1bmN0aW9uIHRvIG9wZW4gc2lkZS1uYXZpZ2F0aW9uIGJhclxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICAgICAgICB0aGlzLnByZWYgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZHJvaWQtcHJlZmVyZW5jZXNcIik7XHJcbiAgICAgICAgdmFyIGxuYW1lID0ge1xyXG4gICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgcHJlZm5hbWU6IFwibG5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBsbmFtZS5kYXRhdmFsdWUgPSB0aGlzLmxhc3RuYW1lXHJcbiAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKGxuYW1lKTtcclxuICAgICAgICBsbmFtZS5kYXRhdmFsdWUgPSBcIkRlZlN0cmluZ1ByZWZlcmVuY2VcIjtcclxuXHJcbiAgICAgICAgdmFyIGZuYW1lID0ge1xyXG4gICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgcHJlZm5hbWU6IFwiZm5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBmbmFtZS5kYXRhdmFsdWUgPSB0aGlzLmZpcnN0bmFtZTtcclxuICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UoZm5hbWUpO1xyXG4gICAgICAgIGZuYW1lLmRhdGF2YWx1ZSA9IFwiRGVmU3RyaW5nUHJlZmVyZW5jZVwiO1xyXG5cclxuICAgICAgICB2YXIgZW1haWwgPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJlbWFpbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVtYWlsLmRhdGF2YWx1ZSA9IHRoaXMuZW1haWxJRDtcclxuICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UoZW1haWwpO1xyXG4gICAgICAgIGVtYWlsLmRhdGF2YWx1ZSA9IFwiRGVmU3RyaW5nUHJlZmVyZW5jZVwiO1xyXG5cclxuICAgICAgICB2YXIgcGgxID0ge1xyXG4gICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgcHJlZm5hbWU6IFwicGgxXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcGgxLmRhdGF2YWx1ZSA9IHRoaXMucGhvbmVfbnVtYmVyO1xyXG4gICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShwaDEpO1xyXG4gICAgICAgIHBoMS5kYXRhdmFsdWUgPSBcIkRlZlN0cmluZ1ByZWZlcmVuY2VcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZWYuR2V0UHJlZmVyZW5jZShsbmFtZSkgKyBcIiBcIiArIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGZuYW1lKSArIFwiIFwiICsgdGhpcy5wcmVmLkdldFByZWZlcmVuY2UoZW1haWwpICsgXCIgXCIgKyB0aGlzLnByZWYuR2V0UHJlZmVyZW5jZShwaDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHZhciBmbmFtZSA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcImZuYW1lXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxuYW1lID0ge1xyXG4gICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgcHJlZm5hbWU6IFwibG5hbWVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVtYWlsID0ge1xyXG4gICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgcHJlZm5hbWU6IFwiZW1haWxcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBoMSA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcInBoMVwiXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVmLkdldFByZWZlcmVuY2UobG5hbWUpICsgXCIgXCIgKyB0aGlzLnByZWYuR2V0UHJlZmVyZW5jZShmbmFtZSkgKyBcIiBcIiArIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGVtYWlsKSArIFwiIFwiICsgdGhpcy5wcmVmLkdldFByZWZlcmVuY2UocGgxKSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqICBBbGxvd3MgdXNlciB0byBtYWtlIHRoZSB1c2VyIGluZm9ybWF0aW9uIGVkaXRhYmxlXHJcbiAgICAgKiBhbmQgYWxsb3dzIHRvIGFkZCBuZXcgZmllbGRzKG9mIHR5cGU6IGNvbnRhY3QsIGVtYWlsLCBhbmQgYWRkaXRpb25hbCB0ZXh0IGZpZWxkcy4gKVxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKlxyXG4gICAgICovXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAvKnZhciAgZm5hbWUgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcImZuYW1lXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB2YXIgIGxuYW1lID17XHJcbiAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICBwcmVmbmFtZTogXCJsbmFtZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAgdmFyIGVtYWlsID17XHJcbiAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICBwcmVmbmFtZTogXCJlbWFpbFwiXHJcbiAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICB2YXIgcGgxID17XHJcbiAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICBwcmVmbmFtZTogXCJwaDFcIlxyXG4gICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgIHZhciBwaDIgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcInBoMVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBwaDEuZGF0YXZhbHVlPVwiODAwNzc5NTgxN1wiO1xyXG4gICAgICAgICAgcGgyLmRhdGF2YWx1ZT1cIjk4OTg5ODk4OThcIjtcclxuICAgICAgICAgIGZuYW1lLmRhdGF2YWx1ZT1cIkFkdmFpdFwiO1xyXG4gICAgICAgICAgbG5hbWUuZGF0YXZhbHVlPVwiUHVuZGxpa1wiO1xyXG4gICAgICAgICAgZW1haWwuZGF0YXZhbHVlPVwiYWR2YWl0LnB1bmRsaWtAeG9yaWFudC5jb21cIjtcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKGZuYW1lKTtcclxuICAgICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShsbmFtZSk7XHJcbiAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UoZW1haWwpO1xyXG4gICAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKHBoMSk7XHJcbiAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UocGgyKTsgKi9cclxuIl19