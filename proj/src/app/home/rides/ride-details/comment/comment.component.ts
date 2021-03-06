import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CommentModel} from '../../../../models/comment.model';
import {RideStatus} from '../../../../models/ride.status';
import {NgForm, NgModel} from '@angular/forms';
import {Globals} from '../../../../global';
import {CommentService} from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: CommentModel;
  @Input() rideStatus: RideStatus;
  @Input() rideID: number;
  @Input() price: number;

  @ViewChild('f') commentForm: NgForm;
  descriptionInput: string;
  gradeInput: number;
  dateInput: Date;
  priceInput: number;

  disabled = true;


  constructor(public myGlobals: Globals, private commentService: CommentService) { }

  ngOnInit() {
    if (this.comment.Description !== '' || this.comment.Description != null) {
      console.log('copied');
      this.descriptionInput = this.comment.Description;
      this.gradeInput = this.comment.Grade;
      this.priceInput = this.price;
    }
    this.dateInput = this.comment.CreateDate;
    console.log('[debug] description: \'' + this.comment.Description + '\'');
    console.log('[debug] rideStatus: ' + this.rideStatus);

    if (this.myGlobals.myUser.accessLevel === 2) {
      if (this.rideStatus === 5) {
        if (this.comment.Description === '') {
          this.disabled = false;
        }
      }
    } else if (this.myGlobals.myUser.accessLevel === 1) {
      if (this.rideStatus === 4 || this.rideStatus === 6) {
        if (this.comment.Description === '') {
          this.disabled = false;
        }
      }
    }
    if (this.comment.Description !== '') {
      this.disabled = true;
    }
  }


  onSubmit() {
    this.commentService.sendComment(this.rideID, new CommentModel(this.descriptionInput, new Date(123123) , 0, this.rideID, 0, this.gradeInput))
      .subscribe(
        (data: any) => {
          if (data.comment === 'success') {
            console.log('TODO, Feedback on adding a comment');
            this.disabled = true;
          }
          else {
            console.log('TODO, Feedback on failed comment:' + data.message);
          }
        }
      );
  }

  gradeValid() {
    if (this.myGlobals.myUser.accessLevel === 2) {
      return true;
    } else if (this.gradeInput > 5 || this.gradeInput <= 0) {
      return false;
    } else {
      return true;
    }
  }
}
