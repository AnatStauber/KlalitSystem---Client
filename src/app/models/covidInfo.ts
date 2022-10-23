import { Vaccine } from "./vaccine";

export class CovidInfo {
    public constructor (
        public customer_id? : number,
        public covid_start? : Date,
        public covid_end? : Date, 
        public vaccine_info? : Array<Vaccine>
    ) {}
}