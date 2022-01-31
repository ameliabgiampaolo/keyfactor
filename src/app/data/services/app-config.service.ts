import {Injectable} from '@angular/core';

// JSON

/*TO DO: RESOLVER PARA IMPORTAR DESDE @JSON */
import JSON_LIST from '../json/data.json';

@Injectable({
    providedIn: 'root'
  })
  
  export class AppConfig {
    public list = JSON_LIST;
  }
  
  