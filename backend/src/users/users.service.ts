import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    updateUser(id: string, body: any): string {
        throw new Error('Method not implemented.');
    }
    createUser(body: any): string {
        throw new Error('Method not implemented.');
    }
    getUserById(id: string): string {
        return `User with ID: ${id}`;
    }

    getUsers(): string {
        return "All users";
    }
}
