/**
 * Created by rajith on 5/11/17.
 */
'use strict';
this.profile = JSON.parse(localStorage.getItem('profile'));
export const data = {
    id: this.profile.identities[0].user_id,
    provider: this.profile.identities[0].provider,
    userid: this.profile.user_id,
    profilepic: this.profile.picture_large
};
export const userid = data.id;
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/Global.component.js.map