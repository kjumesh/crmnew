import { Iaddress } from '../../../interface/shared/iaddress';
export class Address implements Iaddress {
    AddressId: number;
    Address: string;
    Street: string;
    City: string;
    State: string;
    ZipCode: number;
    Country: string;
}

