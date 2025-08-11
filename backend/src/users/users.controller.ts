import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    getUsers(): string {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string): string {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() body: any): string {
        return this.usersService.createUser(body);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() body: any): string {
        return this.usersService.updateUser(id, body);
    }

}
