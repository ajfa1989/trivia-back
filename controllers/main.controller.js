import { response } from "../services/utils/response.js"
import { status, message } from "../services/utils/response.js"

const test = (req,res) =>{
    res
    .status(status.OK)
    .json(response(true,message.OK))
}

const not_found = (erq,res)=>{
    res
    .status(status.not_found)
    .json(response(false, message.not_found))
}

export {
    test,
    not_found
}