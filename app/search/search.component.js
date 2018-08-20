"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var ZXing = require("nativescript-zxing");
var ImageSource = require("image-source");
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.fname = "rrrrr";
        this.lname = "eeeeeee";
        this.email = "advait.pundlik@xoriant.com";
        this.ph1 = "8007795817";
        this.ph2 = "9876543210";
        this.data = "{\"fname\": " + this.fname + "," + "\"lname\": " + this.lname + "," + "\"email\":" + this.email + "," + "\"ph1\":" + this.ph1 + "," + "\"ph2\":" + this.ph2 + "}";
        this.barcodeText = new String();
        this.tabSelectedIndex = 1;
    }
    SearchComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SearchComponent.prototype.generateBarCode = function () {
        this.pref = require("nativescript-android-preferences");
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
        this.fname = this.pref.GetPreference(lname);
        this.lname = this.pref.GetPreference(fname);
        this.email = this.pref.GetPreference(email);
        this.ph1 = this.pref.GetPreference(ph1);
        this.data = "{\"fname\": " + "\"" + this.fname + "\"" + "," + "\"lname\":" + "\"" + this.lname + "\"" + "," + "\"email\":" + "\"" + this.email + "\"" + "," + "\"ph1\":" + "\"" + this.ph1 + "\"" + "," + "\"ph2\":" + "\"" + this.ph2 + "\"" + "}";
        this.barcodeText = this.data;
        var barcodeImage = this.barcodeImg.nativeElement;
        var zx = new ZXing();
        var newImg = zx.createBarcode({
            encode: this.barcodeText,
            formats: [ZXing.QR_CODE, ZXing.ITF]
        });
        barcodeImage.imageSource = ImageSource.fromNativeSource(newImg);
    };
    SearchComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SearchComponent.prototype.changeTab = function () {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        }
        else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        }
        else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    };
    SearchComponent.prototype.show = function () {
        this.pref = require("nativescript-android-preferences");
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
        this.pref.GetPreference(lname);
        this.pref.GetPreference(fname);
        this.pref.GetPreference(email);
        this.pref.GetPreference(ph1);
    };
    __decorate([
        core_1.ViewChild("barcodeImg"),
        __metadata("design:type", core_1.ElementRef)
    ], SearchComponent.prototype, "barcodeImg", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: "Search",
            moduleId: module.id,
            templateUrl: "./search.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFHekUsaUNBQW1DO0FBRW5DLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzVDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQU81QztJQVVJO1FBSkEsVUFBSyxHQUFTLE9BQU8sQ0FBQztRQUFDLFVBQUssR0FBUyxTQUFTLENBQUM7UUFBQyxVQUFLLEdBQVMsNEJBQTRCLENBQUM7UUFBRSxRQUFHLEdBQVEsWUFBWSxDQUFDO1FBQUUsUUFBRyxHQUFRLFlBQVksQ0FBQztRQUMvSSxTQUFJLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLGFBQWEsR0FBRSxJQUFJLENBQUMsS0FBSyxHQUFFLEdBQUcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUksR0FBRyxHQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUVsSyxnQkFBVyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBS0Qsa0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEdBQUc7WUFDUixTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3BDLFFBQVEsRUFBRSxPQUFPO1NBQ3BC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bEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzs7T0FDVyxlQUFlLENBcUgzQjtJQUFELHNCQUFDO0NBQUEsQUFySEQsSUFxSEM7QUFySFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuY29uc3QgWlhpbmcgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXp4aW5nXCIpO1xyXG5jb25zdCBJbWFnZVNvdXJjZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VhcmNoLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFwiYmFyY29kZUltZ1wiKSBiYXJjb2RlSW1nOiBFbGVtZW50UmVmO1xyXG4gICAgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gICAgXHJcbiAgIFxyXG5cclxuICAgIGZuYW1lOiBzdHJpbmc9XCJycnJyclwiOyBsbmFtZTogc3RyaW5nPVwiZWVlZWVlZVwiOyBlbWFpbCA6c3RyaW5nPVwiYWR2YWl0LnB1bmRsaWtAeG9yaWFudC5jb21cIjsgIHBoMTpzdHJpbmc9XCI4MDA3Nzk1ODE3XCI7ICBwaDI6c3RyaW5nPVwiOTg3NjU0MzIxMFwiO1xyXG4gICAgZGF0YSA9IFwie1xcXCJmbmFtZVxcXCI6IFwiICsgdGhpcy5mbmFtZSArIFwiLFwiICsgXCJcXFwibG5hbWVcXFwiOiBcIisgdGhpcy5sbmFtZSsgXCIsXCIgKyBcIlxcXCJlbWFpbFxcXCI6XCIgKyB0aGlzLmVtYWlsICsgXCIsXCIgKyBcIlxcXCJwaDFcXFwiOlwiICsgdGhpcy5waDEgICsgXCIsXCIgKyAgXCJcXFwicGgyXFxcIjpcIiArIHRoaXMucGgyICsgXCJ9XCJcclxuICAgICAgXHJcbiAgICBwdWJsaWMgYmFyY29kZVRleHQgPSBuZXcgU3RyaW5nKCk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQmFyQ29kZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcmVmID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmRyb2lkLXByZWZlcmVuY2VzXCIpO1xyXG4gICAgICAgIHZhciBmbmFtZSA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcImZuYW1lXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxuYW1lID0ge1xyXG4gICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgcHJlZm5hbWU6IFwibG5hbWVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVtYWlsID0ge1xyXG4gICAgICAgICAgICBkYXRhdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGF0eXBlOiB0aGlzLnByZWYuRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgICAgICAgcHJlZm5hbWU6IFwiZW1haWxcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBoMSA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcInBoMVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZuYW1lID10aGlzLnByZWYuR2V0UHJlZmVyZW5jZShsbmFtZSkgO1xyXG4gICAgICAgIHRoaXMubG5hbWU9IHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGZuYW1lKSA7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9dGhpcy5wcmVmLkdldFByZWZlcmVuY2UoZW1haWwpIDtcclxuICAgICAgICB0aGlzLnBoMSA9IHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKHBoMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gXCJ7XFxcImZuYW1lXFxcIjogXCIgKyBcIlxcXCJcIit0aGlzLmZuYW1lK1wiXFxcIlwiK1wiLFwiK1wiXFxcImxuYW1lXFxcIjpcIisgXCJcXFwiXCIrdGhpcy5sbmFtZSArXCJcXFwiXCIrXCIsXCIrXCJcXFwiZW1haWxcXFwiOlwiICsgXCJcXFwiXCIgKyB0aGlzLmVtYWlsICtcIlxcXCJcIisgXCIsXCIgKyBcIlxcXCJwaDFcXFwiOlwiICsgXCJcXFwiXCIgKyB0aGlzLnBoMSArIFwiXFxcIlwiICsgXCIsXCIgKyBcIlxcXCJwaDJcXFwiOlwiICsgXCJcXFwiXCIgK3RoaXMucGgyICsgXCJcXFwiXCIgKyBcIn1cIlxyXG4gICAgICAgIHRoaXMuYmFyY29kZVRleHQgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgY29uc3QgYmFyY29kZUltYWdlID0gPEltYWdlPnRoaXMuYmFyY29kZUltZy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHp4ID0gbmV3IFpYaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbmV3SW1nID0genguY3JlYXRlQmFyY29kZSh7XHJcbiAgICAgICAgICAgIGVuY29kZTogdGhpcy5iYXJjb2RlVGV4dCxcclxuICAgICAgICAgICAgZm9ybWF0czogW1pYaW5nLlFSX0NPREUsIFpYaW5nLklURl1cclxuICAgICAgICB9KTtcclxuICAgICAgICBiYXJjb2RlSW1hZ2UuaW1hZ2VTb3VyY2UgPSBJbWFnZVNvdXJjZS5mcm9tTmF0aXZlU291cmNlKG5ld0ltZyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVGFiKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZWY6YW55O1xyXG5cclxuICAgIHNob3coKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJlZiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5kcm9pZC1wcmVmZXJlbmNlc1wiKTtcclxuICAgICAgICB2YXIgZm5hbWUgPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJmbmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsbmFtZSA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcImxuYW1lXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBlbWFpbCA9IHtcclxuICAgICAgICAgICAgZGF0YXZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogdGhpcy5wcmVmLkRhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgICAgIHByZWZuYW1lOiBcImVtYWlsXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwaDEgPSB7XHJcbiAgICAgICAgICAgIGRhdGF2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgZGF0YXR5cGU6IHRoaXMucHJlZi5EYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgICAgICBwcmVmbmFtZTogXCJwaDFcIlxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGxuYW1lKSA7XHJcbiAgICAgdGhpcy5wcmVmLkdldFByZWZlcmVuY2UoZm5hbWUpIFxyXG4gICAgIHRoaXMucHJlZi5HZXRQcmVmZXJlbmNlKGVtYWlsKSBcclxuICAgICB0aGlzLnByZWYuR2V0UHJlZmVyZW5jZShwaDEpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSJdfQ==