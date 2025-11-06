import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//resume add api - called by UserInput,when finish btn clicked
export const addResumeAPI = async (resume)=>{
    return await commonAPI(`${serverURL}/resume`,"POST",resume)
}
//get resume api
export const getResumeAPI = async (id)=>{
    return await commonAPI(`${serverURL}/resume/${id}`,"GET",{})
}
//update resume api
export const updateResumeAPI = async (id,resume                                                                           )=>{
    return await commonAPI(`${serverURL}/resume/${id}`,"PUT",resume)
}
//add history api
//get history api
//remove history api