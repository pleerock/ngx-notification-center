import {Component, OnDestroy, OnInit, Input} from "@angular/core";
import {Subscription} from "rxjs/Rx";
import {NotificationCenter} from "./NotificationCenter";
import {Notification} from "./Notification";

@Component({
    selector: "notification-center-alerts",
    template: `
<div class="notification-center-alerts container">
    <div *ngFor="let notification of notifications">
        <div class="alert alert-{{ notification.type }} alert-dismissible fade in" role="alert">
            <button [hidden]="!notification.dismissible" type="button" class="close" data-dismiss="alert" aria-label="Close"
                (click)="removeNotification(notification)"><span aria-hidden="true">×</span></button>
            {{ notification.message }}
        </div>
    </div>
</div>
`,
    styles: [`
.notification-center-alerts {
    position: fixed;
    z-index: 1031;
    padding: 0;
    width: 300px;
    margin-left: 5px;
}
`]
})
export class NotificationCenterAlerts implements OnInit, OnDestroy {

    // -------------------------------------------------------------------------
    // Inputs / Outputs
    // -------------------------------------------------------------------------

    @Input()
    delay: number = 5000;

    @Input()
    layout: string = "attached";

    @Input()
    effect: string = "bouncyflip";

    @Input()
    type: string = "notice";

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    notifications: Notification[] = [];

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    private notificationsSubscription: Subscription;
    private timeoutId: any;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(private notificationCenter: NotificationCenter) {
    }

    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------

    ngOnInit(): void {
        this.notificationsSubscription = this.notificationCenter.subscribe((notification: Notification) => {
            this.notifications.push(notification);

            this.timeoutId = setTimeout(() => {
                this.removeNotification(notification);
                this.timeoutId = null;
            }, notification.delay || this.delay);
        });
    }

    ngOnDestroy() {
        if (this.notificationsSubscription)
            this.notificationsSubscription.unsubscribe();
        if (this.timeoutId)
            clearTimeout(this.timeoutId);
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    clear() {
        this.notifications = [];
    }

    removeNotification(notification: Notification) {
        const index = this.notifications.indexOf(notification);
        if (index !== -1)
            this.notifications.splice(index, 1);
    }

}
