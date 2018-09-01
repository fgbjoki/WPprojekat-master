
import {Injectable} from '@angular/core';
import {Headers, HttpModule, Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {CommentModel} from '../../../../models/comment.model';



@Injectable()
export class CommentService {

  constructor(private http: Http) {}

  public sendComment(rideID: number, comment: CommentModel) {
    const head = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:51383/api//ride/addComment',
      {
        RideID: rideID,
        Comment: comment
      }, {headers: head})
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );
  }

}
