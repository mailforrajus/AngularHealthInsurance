import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CaseWorkerServiceService {

  constructor(private httpClient:HttpClient) { }

  public saveRegistrationInfo(formData:any):any{
    return this.httpClient.post("http://localhost:8081/saveCaseWorkerInfo",formData);
  }

  public emailExistane(enteredMail:String):any{
    return this.httpClient.post("http://localhost:8081/checkEmailId",enteredMail); 
   }

   public getCaseworkersInfo():any{
     return this.httpClient.get("http://localhost:8081/displayAllCaseWorkerInfo");
   }

   public activateCaseWorker(emailId:any){
     return this.httpClient.get("http://localhost:8081/activateCaseWorker?emaildId="+emailId);
   }

   public deactivateCaseWorker(emailId:any){
     return this.httpClient.get("http://localhost:8081/deActivateCaseWorker?emaildId="+emailId);
   }


}


