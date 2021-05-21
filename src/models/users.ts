export interface UsersModel{
    fName: string;
    lName?: string;
    email: string[];
    mobile: number;
    dob: Date;
    address: {
        city: string;
        state?: string;
        pinCode?: number;
    }
}

export interface CreateuserModel {
    fName: string;
    mobile: number;
    address: {
        city: string;
    }
}