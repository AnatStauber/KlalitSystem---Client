export class Vaccine{
    public constructor(
        public customerId? : number,
        public vaccine_id? : number,
        public vaccine_date? : Date,
        public vacc_manu? : string
    ) {}
}