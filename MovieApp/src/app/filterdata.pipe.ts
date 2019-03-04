import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from "src/app/shared/movie.model";
 
@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {
 
  //filter items in the movies array by name and category
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return (it.name).toString().toLocaleLowerCase().includes(searchText) || (it.category).toString().toLocaleLowerCase().includes(searchText);
    });
  }
}