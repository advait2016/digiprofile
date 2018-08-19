"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var element_registry_1 = require("nativescript-angular/element-registry");
//import { TextField } from "../../node_modules/tns-core-modules/ui/text-field/text-field";
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
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
        this.pref = require("nativescript-android-preferences");
        var options = {
            datavalue: "XORIANT",
            datatype: this.pref.DataTypes.STRING,
            prefname: "KEY"
        };
        this.pref.SavePreference(options);
        options.datavalue = "DefStringPreference";
        console.log("hello");
    };
    BrowseComponent.prototype.show = function () {
        alert(this.pref.GetPreference("KEY"));
        console.log("hello");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUNBQW1DO0FBRW5DLDBFQUF3RTtBQUN4RSwyRkFBMkY7QUFJM0Ysa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBUS9FO0lBR0k7UUFDSSxxREFBcUQ7SUFDekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUNELHFEQUFxRDtJQUNyRCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxPQUFPLEdBQUc7WUFDWixTQUFTLEVBQUUsU0FBUztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNwQyxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0csS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBaENRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7O09BQ1csZUFBZSxDQWdEM0I7SUFBRCxzQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLDBDQUFlO0FBb0QzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQXVDMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuLy9pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZC90ZXh0LWZpZWxkXCI7XHJcblxyXG5cclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIkZhYlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkJyb3dzZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYnJvd3NlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYnJvd3NlLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJyb3dzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG5cclxuICAgICBwcmVmOmFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG4gICAgLy8gRHJhd2VyIEJ1dHRvbiBmdW5jdGlvbiB0byBvcGVuIHNpZGUtbmF2aWdhdGlvbiBiYXJcclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnByZWYgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZHJvaWQtcHJlZmVyZW5jZXNcIik7XHJcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlhPUklBTlRcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJLRVlcIlxyXG4gICAgICAgIH0gICBcclxuICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShvcHRpb25zKTtcclxuICAgICAgIG9wdGlvbnMuZGF0YXZhbHVlID0gXCJEZWZTdHJpbmdQcmVmZXJlbmNlXCI7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gICB9XHJcblxyXG4gICBzaG93KCl7XHJcbiAgICAgIGFsZXJ0KHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKFwiS0VZXCIpKTsgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbiAgICB9XHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIEFsbG93cyB1c2VyIHRvIG1ha2UgdGhlIHVzZXIgaW5mb3JtYXRpb24gZWRpdGFibGVcclxuICAgICAqIGFuZCBhbGxvd3MgdG8gYWRkIG5ldyBmaWVsZHMob2YgdHlwZTogY29udGFjdCwgZW1haWwsIGFuZCBhZGRpdGlvbmFsIHRleHQgZmllbGRzLiApXHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqXHJcbiAgICAgKi9cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIC8qdmFyICBmbmFtZSA9e1xyXG4gICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgcHJlZm5hbWU6IFwiZm5hbWVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHZhciAgbG5hbWUgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcImxuYW1lXCJcclxuICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICB2YXIgZW1haWwgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcImVtYWlsXCJcclxuICAgICAgICAgIH0gICBcclxuICAgICAgICAgIHZhciBwaDEgPXtcclxuICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgIHByZWZuYW1lOiBcInBoMVwiXHJcbiAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgdmFyIHBoMiA9e1xyXG4gICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgcHJlZm5hbWU6IFwicGgxXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgIHBoMS5kYXRhdmFsdWU9XCI4MDA3Nzk1ODE3XCI7XHJcbiAgICAgICAgICBwaDIuZGF0YXZhbHVlPVwiOTg5ODk4OTg5OFwiO1xyXG4gICAgICAgICAgZm5hbWUuZGF0YXZhbHVlPVwiQWR2YWl0XCI7XHJcbiAgICAgICAgICBsbmFtZS5kYXRhdmFsdWU9XCJQdW5kbGlrXCI7XHJcbiAgICAgICAgICBlbWFpbC5kYXRhdmFsdWU9XCJhZHZhaXQucHVuZGxpa0B4b3JpYW50LmNvbVwiO1xyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UoZm5hbWUpO1xyXG4gICAgICAgICAgdGhpcy5wcmVmLlNhdmVQcmVmZXJlbmNlKGxuYW1lKTtcclxuICAgICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShlbWFpbCk7XHJcbiAgICAgICAgICB0aGlzLnByZWYuU2F2ZVByZWZlcmVuY2UocGgxKTtcclxuICAgICAgICAgIHRoaXMucHJlZi5TYXZlUHJlZmVyZW5jZShwaDIpOyAqL1xyXG4iXX0=