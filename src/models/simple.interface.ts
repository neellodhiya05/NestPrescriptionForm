export interface Simple{
    id?: number;
    name?: string;
    sphere?:{
        rightsphere:string;
        leftsphere:string;
    }
    cylinder?:{
        rightcylinder:string;
        leftcylinder:string;
    }
    axis?:{
        rightaxis:string;
        leftaxis:string;
    }
    nearadd?:{
        rightnearadd:string;
        leftnearadd:string;
    }
    pupilpre?:string;
    extrainfo?:string;
}