import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { CommonUtilProvider } from "../../providers/common-util/common-util";
import { Question2Model } from "../../model/question2";

/**
 * Generated class for the Question2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-question2",
  templateUrl: "question2.html"
})
export class Question2Page {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private CommonUtil: CommonUtilProvider,
    private loadingCtrl: LoadingController
  ) {}

  data: number = 0;

  ionViewDidLoad() {
    console.log("ionViewDidLoad Question2Page");
  }

  findQ2() {
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.CommonUtil.callService2()
      .then((e: Question2Model) => {
        loader.dismiss();
        console.log(e);
        if (e.status) {
          this.data = e.results;
        }
      })
      .catch(e => {
        loader.dismiss();
        console.log(e);
      });
  }
}
