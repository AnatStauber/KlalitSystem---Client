export class Exception {
    public constructor(
        public errorCode?: string,
        public ErrorMessage?: string,
        public internalMessage?: string ) { }
}