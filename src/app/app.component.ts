import { Component } from '@angular/core';

export interface NtiChartData {
dataList : string[];
name : string;
}

export interface SummaryChartData {
  summaryChartData : NtiChartData;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'buildv13';
  ngOnInit(){
    this.getData('ABC');
    
  }


  getData(key?:string){

    const riksRating :any = {
      'ABC' : {
        'timePeriod' : ['M60', 'M61','M62'],
         'value' :[1,2,3]
      }
    }
    const d = riksRating['ABC'] && riksRating['ABC'].timePeriod && riksRating['ABC'].timePeriod.length> 0
    && riksRating['ABC'].timePeriod.findIndex((d :any)=> d ==='M60');
    console.log(d);

    const p =  riksRating['ABC'] && !isNaN(d) && riksRating['ABC'].value && riksRating['ABC'].value.length> 0 &&
    riksRating['ABC'].value[d].toString();

    console.log(p);

    const px = {} as SummaryChartData;
    px.summaryChartData = {} as NtiChartData;
    px.summaryChartData.dataList = [] ;
    px.summaryChartData.dataList.push('1');
    console.log(px);


    const now = new Date().getUTCFullYear();
    console.log(now);
    const selectedYears = Array(now - (now- 6)).fill('').map((v, idx)=> now-idx).splice(1,5).sort();
    console.log(selectedYears);
    const hardCodedValues = [1.6,-0.55,5,4,0.88];
    const hardCode = selectedYears.map( (d, index)=> {
      return {year: d, value: hardCodedValues[index]};
    })
    console.log(hardCode);
    console.log(hardCode.find(d => d.year === 2016));
    const pd = hardCode.find(d => d.year === 2016);
    console.log(pd && pd.value);

    const x : number[] = [1, Number(-0.3), Number("2")];
    console.log(x);

   const num  = 4;
   let num2 = Array(num).fill('').map((v,idx)=> num-idx);
  num2.splice(num2.length-1);
  console.log(num2);

  for(let [item, index] of num2.entries()){
console.log(item);
console.log(index);
  }

  var arr = [1, 2, 3, 4, 5];
 
arr.splice(arr.length - 1);
console.log(arr);



  }

  onClick(){
console.log(1);
  }

  onClick2(){
console.log(2);
  }

}
