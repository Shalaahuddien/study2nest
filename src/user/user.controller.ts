import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UserRequest } from './user.request.ts';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,){}

    @Get()
        async getUser(@Query() request: UserRequest){
            return await this.userService.get(request);
        }
    
        @Get('userid')
        async getUserParam(@Param('userid') userid: string){
            return await this.userService.create();
        }

    // @Put()
    // async updateUser(){
    //     return await this.userService.updateUser(userid);
    // }
    
//     @Patch(':id')
//     update(@Param('id') id: string, @Body() updateUser: UpdateUser) {
//       return this.userService.update(+id, updateUser);
//     }

//     @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }

//   @Post()
//   async create(@Body() createTodoDto: CreateTodoDto) {
//     const todo = await this.todosService.create(createTodoDto);
//     if(!todo) {
//       return 'error in creating todo'
//     }
//     return 'todo created successfully'
//   }
// @Put(':id')
//   async update(@Param('id') id: string, @Body() body: any) {
//     const newCat: any = await this.todosService.update(id, body)
//     return "cat updated";
//   }
// @Delete(':id')
//   async remove(@Param('id') id: string) {
//     await this.todosService.delete(id)
//     return "cat deleted"
//   }
}
