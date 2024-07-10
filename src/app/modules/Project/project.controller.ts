import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ProjectServices } from "./project.service";













const addProduct = catchAsync(async (req, res) => {
    console.log(req);
    const result = await ProjectServices.addProjectIntoDB(req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Project Added Successfully',
        data: result
    })
}

);
const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getAllProjectsFromDB();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'All projects retrieved successfully!',
        data: result
    })
})
const updateProject = catchAsync(async (req, res) => {



    const { _id } = req.params;

    const result = await ProjectServices.updateProject(_id, req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Project updated successfully!',
        data: result
    })
});

// const deleteProduct = catchAsync(async (req, res) => {
//     const { id } = req.params;

//     const result = await ProductServices.deleteSingleItemFromDB(id);
//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: 'Product deleted successfully!',
//         data: result
//     })
// });
// const deleteMultipleProducts = catchAsync(async (req, res) => {
//     const { ids } = req.body;
//     const result = await ProductServices.deleteMultipleItemsFromDB(ids);
//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: 'Products deleted successfully!',
//         data: result
//     });
// });


export const ProjectController = {
    addProduct,
    getAllProjects,
    updateProject
}