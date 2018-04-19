import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '../../../core/services/http.service';
import { API } from '../../../config/constants';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService implements Resolve<Observable<{}>> {

    constructor(private httpService: HttpService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.httpService.getData(API.boards)
            .pipe(
                map((response: any) => response.data)
            );
    }

    addBoard(board) {
        return this.httpService.postData(API.boards, board);
    }
}
