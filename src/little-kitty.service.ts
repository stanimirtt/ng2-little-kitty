import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class LittleKittyService {

    constructor(http: Http) {
        // ...
    }

    activate () {
		console.log("Helloooo");
    }
}