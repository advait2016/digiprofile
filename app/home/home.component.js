"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var Contact = /** @class */ (function () {
    function Contact(name) {
        this.name = name;
    }
    return Contact;
}());
var HomeComponent = /** @class */ (function () {
    function HomeComponent(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
    }
    HomeComponent_1 = HomeComponent;
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.fabTap = function (index) {
        this.barcodeScanner.scan({
            cancelLabel: "Stop scanning",
            message: "Go scan something",
            preferFrontCamera: false,
            showFlipCameraButton: true
        }).then(function (result) {
            console.log("Scan format: " + result.format);
            console.log("Scan text:   " + result.text);
            HomeComponent_1.SaveContact();
            var app = require("application");
            var contacts = require("nativescript-contacts");
            var newContact = new contacts.Contact();
            newContact.name.given = "Advait ";
            newContact.name.family = "Pundlik";
            newContact.phoneNumbers.push({ label: contacts.KnownLabel.HOME, value: "000000000" }); // See below for known labels
            newContact.phoneNumbers.push({ label: "My Custom Label", value: "1111111111" });
            newContact.save();
        }, function (error) {
            console.log("No scan: " + error);
        });
    };
    HomeComponent.SaveContact = function () {
        var app = require("application");
        var contacts = require("nativescript-contacts");
        var newContact = new contacts.Contact();
        newContact.name.given = "John";
        newContact.name.family = "Doe";
        newContact.phoneNumbers.push({ label: contacts.KnownLabel.HOME, value: "000000000" }); // See below for known labels
        newContact.phoneNumbers.push({ label: "My Custom Label", value: "1111111111" });
        newContact.save();
        alert("Contact saved");
    };
    HomeComponent = HomeComponent_1 = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], HomeComponent);
    return HomeComponent;
    var HomeComponent_1;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBQzdEO0lBQ0ksaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN4QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFTRDtJQUlJLHVCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFFbEQsQ0FBQztzQkFOUSxhQUFhO0lBU3RCLGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUdELHlDQUFpQixHQUFqQjtRQUFtQyxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25GLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR0QsOEJBQU0sR0FBTixVQUFPLEtBQUs7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixXQUFXLEVBQUUsZUFBZTtZQUM1QixPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsb0JBQW9CLEVBQUUsSUFBSTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsZUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBRSxhQUFhLENBQUUsQ0FBQztZQUNuQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUUsdUJBQXVCLENBQUUsQ0FBQztZQUNsRCxJQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDbEMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQTZCO1lBQ3BILFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ2hGLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUd0QixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0sseUJBQVcsR0FBbEI7UUFFSyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUUsYUFBYSxDQUFFLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFFLHVCQUF1QixDQUFFLENBQUM7UUFDbEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMvQixVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtRQUNwSCxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNoRixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTNCLENBQUM7SUExRFEsYUFBYTtRQVByQixnQkFBUyxDQUFDO1lBRVgsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FFdkMsQ0FBQzt5Q0FLc0MsNENBQWM7T0FKekMsYUFBYSxDQTJEekI7SUFBRCxvQkFBQzs7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcclxuY2xhc3MgQ29udGFjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG5cclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBjb250YWN0czogQXJyYXk8Q29udGFjdD47XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7ICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZhYlRhcChpbmRleCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XHJcbiAgICAgICAgICAgIGNhbmNlbExhYmVsOiBcIlN0b3Agc2Nhbm5pbmdcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJHbyBzY2FuIHNvbWV0aGluZ1wiLFxyXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dGbGlwQ2FtZXJhQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW4gZm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW4gdGV4dDogICBcIiArIHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgSG9tZUNvbXBvbmVudC5TYXZlQ29udGFjdCgpO1xyXG4gICAgICAgICAgICB2YXIgYXBwID0gcmVxdWlyZSggXCJhcHBsaWNhdGlvblwiICk7XHJcbiAgICAgICAgICAgIHZhciBjb250YWN0cyA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzXCIgKTtcclxuICAgICAgICAgICAgdmFyIG5ld0NvbnRhY3QgPSBuZXcgY29udGFjdHMuQ29udGFjdCgpO1xyXG4gICAgICAgICAgICBuZXdDb250YWN0Lm5hbWUuZ2l2ZW4gPSBcIkFkdmFpdCBcIjtcclxuICAgICAgICAgICAgbmV3Q29udGFjdC5uYW1lLmZhbWlseSA9IFwiUHVuZGxpa1wiO1xyXG4gICAgICAgICAgICBuZXdDb250YWN0LnBob25lTnVtYmVycy5wdXNoKHsgbGFiZWw6IGNvbnRhY3RzLktub3duTGFiZWwuSE9NRSwgdmFsdWU6IFwiMDAwMDAwMDAwXCIgfSk7IC8vIFNlZSBiZWxvdyBmb3Iga25vd24gbGFiZWxzXHJcbiAgICAgICAgICAgIG5ld0NvbnRhY3QucGhvbmVOdW1iZXJzLnB1c2goeyBsYWJlbDogXCJNeSBDdXN0b20gTGFiZWxcIiwgdmFsdWU6IFwiMTExMTExMTExMVwiIH0pO1xyXG4gICAgICAgICAgICBuZXdDb250YWN0LnNhdmUoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzY2FuOiBcIiArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICBzdGF0aWMgU2F2ZUNvbnRhY3QoKVxyXG4gICB7XHJcbiAgICAgICAgdmFyIGFwcCA9IHJlcXVpcmUoIFwiYXBwbGljYXRpb25cIiApO1xyXG4gICAgICAgIHZhciBjb250YWN0cyA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzXCIgKTtcclxuICAgICAgICB2YXIgbmV3Q29udGFjdCA9IG5ldyBjb250YWN0cy5Db250YWN0KCk7XHJcbiAgICAgICAgbmV3Q29udGFjdC5uYW1lLmdpdmVuID0gXCJKb2huXCI7XHJcbiAgICAgICAgbmV3Q29udGFjdC5uYW1lLmZhbWlseSA9IFwiRG9lXCI7XHJcbiAgICAgICAgbmV3Q29udGFjdC5waG9uZU51bWJlcnMucHVzaCh7IGxhYmVsOiBjb250YWN0cy5Lbm93bkxhYmVsLkhPTUUsIHZhbHVlOiBcIjAwMDAwMDAwMFwiIH0pOyAvLyBTZWUgYmVsb3cgZm9yIGtub3duIGxhYmVsc1xyXG4gICAgICAgIG5ld0NvbnRhY3QucGhvbmVOdW1iZXJzLnB1c2goeyBsYWJlbDogXCJNeSBDdXN0b20gTGFiZWxcIiwgdmFsdWU6IFwiMTExMTExMTExMVwiIH0pO1xyXG4gICAgICAgIG5ld0NvbnRhY3Quc2F2ZSgpO1xyXG4gICAgICAgIGFsZXJ0KFwiQ29udGFjdCBzYXZlZFwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19