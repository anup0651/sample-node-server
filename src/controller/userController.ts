import { Inject } from "typescript-ioc";
import { UsersService } from "../services";
import { Get, Post, Put, Query, Body, Route, Tags } from "tsoa";
import { CreateuserModel } from "../models/users"

@Route("users")
@Tags('User service API')
export class UsersController {
    @Inject usersService: UsersService;

   /**
    * Get user Details
    * @param userId 
    * Get User details based on UserId
    * @returns 
    */
    @Get('')
    public getAllUsers(@Query() userId: string) {
        try {
         return this.usersService.getUser();
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Create User
     * @param userPayload 
     * Payload content for user information 
     * @returns 
     */
    @Post('')
    public createUser(@Body() userPayload: CreateuserModel) {
        try {
            return this.usersService.createUser(userPayload);
           } catch (error) {
               console.log(error);
           }      
    }

    /**
     * Update User
     * @param userPayload 
     * Payload content for user information 
     * @returns 
     */
     @Put('')
     public updateUser(@Body() userPayload: CreateuserModel) {
         try {
             return this.usersService.createUser(userPayload);
            } catch (error) {
                console.log(error);
            }      
     }

}