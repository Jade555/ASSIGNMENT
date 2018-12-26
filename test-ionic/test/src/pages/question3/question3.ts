import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { CommonUtilProvider } from "../../providers/common-util/common-util";
import { Question3Model } from "../../model/question3";

/**
 * Generated class for the Question3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-question3",
  templateUrl: "question3.html"
})
export class Question3Page {
  index: number = 5;
  data: string = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private CommonUtil: CommonUtilProvider,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Question3Page");
  }

  findQ3() {
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.CommonUtil.callService3(this.index)
      .then((e: Question3Model) => {
        loader.dismiss();
        console.log(e);
        if (e.status) {
          let d = [];
          e.results.forEach(f => {
            d.push(f.value);
          });
          this.data = d.join(",");
        }
      })
      .catch(e => {
        loader.dismiss();
        console.log(e);
      });
  }
}
