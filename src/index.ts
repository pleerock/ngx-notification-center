import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotificationCenter} from "./NotificationCenter";
import {NotificationCenterAlerts} from "./NotificationCenterAlerts";

export * from "./Notification";
export * from "./NotificationCenter";
export * from "./NotificationCenterAlerts";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NotificationCenterAlerts,
    ],
    exports: [
        NotificationCenterAlerts,
    ],
    providers: [
        NotificationCenter
    ]
})
export class NotificationCenterModule {

}