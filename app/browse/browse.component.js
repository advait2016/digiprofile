"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
//import { TextField } from "../../node_modules/tns-core-modules/ui/text-field/text-field";
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
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
        lname.datavalue = "Doe";
        this.pref.SavePreference(lname);
        lname.datavalue = "DefStringPreference";
        var fname = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "fname"
        };
        fname.datavalue = "john";
        this.pref.SavePreference(fname);
        fname.datavalue = "DefStringPreference";
        var email = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "email"
        };
        email.datavalue = "johndoe@example.com";
        this.pref.SavePreference(email);
        email.datavalue = "DefStringPreference";
        var ph1 = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "ph1"
        };
        ph1.datavalue = "9876543210";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUNBQW1DO0FBR25DLDJGQUEyRjtBQVEzRjtJQUdJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFDRCxxREFBcUQ7SUFDckQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxLQUFLLEdBQUU7WUFDUCxTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3BDLFFBQVEsRUFBRSxPQUFPO1NBQ2pCLENBQUE7UUFDSixLQUFLLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBRXpDLElBQUksS0FBSyxHQUFFO1lBQ04sU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNwQyxRQUFRLEVBQUUsT0FBTztTQUNqQixDQUFBO1FBQ0QsS0FBSyxDQUFDLFNBQVMsR0FBQyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FB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MENBdUMwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkL3RleHQtZmllbGRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9icm93c2UuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XHJcblxyXG4gICAgIHByZWY6YW55O1xyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcbiAgICAvLyBEcmF3ZXIgQnV0dG9uIGZ1bmN0aW9uIHRvIG9wZW4gc2lkZS1uYXZpZ2F0aW9uIGJhclxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbiAgICAgICAgdGhpcy5wcmVmID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmRyb2lkLXByZWZlcmVuY2VzXCIpO1xyXG4gICAgICAgICAgICB2YXIgbG5hbWUgPXtcclxuICAgICAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgICAgIHByZWZuYW1lOiBcImxuYW1lXCJcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsbmFtZS5kYXRhdmFsdWU9XCJEb2VcIlxyXG4gICAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UobG5hbWUpO1xyXG4gICAgICAgICAgICBsbmFtZS5kYXRhdmFsdWUgPSBcIkRlZlN0cmluZ1ByZWZlcmVuY2VcIjtcclxuXHJcbiAgICAgICAgICAgdmFyIGZuYW1lID17XHJcbiAgICAgICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgICAgICBwcmVmbmFtZTogXCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZm5hbWUuZGF0YXZhbHVlPVwiam9oblwiO1xyXG4gICAgICAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UoZm5hbWUpO1xyXG4gICAgICAgICAgICAgICBmbmFtZS5kYXRhdmFsdWUgPSBcIkRlZlN0cmluZ1ByZWZlcmVuY2VcIjtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPXtcclxuICAgICAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgICAgIHByZWZuYW1lOiBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICBlbWFpbC5kYXRhdmFsdWU9XCJqb2huZG9lQGV4YW1wbGUuY29tXCI7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShlbWFpbCk7XHJcbiAgICAgICAgICAgICAgIGVtYWlsLmRhdGF2YWx1ZT1cIkRlZlN0cmluZ1ByZWZlcmVuY2VcIjtcclxuXHJcbiAgICAgICAgICAgICAgIHZhciBwaDEgPXtcclxuICAgICAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgICAgIHByZWZuYW1lOiBcInBoMVwiXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBoMS5kYXRhdmFsdWU9XCI5ODc2NTQzMjEwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UocGgxKTtcclxuICAgICAgICAgICAgICAgIHBoMS5kYXRhdmFsdWU9XCJEZWZTdHJpbmdQcmVmZXJlbmNlXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGxuYW1lKSArXCIgXCIrIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGZuYW1lKSsgXCIgXCIgKyB0aGlzLnByZWYuR2V0UHJlZmVyZW5jZShlbWFpbCkgKyBcIiBcIiArdGhpcy5wcmVmLkdldFByZWZlcmVuY2UocGgxKSApO1xyXG4gICB9XHJcblxyXG4gICBzaG93KClcclxuICAge1xyXG4gICB2YXIgZm5hbWUgPXtcclxuICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgIHByZWZuYW1lOiBcImZuYW1lXCJcclxuICAgICAgIH1cclxuICAgICB2YXIgIGxuYW1lID17XHJcbiAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICBwcmVmbmFtZTogXCJsbmFtZVwiXHJcbiAgICAgICB9XHJcbiAgICBcclxuICAgICAgdmFyIGVtYWlsID17XHJcbiAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICBwcmVmbmFtZTogXCJlbWFpbFwiXHJcbiAgICAgICB9ICAgXHJcblxyXG4gICAgICAgdmFyIHBoMSA9e1xyXG4gICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgcHJlZm5hbWU6IFwicGgxXCJcclxuICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGxuYW1lKSArXCIgXCIrIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGZuYW1lKSsgXCIgXCIgKyB0aGlzLnByZWYuR2V0UHJlZmVyZW5jZShlbWFpbCkgKyBcIiBcIiArIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKHBoMSkpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqICBBbGxvd3MgdXNlciB0byBtYWtlIHRoZSB1c2VyIGluZm9ybWF0aW9uIGVkaXRhYmxlXHJcbiAgICAgKiBhbmQgYWxsb3dzIHRvIGFkZCBuZXcgZmllbGRzKG9mIHR5cGU6IGNvbnRhY3QsIGVtYWlsLCBhbmQgYWRkaXRpb25hbCB0ZXh0IGZpZWxkcy4gKVxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKlxyXG4gICAgICovXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAvKnZhciAgZm5hbWUgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcImZuYW1lXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB2YXIgIGxuYW1lID17XHJcbiAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICBwcmVmbmFtZTogXCJsbmFtZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAgdmFyIGVtYWlsID17XHJcbiAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICBwcmVmbmFtZTogXCJlbWFpbFwiXHJcbiAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICB2YXIgcGgxID17XHJcbiAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICBwcmVmbmFtZTogXCJwaDFcIlxyXG4gICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgIHZhciBwaDIgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcInBoMVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBwaDEuZGF0YXZhbHVlPVwiODAwNzc5NTgxN1wiO1xyXG4gICAgICAgICAgcGgyLmRhdGF2YWx1ZT1cIjk4OTg5ODk4OThcIjtcclxuICAgICAgICAgIGZuYW1lLmRhdGF2YWx1ZT1cIkFkdmFpdFwiO1xyXG4gICAgICAgICAgbG5hbWUuZGF0YXZhbHVlPVwiUHVuZGxpa1wiO1xyXG4gICAgICAgICAgZW1haWwuZGF0YXZhbHVlPVwiYWR2YWl0LnB1bmRsaWtAeG9yaWFudC5jb21cIjtcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKGZuYW1lKTtcclxuICAgICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShsbmFtZSk7XHJcbiAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UoZW1haWwpO1xyXG4gICAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKHBoMSk7XHJcbiAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UocGgyKTsgKi9cclxuIl19