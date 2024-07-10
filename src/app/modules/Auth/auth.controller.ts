/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { AuthServices } from "./auth.service";







// get all users
const getAllUsers = catchAsync(async (req, res) => {
    const result = await AuthServices.getAllUsersFromDB();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Users  retrieved  successfully',
        data: result
    })
}

)

// register user
const registerUser = catchAsync(async (req, res) => {
    const result = await AuthServices.registerUserIntoDb(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'User  registered  successfully',
        data: result
    })
}

)

// login user
const loginUser = catchAsync(async (req, res) => {

    const result = await AuthServices.loginUserIntoDb(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User  login  successful',
        data: result
    })
}

)

// change user role
const changeUserRole = catchAsync(async (req, res) => {
    const { _id } = req.params;

    const result = await AuthServices.changeUserRole(_id, req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'User promoted successfully!',
        data: result
    })
});



export const AuthControllers = {
    getAllUsers,
    registerUser,
    loginUser,
    changeUserRole

}