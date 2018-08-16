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
        //to add fields via fab
        this.fieldArray = [];
        this.newAttribute = {};
        //form fields
        this.textfield = "";
        this.textfield1 = "";
        this.textfield2 = "";
        // Use the component constructor to inject providers.
    }
    BrowseComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    BrowseComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    BrowseComponent.prototype.fabTap = function (index) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBRW5DLDBFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFRL0U7SUF5Qkk7UUF4QkEsU0FBSSxHQUEwRztZQUMxRyxLQUFLLEVBQUUsWUFBWTtZQUNuQixLQUFLLEVBQUUsR0FBRztZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsR0FBRztZQUNWLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBRUYsdUJBQXVCO1FBRXZCLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFNdkIsYUFBYTtRQUNiLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHWixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxnQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUEzQ1EsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzs7T0FDVyxlQUFlLENBa0QzQjtJQUFELHNCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJCcm93c2VcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2Jyb3dzZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaW5mbzogeyBmbmFtZTogc3RyaW5nLCBsbmFtZTogc3RyaW5nLCBwX25vMTogbnVtYmVyLCBwX25vMjogbnVtYmVyLCBwX25vMzogbnVtYmVyLCBlMTogc3RyaW5nLCBlMjogc3RyaW5nIH0gPSB7XHJcbiAgICAgICAgZm5hbWU6IFwiRWQgU2hlZXJhblwiLFxyXG4gICAgICAgIGxuYW1lOiBcIlhcIixcclxuICAgICAgICBwX25vMTogMjAxNyxcclxuICAgICAgICBwX25vMjogMSxcclxuICAgICAgICBwX25vMzogOS41LFxyXG4gICAgICAgIGUxOiBcIlwiLFxyXG4gICAgICAgIGUyOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIC8vdG8gYWRkIGZpZWxkcyB2aWEgZmFiXHJcblxyXG4gICAgZmllbGRBcnJheTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgbmV3QXR0cmlidXRlOiBhbnkgPSB7fTtcclxuXHJcbiAgICAvLyBmaXJzdEZpZWxkID0gdHJ1ZTtcclxuICAgIC8vIGZpcnN0RmllbGROYW1lID0gJ0ZpcnN0IEl0ZW0gbmFtZSc7XHJcbiAgICBpc0VkaXRJdGVtczogYm9vbGVhbjtcclxuXHJcbiAgICAvL2Zvcm0gZmllbGRzXHJcbiAgICB0ZXh0ZmllbGQgPSBcIlwiO1xyXG4gICAgdGV4dGZpZWxkMSA9IFwiXCI7XHJcbiAgICB0ZXh0ZmllbGQyID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuICAgIGZhYlRhcChpbmRleCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFwcGVkXCIpO1xyXG4gICAgICAgIHRoaXMuZmllbGRBcnJheS5wdXNoKHRoaXMubmV3QXR0cmlidXRlKTtcclxuICAgICAgICB0aGlzLm5ld0F0dHJpYnV0ZSA9IHt9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpZWxkQXJyYXkudG9TdHJpbmcoKSlcclxuICAgIH1cclxuICAgIC8vIGFkZEZpZWxkVmFsdWUoaW5kZXgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5maWVsZEFycmF5Lmxlbmd0aCA8PSAyKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmllbGRBcnJheS5wdXNoKHRoaXMubmV3QXR0cmlidXRlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5uZXdBdHRyaWJ1dGUgPSB7fTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn1cclxuIl19