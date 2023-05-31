import { Clause } from './Clause';
import { Status } from './Status';


export class Contract {
    id!: number;
    contractId!: number;
    name!: string;
    // parties!: any[];
    contractDate!: Date;
    // contractType!: ContractType;
    clauses!: Clause[];
    status!: Status;
    // pdfUri!: string;
}