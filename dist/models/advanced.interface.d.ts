export interface Advanced {
    id?: number;
    name?: string;
    distance?: {
        distancerightSphere?: string;
        distanceleftSphere?: string;
        distancerightCylinder?: string;
        distanceleftCylinder?: string;
        distancerightAxis?: string;
        distanceleftAxis?: string;
    };
    intermidiate?: {
        interrightSphere?: string;
        interleftSphere?: string;
        interrightCylinder?: string;
        interleftCylinder?: string;
        interrightAxis?: string;
        interleftAxis?: string;
        interrightNearadd?: string;
        interleftNearAdd?: string;
    };
    near?: {
        nearrightSphere?: string;
        nearleftSphere?: string;
        nearrightCylinder?: string;
        nearleftCylinder?: string;
        nearrightAxis?: string;
        nearleftAxis?: string;
        nearrightNearadd?: string;
        nearleftNearAdd?: string;
    };
    pupilpre?: string;
    extrainfo?: string;
}
