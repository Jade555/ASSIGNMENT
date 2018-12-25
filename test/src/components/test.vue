<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="display-4">ASSIGNMENT</h1>
      </div>
    </div>
    <b-tabs>
      <b-tab title="First Question " active>
        <div class="row pt-sm-4">
          <div class="col">
            <h4>3, 5, 9, 15, X - Finding X value</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="exampleInputEmail1">Index</label>
              <b-form-input
                type="number"
                class="form-control"
                id="input"
                aria-describedby="X at index"
                placeholder="X at index"
                v-model="inputQ1"
              ></b-form-input>
            </div>
            <button v-on:click="findQ1" class="btn btn-primary">Find</button>
          </div>
        </div>
        <div class="row">
          <div class="col">Answer : {{ansQ1}}</div>
        </div>
      </b-tab>
      <b-tab title="Second Question">
        <div class="row pt-sm-4">
          <div class="col">
            <h4>(Y + 24)+(10 × 2) = 99 Finding Y value</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button v-on:click="findQ2" class="btn btn-primary">Find</button>
          </div>
        </div>
        <div class="row">
          <div class="col">Answer : {{ansQ2}}</div>
        </div>
      </b-tab>
      <b-tab title="Third Question">
        <div class="row pt-sm-4">
          <div class="col">
            <h4>If 1 = 5 , 2 = 25 , 3 = 325 , 4 = 4325 Then 5 = X</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="exampleInputEmail1">Index</label>
              <b-form-input
                type="number"
                class="form-control"
                id="input"
                aria-describedby="X at index"
                placeholder="X at index"
                v-model="inputQ3"
              ></b-form-input>
            </div>
            <button v-on:click="findQ3" class="btn btn-primary">Find</button>
          </div>
        </div>
        <div class="row">
          <div class="col">Answer : {{ansQ3}}</div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      inputQ1: "",
      inputQ3: "",
      ansQ1: [],
      ansQ2: 0,
      ansQ3: []
    };
  },
  methods: {
    findQ1: function(event) {
      /* 
        1. Check input field
        2. Check cache data (LocalStorage)
        3. Call WebService (Nodejs Server)
        4. try catch webservice 
        5. Return data to view
      */
      if (this.inputQ1 != "") {
        let dataList = [];
        let localData = localStorage.getItem("ansQ1");
        if (localData) {
          dataList = JSON.parse(localData);
        }
        let findKey = dataList.filter(f => f.key == this.inputQ1);
        if (findKey.length == 0) {
          const baseURI = "http://localhost:3000/q1/" + this.inputQ1;
          this.$http
            .get(baseURI)
            .then(result => {
              var data = result.data;
              if (data) {
                this.ansQ1 = data.results;
                let tmp = {
                  key: this.inputQ1,
                  value: this.ansQ1
                };
                dataList.push(tmp);
                localStorage.setItem("ansQ1", JSON.stringify(dataList));
              }
            })
            .catch(e => {
              // when cannot call web service
              let number = Number(3);
              let results = [];
              for (var i = 1; i <= this.inputQ1; i++) {
                number = number + 2 * (i - 1);
                results.push(number);
              }
              this.ansQ1 = results;
              let tmp = {
                key: this.inputQ1,
                value: this.ansQ1
              };
              dataList.push(tmp);
              localStorage.setItem("ansQ1", JSON.stringify(dataList));
            });
        } else {
          // return data from localstorage
          this.ansQ1 = findKey[0].value;
        }
      }
    },
    findQ2: function(event) {
      /* 
        1. Check cache data (LocalStorage)
        2. Call WebService (Nodejs Server)
        3. try catch webservice 
        4. Return data to view
      */
      let localData = localStorage.getItem("ansQ2");
      if (!localData) {
        const baseURI = "http://localhost:3000/q2";
        this.$http
          .get(baseURI)
          .then(result => {
            var data = result.data;
            if (data) {
              this.ansQ2 = data.results;
              localStorage.setItem("ansQ2", this.ansQ2);
            }
          })
          .catch(e => {
            /* When call not call web service  */
            let result = 99 - 20 - 24;
            this.ansQ2 = result;
            localStorage.setItem("ansQ2", this.ansQ2);
          });
      } else {
        this.ansQ2 = localData;
      }
    },
    findQ3: function(event) {
      /* 
        1. Check input field
        2. Check cache data (LocalStorage)
        3. Call WebService (Nodejs Server)
        4. try catch webservice 
        5. Return data to view
      */

      if (this.inputQ3 != "") {
        let dataList = [];
        let localData = localStorage.getItem("ansQ3");
        if (localData) {
          dataList = JSON.parse(localData);
        }
        let findKey = dataList.filter(f => f.key == this.inputQ3);

        if (findKey.length == 0) {
          this.ansQ3 = [];
          const baseURI = "http://localhost:3000/q3/" + this.inputQ3;
          this.$http
            .get(baseURI)
            .then(result => {
              var data = result.data;
              if (data) {
                let tmp = data.results;
                tmp.forEach(e => {
                  this.ansQ3.push(e.value);
                });

                let tmpLocal = {
                  key: this.inputQ3,
                  value: this.ansQ3
                };
                dataList.push(tmpLocal);
                localStorage.setItem("ansQ3", JSON.stringify(dataList));
              }
            })
            .catch(e => {
              /* When call not call web service  */
              let results = [
                {
                  index: 1,
                  value: 5
                }
              ];
              for (var i = 1; i < this.inputQ3; i++) {
                var resultTmp = results.filter(f => f.index == i)[0];
                var tmp = i + 1 + "" + resultTmp.value;
                let temp = {
                  index: i + 1,
                  value: tmp
                };
                results.push(temp);
              }
              results.forEach(e => {
                this.ansQ3.push(e.value);
              });
              let tmpLocal = {
                key: this.inputQ3,
                value: this.ansQ3
              };
              dataList.push(tmpLocal);
              localStorage.setItem("ansQ3", JSON.stringify(dataList));
            });
        } else {
          this.ansQ3 = findKey[0].value;
        }
      }
    }
  }
};
</script>

