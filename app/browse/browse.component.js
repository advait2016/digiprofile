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
        var linkedin = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "linkedin"
        };
        linkedin.datavalue = this.LinkedIn;
        this.pref.SavePreference(linkedin);
        linkedin.datavalue = "DefStringPreference";
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
        var linkedin = {
            datavalue: "",
            datatype: this.pref.DataTypes.STRING,
            prefname: "linkedin"
        };
        console.log(this.pref.GetPreference(lname) + " " + this.pref.GetPreference(fname) + " " + this.pref.GetPreference(email) + " " + this.pref.GetPreference(ph1) + " " + this.pref.GetPreference(linkedin));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUNBQW1DO0FBR25DLDJGQUEyRjtBQVEzRjtJQU9JO1FBTk8sY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdqQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUNELHFEQUFxRDtJQUNyRCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN4RCxJQUFJLEtBQUssR0FBRztZQUNSLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDcEMsUUFBUSxFQUFFLE9BQU87U0FDcEIsQ0FBQTtRQUNELEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBRXhDLElBQUksS0FBSyxHQUFHO1lBQ1IsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsSUFB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U0FBUyxDQUFDLE1BQU07WUFDcEMsUUFBUSxFQUFFLFVBQVU7U0FDdkIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUMsR0FBRyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFMU0sQ0FBQztJQXZHUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDOztPQUNXLGVBQWUsQ0F1SDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZIRCxJQXVIQztBQXZIWSwwQ0FBZTtBQTJIM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0F1QzBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy90bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQvdGV4dC1maWVsZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJCcm93c2VcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2Jyb3dzZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGZpcnN0bmFtZSA9IFwiXCI7XHJcbiAgICBwdWJsaWMgbGFzdG5hbWUgPSBcIlwiO1xyXG4gICAgcHVibGljIGVtYWlsSUQgPSBcIlwiO1xyXG4gICAgcHVibGljIHBob25lX251bWJlciA9IFwiXCI7XHJcbiAgICBwdWJsaWMgTGlua2VkSW4gPSBcIlwiO1xyXG4gICAgcHJlZjogYW55O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuICAgIC8vIERyYXdlciBCdXR0b24gZnVuY3Rpb24gdG8gb3BlbiBzaWRlLW5hdmlnYXRpb24gYmFyXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gICAgICAgIHRoaXMucHJlZiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5kcm9pZC1wcmVmZXJlbmNlc1wiKTtcclxuICAgICAgICB2YXIgbG5hbWUgPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJsbmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxuYW1lLmRhdGF2YWx1ZSA9IHRoaXMubGFzdG5hbWVcclxuICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UobG5hbWUpO1xyXG4gICAgICAgIGxuYW1lLmRhdGF2YWx1ZSA9IFwiRGVmU3RyaW5nUHJlZmVyZW5jZVwiO1xyXG5cclxuICAgICAgICB2YXIgZm5hbWUgPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJmbmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZuYW1lLmRhdGF2YWx1ZSA9IHRoaXMuZmlyc3RuYW1lO1xyXG4gICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShmbmFtZSk7XHJcbiAgICAgICAgZm5hbWUuZGF0YXZhbHVlID0gXCJEZWZTdHJpbmdQcmVmZXJlbmNlXCI7XHJcblxyXG4gICAgICAgIHZhciBlbWFpbCA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcImVtYWlsXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZW1haWwuZGF0YXZhbHVlID0gdGhpcy5lbWFpbElEO1xyXG4gICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShlbWFpbCk7XHJcbiAgICAgICAgZW1haWwuZGF0YXZhbHVlID0gXCJEZWZTdHJpbmdQcmVmZXJlbmNlXCI7XHJcblxyXG4gICAgICAgIHZhciBwaDEgPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJwaDFcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBwaDEuZGF0YXZhbHVlID0gdGhpcy5waG9uZV9udW1iZXI7XHJcbiAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKHBoMSk7XHJcbiAgICAgICAgcGgxLmRhdGF2YWx1ZSA9IFwiRGVmU3RyaW5nUHJlZmVyZW5jZVwiO1xyXG5cclxuICAgICAgICB2YXIgbGlua2VkaW4gPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJsaW5rZWRpblwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmtlZGluLmRhdGF2YWx1ZSA9IHRoaXMuTGlua2VkSW47XHJcbiAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKGxpbmtlZGluKTtcclxuICAgICAgICBsaW5rZWRpbi5kYXRhdmFsdWUgPSBcIkRlZlN0cmluZ1ByZWZlcmVuY2VcIjtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVmLkdldFByZWZlcmVuY2UobG5hbWUpICsgXCIgXCIgKyB0aGlzLnByZWYuR2V0UHJlZmVyZW5jZShmbmFtZSkgKyBcIiBcIiArIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGVtYWlsKSArIFwiIFwiICsgdGhpcy5wcmVmLkdldFByZWZlcmVuY2UocGgxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB2YXIgZm5hbWUgPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJmbmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsbmFtZSA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcImxuYW1lXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBlbWFpbCA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcImVtYWlsXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwaDEgPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJwaDFcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxpbmtlZGluID0ge1xyXG4gICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgcHJlZm5hbWU6IFwibGlua2VkaW5cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVmLkdldFByZWZlcmVuY2UobG5hbWUpICsgXCIgXCIgKyB0aGlzLnByZWYuR2V0UHJlZmVyZW5jZShmbmFtZSkgKyBcIiBcIiArIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGVtYWlsKSArIFwiIFwiICsgdGhpcy5wcmVmLkdldFByZWZlcmVuY2UocGgxKStcIiBcIisgdGhpcy5wcmVmLkdldFByZWZlcmVuY2UobGlua2VkaW4pKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIEFsbG93cyB1c2VyIHRvIG1ha2UgdGhlIHVzZXIgaW5mb3JtYXRpb24gZWRpdGFibGVcclxuICAgICAqIGFuZCBhbGxvd3MgdG8gYWRkIG5ldyBmaWVsZHMob2YgdHlwZTogY29udGFjdCwgZW1haWwsIGFuZCBhZGRpdGlvbmFsIHRleHQgZmllbGRzLiApXHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqXHJcbiAgICAgKi9cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIC8qdmFyICBmbmFtZSA9e1xyXG4gICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgcHJlZm5hbWU6IFwiZm5hbWVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHZhciAgbG5hbWUgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcImxuYW1lXCJcclxuICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICB2YXIgZW1haWwgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcImVtYWlsXCJcclxuICAgICAgICAgIH0gICBcclxuICAgICAgICAgIHZhciBwaDEgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcInBoMVwiXHJcbiAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgdmFyIHBoMiA9e1xyXG4gICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgcHJlZm5hbWU6IFwicGgxXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgIHBoMS5kYXRhdmFsdWU9XCI4MDA3Nzk1ODE3XCI7XHJcbiAgICAgICAgICBwaDIuZGF0YXZhbHVlPVwiOTg5ODk4OTg5OFwiO1xyXG4gICAgICAgICAgZm5hbWUuZGF0YXZhbHVlPVwiQWR2YWl0XCI7XHJcbiAgICAgICAgICBsbmFtZS5kYXRhdmFsdWU9XCJQdW5kbGlrXCI7XHJcbiAgICAgICAgICBlbWFpbC5kYXRhdmFsdWU9XCJhZHZhaXQucHVuZGxpa0B4b3JpYW50LmNvbVwiO1xyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UoZm5hbWUpO1xyXG4gICAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKGxuYW1lKTtcclxuICAgICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShlbWFpbCk7XHJcbiAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UocGgxKTtcclxuICAgICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShwaDIpOyAqL1xyXG4iXX0=