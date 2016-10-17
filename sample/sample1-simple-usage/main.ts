import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NotificationCenterModule} from "../../src/index";
import {NotificationCenter} from "../../src/NotificationCenter";

@Component({
    selector: "app",
    template: `
<div>

<!-- put in your app's header, or somewhere in the top -->
<notification-center-alerts></notification-center-alerts>

<!-- these buttons only show how this component works -->
<button (click)="showSuccess()">show success message</button>
<button (click)="showInfo()">show information message</button>
<button (click)="showWarning()">show warning message</button>
<button (click)="showDanger()">show danger message</button>

</div>
`
})
export class Sample1App {

    constructor(private notificationCenter: NotificationCenter) {
    }

    showSuccess() {
        this.notificationCenter.success("Operation success!");
    }

    showInfo() {
        this.notificationCenter.info("Some information message");
    }

    showWarning() {
        this.notificationCenter.warning("Warning! You can't do it");
    }

    showDanger() {
        this.notificationCenter.danger("Error, check your password!");
    }

}

@NgModule({
    imports: [
        BrowserModule,
        NotificationCenterModule
    ],
    declarations: [
        Sample1App
    ],
    bootstrap: [
        Sample1App
    ]
})
export class Sample1Module {

}

platformBrowserDynamic().bootstrapModule(Sample1Module);