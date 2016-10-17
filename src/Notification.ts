export class Notification {

    type: "success"|"info"|"warning"|"danger";
    delay: number;
    message: string;
    dismissible: boolean = true;

    constructor(args: { type: "success"|"info"|"warning"|"danger", message: string, delay?: number, dismissible?: boolean }) {
        this.type = args.type;

        if (args.delay !== undefined)
            this.delay = args.delay;

        if (args.message !== undefined)
            this.message = args.message;

        if (args.dismissible !== undefined)
            this.dismissible = args.dismissible;
    }

}
