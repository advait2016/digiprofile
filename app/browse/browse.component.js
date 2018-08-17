"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
        this.info = {
            fname: "Ed Sheeran",
            lname: "X",
            p_no1: 2017,
            p_no2: 1,
            p_no3: 9.5,
            e1: "",
            e2: ""
        };
        // to add fields via fab
        this.fieldArray = [];
        this.newAttribute = {};
        // Added isEditIcon to allow to track whether adding icon or edit icon is to be displayed.
        this.isEditIcon = false;
        // form fields
        this.textfield = "";
        this.textfield1 = "";
        this.textfield2 = "";
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
    /**
     *  Allows user to make the user information editable
     * and allows to add new fields(of type: contact, email, and additional text fields. )
     * @param index
     *
     */
    BrowseComponent.prototype.fabTap = function (index) {
        this.isEditIcon = true;
        console.log("tapped");
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
        console.log(this.fieldArray.toString());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBRW5DLDBFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFRL0U7SUEwQkk7UUF6QkEsU0FBSSxHQUEwRztZQUMxRyxLQUFLLEVBQUUsWUFBWTtZQUNuQixLQUFLLEVBQUUsR0FBRztZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsR0FBRztZQUNWLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBRUYsd0JBQXdCO1FBQ3hCLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsMEZBQTBGO1FBQzFGLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFLNUIsY0FBYztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHWixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUNELHFEQUFxRDtJQUNyRCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSCxnQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFwRFEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzs7T0FDVyxlQUFlLENBcUQzQjtJQUFELHNCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJCcm93c2VcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2Jyb3dzZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaW5mbzogeyBmbmFtZTogc3RyaW5nLCBsbmFtZTogc3RyaW5nLCBwX25vMTogbnVtYmVyLCBwX25vMjogbnVtYmVyLCBwX25vMzogbnVtYmVyLCBlMTogc3RyaW5nLCBlMjogc3RyaW5nIH0gPSB7XHJcbiAgICAgICAgZm5hbWU6IFwiRWQgU2hlZXJhblwiLFxyXG4gICAgICAgIGxuYW1lOiBcIlhcIixcclxuICAgICAgICBwX25vMTogMjAxNyxcclxuICAgICAgICBwX25vMjogMSxcclxuICAgICAgICBwX25vMzogOS41LFxyXG4gICAgICAgIGUxOiBcIlwiLFxyXG4gICAgICAgIGUyOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHRvIGFkZCBmaWVsZHMgdmlhIGZhYlxyXG4gICAgZmllbGRBcnJheTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgbmV3QXR0cmlidXRlOiBhbnkgPSB7fTtcclxuXHJcbiAgICAvLyBBZGRlZCBpc0VkaXRJY29uIHRvIGFsbG93IHRvIHRyYWNrIHdoZXRoZXIgYWRkaW5nIGljb24gb3IgZWRpdCBpY29uIGlzIHRvIGJlIGRpc3BsYXllZC5cclxuICAgIGlzRWRpdEljb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBUbyBjaGVjayBpZiBlZGl0aW5nIGlzIGVuYWJsZWQuXHJcbiAgICBpc0VkaXRJdGVtczogYm9vbGVhbjtcclxuXHJcbiAgICAvLyBmb3JtIGZpZWxkc1xyXG4gICAgdGV4dGZpZWxkID0gXCJcIjtcclxuICAgIHRleHRmaWVsZDEgPSBcIlwiO1xyXG4gICAgdGV4dGZpZWxkMiA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuICAgIC8vIERyYXdlciBCdXR0b24gZnVuY3Rpb24gdG8gb3BlbiBzaWRlLW5hdmlnYXRpb24gYmFyXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgQWxsb3dzIHVzZXIgdG8gbWFrZSB0aGUgdXNlciBpbmZvcm1hdGlvbiBlZGl0YWJsZVxyXG4gICAgICogYW5kIGFsbG93cyB0byBhZGQgbmV3IGZpZWxkcyhvZiB0eXBlOiBjb250YWN0LCBlbWFpbCwgYW5kIGFkZGl0aW9uYWwgdGV4dCBmaWVsZHMuIClcclxuICAgICAqIEBwYXJhbSBpbmRleFxyXG4gICAgICpcclxuICAgICAqL1xyXG5cclxuICAgIGZhYlRhcChpbmRleCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNFZGl0SWNvbiA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXBwZWRcIik7XHJcbiAgICAgICAgdGhpcy5maWVsZEFycmF5LnB1c2godGhpcy5uZXdBdHRyaWJ1dGUpO1xyXG4gICAgICAgIHRoaXMubmV3QXR0cmlidXRlID0ge307XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWVsZEFycmF5LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==