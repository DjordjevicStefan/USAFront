import http from "./httpService" ;
import qs from "qs"
  

export default function  getAllWorkorders(){
    return http.get("http://localhost:3500/admin")
}

export function getWorkOrder(workOrderId){
  return http.get(`http://localhost:3500/admin/workorders/${workOrderId}`);
} 



export function assignJob(jobId, job, vendor, workorder){

  console.log( "jobid as" , jobId);
  console.log( "wo as" , workorder);
  console.log( "job as" , job);
  console.log( "jvendor as" , vendor);



  return http.post(`http://localhost:3500/admin/assignJob/${jobId}` ,
     {   
      "job" : {
         id : job._id ,
         status : "sent" ,
         name : job.name ,
         subCategory : job.subCategory ,  
         room : job.room ,
         price : job.price ,  
         quantity : job.quantity ,
         comment : job.comment,
         workorderId : job.workorderId,
         vendorId : job.vendorId,
         assignmentDate : job.assignmentDate     
      },
      "vendor" : {
         id : vendor._id ,
         firstName : vendor.firstName,
         lastName : vendor.lastName,
         email : vendor.email ,
         profession : vendor.profession, 
       },
      "workorder" : {
        id : workorder._id ,
        status : workorder.status,
        buildingNumber : workorder.buildingNumber,
        apartmentNumber : workorder.apartmentNumber
      } 

    }
   
  )}


// dummy data for back
//   {
//     job : {
//        id: "5cebd0661c9d440000fe87b1",
//        status: "sent",
//        name: "Electric bulb Repair",
//        subCategory: "Electric",
//        room: "Living Room",
//        price: 29,
//        quantity: 2,
//        comment: "comment about electrc bulb",
//        workorderId: "5ce6f7fe1c9d440000ee36e6",
//        vendorId: "5cebd1eb1c9d440000fe87b2",
//        assignmentDate: ""
//    },
//    vendor: {
//        id: "5cebd1eb1c9d440000fe87b2",
//        firstName: "Kawhi",
//        lastName: "Leonard",
//        email: "mladenjaramaz93@gmail.com",
//        profession: "floors",
//        calendar: [
//            {
//                date: "12-21-2019",
//              busy: true
//            },
//            {
//                date: "12-22-2019",
//                busy: false
//            }
//        ],
//        "jobAssignment": "12-21-2019"
//    },
//    workorder: {
//        id: "5cf641d125eeb12eb4a82b5e",
//        status: "sent",
//        buildingNumber: "123",
//        apartmentNumber: "333"
//    }
// } 