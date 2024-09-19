import { NextResponse } from "next/server"
import { signupSchema } from "@/lib/schema";

//proceses an incoming request from signup form

export async function POST(request:Request){
    //data will be sent to this route, Grab the data through the body variable

    const body:unknown = await request.json()

    //validate the client data
   const result = signupSchema.safeParse(body);
   let zodErrors = {} 
   if (!result.success){
    result.error.issues.forEach((issue) =>{
        zodErrors = {...zodErrors, [issue.path[0]]:issue.message}
    })
   }

    return NextResponse.json(
        Object.keys(zodErrors).length > 0 ? {errors: zodErrors}:{success:true}//check if the object is empty or not by using Object.keys
    )
}