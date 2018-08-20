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
            newContact.urls.push({ label: "linkedin", value: json.linkedin });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBRTdEO0lBQ0ksaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN4QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFVRDtJQUlJLHVCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEQsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDdkUsaU5BQWlOLENBQUM7YUFDL00sSUFBSSxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUVULENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFHRCx5Q0FBaUIsR0FBakI7UUFBbUMsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRixVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELDhCQUFNLEdBQU4sVUFBTyxLQUFLO1FBR1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLG9CQUFvQixFQUFFLElBQUk7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBRSxhQUFhLENBQUUsQ0FBQztZQUNuQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUUsdUJBQXVCLENBQUUsQ0FBQztZQUNsRCxJQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQTZCO1lBQ2pILFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNyRixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0QixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0Qsc0NBQWMsR0FBZDtRQUNJLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsMkNBQTJDLENBQUM7YUFDdkgsSUFBSSxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQzthQUNILEtBQUssQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqRVEsYUFBYTtRQVJyQixnQkFBUyxDQUFDO1lBRVgsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FFdEMsQ0FBQzt5Q0FLc0MsNENBQWM7T0FKekMsYUFBYSxDQWtFekI7SUFBRCxvQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xyXG5kZWNsYXJlIHZhciBhbmRyb2lkIDphbnk7XHJcbmNsYXNzIENvbnRhY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbiAgICBAQ29tcG9uZW50KHtcclxuXHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGNvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIpIHtcclxuICAgICAgICB2YXIgcGVybWlzc2lvbnMgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGVybWlzc2lvbnMnKTtcclxuICAgICAgICBwZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVBRF9DT05UQUNUUywgXHJcbiAgICAgICAgXCI8dXNlcy1wZXJtaXNzaW9uIGFuZHJvaWQ6bmFtZT1cXFwiYW5kcm9pZC5wZXJtaXNzaW9uLkdFVF9BQ0NPVU5UU1xcXCIvPiA8dXNlcy1wZXJtaXNzaW9uIGFuZHJvaWQ6bmFtZT1cXFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfQ09OVEFDVFNcXFwiIC8+IDx1c2VzLXBlcm1pc3Npb24gYW5kcm9pZDpuYW1lPVxcXCJhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfQ09OVEFDVFNcXFwiLz5cIilcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJXb28gSG9vLCBJIGhhdmUgdGhlIHBvd2VyIVwiKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVoIG9oLCBubyBwZXJtaXNzaW9ucyAtIHBsYW4gQiB0aW1lIVwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7ICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZhYlRhcChpbmRleCk6IHZvaWQge1xyXG4gICAgXHJcbiAgXHJcbiAgICAgICAgdGhpcy5iYXJjb2RlU2Nhbm5lci5zY2FuKHtcclxuICAgICAgICAgICAgY2FuY2VsTGFiZWw6IFwiU3RvcCBzY2FubmluZ1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkdvIHNjYW4gc29tZXRoaW5nXCIsXHJcbiAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWVcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2NhbiBmb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2NhbiB0ZXh0OiAgIFwiICsgcmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICB2YXIganNvbj0gSlNPTi5wYXJzZShyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgIHZhciBhcHAgPSByZXF1aXJlKCBcImFwcGxpY2F0aW9uXCIgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRhY3RzID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtY29udGFjdHNcIiApO1xyXG4gICAgICAgICAgICB2YXIgbmV3Q29udGFjdCA9IG5ldyBjb250YWN0cy5Db250YWN0KCk7XHJcbiAgICAgICAgICAgIG5ld0NvbnRhY3QubmFtZS5naXZlbiA9IGpzb24uZm5hbWU7XHJcbiAgICAgICAgICAgIG5ld0NvbnRhY3QubmFtZS5mYW1pbHkgPSBqc29uLmxuYW1lO1xyXG4gICAgICAgICAgICBuZXdDb250YWN0LnBob25lTnVtYmVycy5wdXNoKHsgbGFiZWw6IGNvbnRhY3RzLktub3duTGFiZWwuSE9NRSwgdmFsdWU6IGpzb24ucGgxIH0pOyAvLyBTZWUgYmVsb3cgZm9yIGtub3duIGxhYmVsc1xyXG4gICAgICAgICAgICBuZXdDb250YWN0LmVtYWlsQWRkcmVzc2VzLnB1c2goeyBsYWJlbDpjb250YWN0cy5Lbm93bkxhYmVsLkhPTUUsIHZhbHVlOmpzb24uZW1haWwgfSk7XHJcbiAgICAgICAgICAgIG5ld0NvbnRhY3QudXJscy5wdXNoKHsgbGFiZWw6XCJsaW5rZWRpblwiLCB2YWx1ZTpqc29uLmxpbmtlZGluIH0pO1xyXG4gICAgICAgICAgICBuZXdDb250YWN0LnNhdmUoKTtcclxuXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2NhbjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBnZXRwZXJtaXNzaW9ucygpe1xyXG4gICAgICAgIHZhciBwZXJtaXNzaW9ucyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIHBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5SRUFEX0NPTlRBQ1RTLCBcIkkgbmVlZCB0aGVzZSBwZXJtaXNzaW9ucyBiZWNhdXNlIEknbSBjb29sXCIpXHJcbiAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXb28gSG9vLCBJIGhhdmUgdGhlIHBvd2VyIVwiKTtcclxuICAgICAgIH0pXHJcbiAgICAgLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVoIG9oLCBubyBwZXJtaXNzaW9ucyAtIHBsYW4gQiB0aW1lIVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19