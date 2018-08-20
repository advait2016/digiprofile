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
            var json = JSON.parse(result.text);
            var app = require("application");
            var contacts = require("nativescript-contacts");
            var newContact = new contacts.Contact();
            newContact.name.given = json.fname;
            newContact.name.family = json.lname;
            newContact.phoneNumbers.push({ label: contacts.KnownLabel.HOME, value: json.ph1 }); // See below for known labels
            newContact.emailAddresses.push({ label: contacts.KnownLabel.HOME, value: json.email });
            newContact.save();
        }, function (error) {
            console.log("No scan: " + error);
        });
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBRTdEO0lBQ0ksaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN4QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFVRDtJQUlJLHVCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEQsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDdkUsaU5BQWlOLENBQUM7YUFDL00sSUFBSSxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUVULENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFHRCx5Q0FBaUIsR0FBakI7UUFBbUMsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRixVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELDhCQUFNLEdBQU4sVUFBTyxLQUFLO1FBR1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLG9CQUFvQixFQUFFLElBQUk7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBRSxhQUFhLENBQUUsQ0FBQztZQUNuQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUUsdUJBQXVCLENBQUUsQ0FBQztZQUNsRCxJQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQTZCO1lBQ2pILFVBQVUsQ0FBRSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN0RixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdEIsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELHNDQUFjLEdBQWQ7UUFDSSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN0RCxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLDJDQUEyQyxDQUFDO2FBQ3ZILElBQUksQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7YUFDSCxLQUFLLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEVRLGFBQWE7UUFSckIsZ0JBQVMsQ0FBQztZQUVYLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBRXRDLENBQUM7eUNBS3NDLDRDQUFjO09BSnpDLGFBQWEsQ0FpRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcclxuZGVjbGFyZSB2YXIgYW5kcm9pZCA6YW55O1xyXG5jbGFzcyBDb250YWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG4gICAgQENvbXBvbmVudCh7XHJcblxyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBjb250YWN0czogQXJyYXk8Q29udGFjdD47XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyKSB7XHJcbiAgICAgICAgdmFyIHBlcm1pc3Npb25zID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLlJFQURfQ09OVEFDVFMsIFxyXG4gICAgICAgIFwiPHVzZXMtcGVybWlzc2lvbiBhbmRyb2lkOm5hbWU9XFxcImFuZHJvaWQucGVybWlzc2lvbi5HRVRfQUNDT1VOVFNcXFwiLz4gPHVzZXMtcGVybWlzc2lvbiBhbmRyb2lkOm5hbWU9XFxcImFuZHJvaWQucGVybWlzc2lvbi5SRUFEX0NPTlRBQ1RTXFxcIiAvPiA8dXNlcy1wZXJtaXNzaW9uIGFuZHJvaWQ6bmFtZT1cXFwiYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0NPTlRBQ1RTXFxcIi8+XCIpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV29vIEhvbywgSSBoYXZlIHRoZSBwb3dlciFcIik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJVaCBvaCwgbm8gcGVybWlzc2lvbnMgLSBwbGFuIEIgdGltZSFcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQgeyAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmYWJUYXAoaW5kZXgpOiB2b2lkIHtcclxuICAgIFxyXG4gIFxyXG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XHJcbiAgICAgICAgICAgIGNhbmNlbExhYmVsOiBcIlN0b3Agc2Nhbm5pbmdcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJHbyBzY2FuIHNvbWV0aGluZ1wiLFxyXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dGbGlwQ2FtZXJhQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW4gZm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW4gdGV4dDogICBcIiArIHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgdmFyIGpzb249IEpTT04ucGFyc2UocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICB2YXIgYXBwID0gcmVxdWlyZSggXCJhcHBsaWNhdGlvblwiICk7XHJcbiAgICAgICAgICAgIHZhciBjb250YWN0cyA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzXCIgKTtcclxuICAgICAgICAgICAgdmFyIG5ld0NvbnRhY3QgPSBuZXcgY29udGFjdHMuQ29udGFjdCgpO1xyXG4gICAgICAgICAgICBuZXdDb250YWN0Lm5hbWUuZ2l2ZW4gPSBqc29uLmZuYW1lO1xyXG4gICAgICAgICAgICBuZXdDb250YWN0Lm5hbWUuZmFtaWx5ID0ganNvbi5sbmFtZTtcclxuICAgICAgICAgICAgbmV3Q29udGFjdC5waG9uZU51bWJlcnMucHVzaCh7IGxhYmVsOiBjb250YWN0cy5Lbm93bkxhYmVsLkhPTUUsIHZhbHVlOiBqc29uLnBoMSB9KTsgLy8gU2VlIGJlbG93IGZvciBrbm93biBsYWJlbHNcclxuICAgICAgICAgICAgbmV3Q29udGFjdC4gZW1haWxBZGRyZXNzZXMucHVzaCh7IGxhYmVsOmNvbnRhY3RzLktub3duTGFiZWwuSE9NRSwgdmFsdWU6anNvbi5lbWFpbCB9KTtcclxuICAgICAgICAgICAgbmV3Q29udGFjdC5zYXZlKCk7XHJcblxyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNjYW46IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZ2V0cGVybWlzc2lvbnMoKXtcclxuICAgICAgICB2YXIgcGVybWlzc2lvbnMgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGVybWlzc2lvbnMnKTtcclxuICAgICAgICBwZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVBRF9DT05UQUNUUywgXCJJIG5lZWQgdGhlc2UgcGVybWlzc2lvbnMgYmVjYXVzZSBJJ20gY29vbFwiKVxyXG4gICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV29vIEhvbywgSSBoYXZlIHRoZSBwb3dlciFcIik7XHJcbiAgICAgICB9KVxyXG4gICAgIC5jYXRjaChmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJVaCBvaCwgbm8gcGVybWlzc2lvbnMgLSBwbGFuIEIgdGltZSFcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==