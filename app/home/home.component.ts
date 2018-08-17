import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
class Contact {
    constructor(public name: string) { }
}

const contactList = ["Advait", "Athira", "Anchal", "Aanchal", "Aditi", "Elizabeth",
    "Harsh", "Himani", "Jay", "Jagannath", "Korol", "Kanchan", "Laxmi", "Purva", "Preetika", "Kaustubh"];
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public contacts: Array<Contact>;

    constructor() {
        this.contacts = [];

        for (let i = 0; i < contactList.length; i++) {
            this.contacts.push(new Contact(contactList[i]));
        }
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
