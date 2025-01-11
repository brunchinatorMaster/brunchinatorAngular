import { ChangeDetectorRef, Component } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { s3Host } from '../../utils/http/consts';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../utils/types/all.types';

@Component({
  selector: 'brunch-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  imageToUpload!:File;
  user!:User;
  profilePicture!:String;
  userServiceSubscription:Subscription = new Subscription();
  uploadImageServiceSubscription:Subscription = new Subscription();

  constructor(private uploadImageService: UploadImageService, private userService: UserService, private changeDetectorRef: ChangeDetectorRef){
    this.subscribeToUserService();
    this.subscribeToUploadImageService();
  }

  subscribeToUserService(){
    this.userServiceSubscription = this.userService.user.subscribe((user: User) => {
      this.user = user;
      this.profilePicture = `${s3Host}/${user.userName}`;
    });
  }

  subscribeToUploadImageService(){
    this.uploadImageServiceSubscription = this.uploadImageService.uploadImageResponse.subscribe((response) => {
      //TODO force re-getting of image
      this.profilePicture = '';
      this.changeDetectorRef.detectChanges();
      this.profilePicture = `${s3Host}/${this.user.userName}`;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.userServiceSubscription.unsubscribe();
    this.uploadImageServiceSubscription.unsubscribe();
  }

  updateProfilePicture(){
    const toUpload = new FormData();
    toUpload.append('image', this.imageToUpload);
    toUpload.append('userName', this.user.userName);
    this.uploadImageService.uploadImage(toUpload);
  }

  imageUploadHandler(e:any) {
    this.imageToUpload = e.target.files[0];
    this.updateProfilePicture();
  }
}
