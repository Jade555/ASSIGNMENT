import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { CommonUtilProvider } from "../../providers/common-util/common-util";
import { Question1Model } from "../../model/question1";

/**
 * Generated class for the Question1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-question1",
  templateUrl: "question1.html"
})
export class Question1Page {
  index: number = 5;
  data: string = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private CommonUtil: CommonUtilProvider,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Question1Page");
  }

  findQ1() {
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.CommonUtil.callService1(this.index)
      .then((e: Question1Model) => {
        loader.dismiss();
        console.log(e);
        if (e.status) {
          this.data = e.results.join(",");
          console.log(this.data);
        }
      })
      .catch(e => {
        loader.dismiss();
        console.log(e);
      });
  }
}
