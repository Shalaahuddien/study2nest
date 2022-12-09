import { Injectable } from '@nestjs/common';
import { request } from 'http';
import { UserRequest } from './user.request.ts';

@Injectable()
export class UserService 
{
    // update(arg0: number, updateUser: UpdateUser) {
    //     throw new Error('Method not implemented.');
    // }
    async create()
    {
        return "this is api for geting user";
    }
    async get(request: UserRequest)
    {
        // return "api get user";
        return `api get
        userid=${request.userId}
        username=${request.username}
        alamat=${request.alamat}`;
        
    }
    async delete()
    {
        return "api get delete";
    }
}
