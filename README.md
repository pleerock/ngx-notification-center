# ngx-notification-center

Notification center control for your angular2 applications using bootstrap3. Does not depend of jquery.
Allows to push notifications from anywhere in your app and they will be shown under the app header.

## Installation

1. Install npm module:

    `npm install ngx-notification-center --save`

2. If you are using system.js you may want to add this into `map` and `package` config:

    ```json
    {
        "map": {
            "ngx-notification-center": "node_modules/ngx-notification-center"
        },
        "packages": {
            "ngx-notification-center": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## Usage

Example of simple usage:

```html
<notification-center-alerts [delay]="4000"></notification-center-alerts>
```

* `delay` allows to setup number of milliseconds notification is shown by default

## Sample

```typescript
import {Component} from "@angular/core";
import {NotificationCenterModule, NotificationCenter} from "ngx-notification-center";

@Component({
    selector: "app",
    template: `
<!-- put in your app's header, or somewhere in the top -->
<notification-center-alerts></notification-center-alerts>

<!-- these buttons only show how this component works -->
<button (click)="showSuccess()">show success message</button>
<button (click)="showInfo()">show information message</button>
<button (click)="showWarning()">show warning message</button>
<button (click)="showDanger()">show danger message</button>

`
})
export class AppComponent {

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
        // ...
        NotificationCenterModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ngx-notification-center/tree/master/sample) for more examples of
usages.
