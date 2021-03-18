/* eslint-disable prettier/prettier */

export class CreateMeetDto {
    // DoctorId: string; //Fk form table Users
    MeetId: number;
    // ClinicNumber: string;
    Detail: string;
    Topic: string;
    Date: Date;
    TimeStart: Date;
    TimeEnd: Date;
    DoctorId: number;
    PatientId: number;
    
  }