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
        var permissions = require('nativescript-permissions');
        permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, "<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/> <uses-permission android:name=\"android.permission.READ_CONTACTS\" /> <uses-permission android:name=\"android.permission.WRITE_CONTACTS\"/>")
            .then(function () {
            console.log("Woo Hoo, I have the power!");
        })
            .catch(function () {
            console.log("Uh oh, no permissions - plan B time!");
        });
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
            newContact.name.given = "AAdrak";
            newContact.name.family = "LASAN";
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
    HomeComponent.prototype.getpermissions = function () {
        var permissions = require('nativescript-permissions');
        permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, "I need these permissions because I'm cool")
            .then(function () {
            console.log("Woo Hoo, I have the power!");
        })
            .catch(function () {
            console.log("Uh oh, no permissions - plan B time!");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBRTdEO0lBQ0ksaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN4QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFTRDtJQUlJLHVCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEQsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDdkUsaU5BQWlOLENBQUM7YUFDL00sSUFBSSxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUVULENBQUM7c0JBZlEsYUFBYTtJQWtCdEIsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBR0QseUNBQWlCLEdBQWpCO1FBQW1DLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkYsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFHRCw4QkFBTSxHQUFOLFVBQU8sS0FBSztRQUdSLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3JCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixvQkFBb0IsRUFBRSxJQUFJO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBRVgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxlQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFFLGFBQWEsQ0FBRSxDQUFDO1lBQ25DLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBRSx1QkFBdUIsQ0FBRSxDQUFDO1lBQ2xELElBQUksVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUNqQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDakMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7WUFDcEgsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDaEYsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBR3RCLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHSyx5QkFBVyxHQUFsQjtRQUVLLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBRSxhQUFhLENBQUUsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUUsdUJBQXVCLENBQUUsQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDL0IsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQTZCO1FBQ3BILFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDSSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN0RCxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLDJDQUEyQyxDQUFDO2FBQ3ZILElBQUksQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7YUFDSCxLQUFLLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEZRLGFBQWE7UUFQckIsZ0JBQVMsQ0FBQztZQUVYLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBRXZDLENBQUM7eUNBS3NDLDRDQUFjO09BSnpDLGFBQWEsQ0FpRnpCO0lBQUQsb0JBQUM7O0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcic7XHJcbmRlY2xhcmUgdmFyIGFuZHJvaWQgOmFueTtcclxuY2xhc3MgQ29udGFjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG5cclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBjb250YWN0czogQXJyYXk8Q29udGFjdD47XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyKSB7XHJcbiAgICAgICAgdmFyIHBlcm1pc3Npb25zID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLlJFQURfQ09OVEFDVFMsIFxyXG4gICAgICAgIFwiPHVzZXMtcGVybWlzc2lvbiBhbmRyb2lkOm5hbWU9XFxcImFuZHJvaWQucGVybWlzc2lvbi5HRVRfQUNDT1VOVFNcXFwiLz4gPHVzZXMtcGVybWlzc2lvbiBhbmRyb2lkOm5hbWU9XFxcImFuZHJvaWQucGVybWlzc2lvbi5SRUFEX0NPTlRBQ1RTXFxcIiAvPiA8dXNlcy1wZXJtaXNzaW9uIGFuZHJvaWQ6bmFtZT1cXFwiYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0NPTlRBQ1RTXFxcIi8+XCIpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV29vIEhvbywgSSBoYXZlIHRoZSBwb3dlciFcIik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJVaCBvaCwgbm8gcGVybWlzc2lvbnMgLSBwbGFuIEIgdGltZSFcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHsgICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmFiVGFwKGluZGV4KTogdm9pZCB7XHJcbiAgICBcclxuICBcclxuICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oe1xyXG4gICAgICAgICAgICBjYW5jZWxMYWJlbDogXCJTdG9wIHNjYW5uaW5nXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiR28gc2NhbiBzb21ldGhpbmdcIixcclxuICAgICAgICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbjogdHJ1ZVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTY2FuIGZvcm1hdDogXCIgKyByZXN1bHQuZm9ybWF0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTY2FuIHRleHQ6ICAgXCIgKyByZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgIEhvbWVDb21wb25lbnQuU2F2ZUNvbnRhY3QoKTtcclxuICAgICAgICAgICAgdmFyIGFwcCA9IHJlcXVpcmUoIFwiYXBwbGljYXRpb25cIiApO1xyXG4gICAgICAgICAgICB2YXIgY29udGFjdHMgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1jb250YWN0c1wiICk7XHJcbiAgICAgICAgICAgIHZhciBuZXdDb250YWN0ID0gbmV3IGNvbnRhY3RzLkNvbnRhY3QoKTtcclxuICAgICAgICAgICAgbmV3Q29udGFjdC5uYW1lLmdpdmVuID0gXCJBQWRyYWtcIjtcclxuICAgICAgICAgICAgbmV3Q29udGFjdC5uYW1lLmZhbWlseSA9IFwiTEFTQU5cIjtcclxuICAgICAgICAgICAgbmV3Q29udGFjdC5waG9uZU51bWJlcnMucHVzaCh7IGxhYmVsOiBjb250YWN0cy5Lbm93bkxhYmVsLkhPTUUsIHZhbHVlOiBcIjAwMDAwMDAwMFwiIH0pOyAvLyBTZWUgYmVsb3cgZm9yIGtub3duIGxhYmVsc1xyXG4gICAgICAgICAgICBuZXdDb250YWN0LnBob25lTnVtYmVycy5wdXNoKHsgbGFiZWw6IFwiTXkgQ3VzdG9tIExhYmVsXCIsIHZhbHVlOiBcIjExMTExMTExMTFcIiB9KTtcclxuICAgICAgICAgICAgbmV3Q29udGFjdC5zYXZlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2NhbjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgc3RhdGljIFNhdmVDb250YWN0KClcclxuICAge1xyXG4gICAgICAgIHZhciBhcHAgPSByZXF1aXJlKCBcImFwcGxpY2F0aW9uXCIgKTtcclxuICAgICAgICB2YXIgY29udGFjdHMgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1jb250YWN0c1wiICk7XHJcbiAgICAgICAgdmFyIG5ld0NvbnRhY3QgPSBuZXcgY29udGFjdHMuQ29udGFjdCgpO1xyXG4gICAgICAgIG5ld0NvbnRhY3QubmFtZS5naXZlbiA9IFwiSm9oblwiO1xyXG4gICAgICAgIG5ld0NvbnRhY3QubmFtZS5mYW1pbHkgPSBcIkRvZVwiO1xyXG4gICAgICAgIG5ld0NvbnRhY3QucGhvbmVOdW1iZXJzLnB1c2goeyBsYWJlbDogY29udGFjdHMuS25vd25MYWJlbC5IT01FLCB2YWx1ZTogXCIwMDAwMDAwMDBcIiB9KTsgLy8gU2VlIGJlbG93IGZvciBrbm93biBsYWJlbHNcclxuICAgICAgICBuZXdDb250YWN0LnBob25lTnVtYmVycy5wdXNoKHsgbGFiZWw6IFwiTXkgQ3VzdG9tIExhYmVsXCIsIHZhbHVlOiBcIjExMTExMTExMTFcIiB9KTtcclxuICAgICAgICBuZXdDb250YWN0LnNhdmUoKTtcclxuICAgICAgICBhbGVydChcIkNvbnRhY3Qgc2F2ZWRcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldHBlcm1pc3Npb25zKCl7XHJcbiAgICAgICAgdmFyIHBlcm1pc3Npb25zID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLlJFQURfQ09OVEFDVFMsIFwiSSBuZWVkIHRoZXNlIHBlcm1pc3Npb25zIGJlY2F1c2UgSSdtIGNvb2xcIilcclxuICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIldvbyBIb28sIEkgaGF2ZSB0aGUgcG93ZXIhXCIpO1xyXG4gICAgICAgfSlcclxuICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVWggb2gsIG5vIHBlcm1pc3Npb25zIC0gcGxhbiBCIHRpbWUhXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=