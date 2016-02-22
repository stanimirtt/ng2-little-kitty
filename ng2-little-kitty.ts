import {Injectable} from 'angular2/core';

@Injectable()
export class LittleKittyService {

    constructor() { }

    public activate() {
        console.log("Hello Little Kitty! Do you like Angular2?");
    }
}

export default {
	providers: [LittleKittyService]
}