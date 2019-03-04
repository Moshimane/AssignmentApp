import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderpipePipe {

  //order movies in descending order based on movie rating
 transform(array, orderBy){
 
     if (!orderBy){
       return array;
     } 
 
     
    {
       return Array.from(array).sort((item1: any, item2: any) => { 
         return this.orderByComparator(item2[orderBy], item1[orderBy]);
       });
     }
 
 }
 
 //Compare rating for object a and b
 orderByComparator(a:any, b:any):number{
 
     
     {
       if(a < b) return -1;
       if(a > b) return 1;
      }
 
     return 0; //don't do anything i rating is equal
 }
}