import { UsersModel } from '../models'

export class UsersService {

    public async getUser() {
        var userDatials: UsersModel[] = [{
            fName: 'anup',
            email: ['anu@gmail.com', 'badri@gmail.com'],
            mobile: 9876433,
            dob: new Date(),
            address: {
                city: 'BA'
            }
        },{
            fName: 'jyoti',
            email: ['jyo@gmail.com', 'badri@gmail.com'],
            mobile: 9876433,
            dob: new Date(),
            address: {
                city: 'FA'
            }
        },{
            fName: 'badri',
            email: ['badri@gmail.com', 'badri@gmail.com'],
            mobile: 9876433,
            dob: new Date(),
            address: {
                city: 'CA'
            }
        }];

        return userDatials;


    }

    public async createUser(body) {
        return body;
    }

}
