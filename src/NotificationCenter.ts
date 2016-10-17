import {Injectable, EventEmitter} from "@angular/core";
import {Notification} from "./Notification";

@Injectable()
export class NotificationCenter {

    // -------------------------------------------------------------------------
    // Public Properties
    // -------------------------------------------------------------------------

    emitter = new EventEmitter();

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    subscribe(generatorOrNext?: any, error?: any, complete?: any) {
        return this.emitter.subscribe(generatorOrNext, error, complete);
    }

    success(message: string, options?: { delay?: number, dismissible?: boolean }) {
        this.emitter.emit(new Notification({
            message: message,
            type: "success",
            delay: options ? options.delay : undefined,
            dismissible: options ? options.dismissible : undefined
        }));
    }

    info(message: string, options?: { delay?: number, dismissible?: boolean }) {
        this.emitter.emit(new Notification({
            message: message,
            type: "info",
            delay: options ? options.delay : undefined,
            dismissible: options ? options.dismissible : undefined
        }));
    }

    warning(message: string, options?: { delay?: number, dismissible?: boolean }) {
        this.emitter.emit(new Notification({
            message: message,
            type: "warning",
            delay: options ? options.delay : undefined,
            dismissible: options ? options.dismissible : undefined
        }));
    }

    danger(message: string, options?: { delay?: number, dismissible?: boolean }) {
        this.emitter.emit(new Notification({
            message: message,
            type: "danger",
            delay: options ? options.delay : undefined,
            dismissible: options ? options.dismissible : undefined
        }));
    }

}
