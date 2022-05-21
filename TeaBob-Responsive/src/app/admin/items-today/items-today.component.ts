import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface LooseObject {
  [key: string]: any
}

@Component({
  selector: 'app-items-today',
  templateUrl: './items-today.component.html',
  styleUrls: ['./items-today.component.css']
})
export class ItemsTodayComponent implements OnInit {

  constructor( private ds: DataService) { }

  ngOnInit(): void {
    this.stocksToday();
  }

  
drinks:number=0;
snacks:number=0;
addons:number=0;

drinks_profit:number=0;
snacks_profit:number=0;
addons_profit:number=0;
stocks:any;
stocksToday(){
  this.ds.sendApiRequest("stocksToday", null).subscribe((data: { payload: any; }) => {
  this.stocks = data.payload;

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks var
        this.drinks+= data.payload[i].food_quantity;

        this.drinks_profit += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons =  data.payload[i].cart_addon_name.split(",");
        
          this.addons += addons.length*data.payload[i].food_quantity;
          this.addons_profit+= (addons.length*10)*data.payload[i].food_quantity;
          this.drinks_profit = this.drinks_profit-((addons.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks var
        this.snacks+= data.payload[i].food_quantity;
        this.snacks_profit+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons =  data.payload[i].cart_addon_name.split(",");
          this.addons += addons.length*data.payload[i].food_quantity;
          this.addons_profit+= addons.length*10;

        }
        
        
      }
     
    }

    this.items_keycount();
  });

 
}


drinks_breakdown:any;
snacks_breakdown:any;
addons_breakdown:any;

  items_keycount() {
    var drinks = [];
    var snacks2 = [];
    var addons2 = [];

    


    for ( var i = 0, arrLen = this.stocks.length; i < arrLen; ++i ) {
 

      if(this.stocks[i]["cart_addon_name"]){
        let addons =  this.stocks[i].cart_addon_name.split(",");

        for(var j = 0; j < addons.length; j++){
        
                 
          for(var k = 0; k < this.stocks[i]["food_quantity"]; k++){
            addons2.push(addons[j]); 
            
          
          }
        }

      }

   
       

        if(this.stocks[i]['size_name']){
            
          
          for(var j = 0; j < this.stocks[i]["food_quantity"]; j++){
            drinks.push(this.stocks[i]["prod_name"]);
            
          
          }
          
         
        }
        else{

          for(var j = 0; j < this.stocks[i]["food_quantity"]; j++){
            snacks2.push(this.stocks[i]["prod_name"]);
          }
          
         }
    }

    var keyCount : LooseObject = {};


    for(i = 0; i < drinks.length; ++i) {
      
      if(!keyCount[drinks[i]]){
        keyCount[drinks[i]] = 0;
      }
    
        ++keyCount[drinks[i]];
    }

    

  var data = [];
        for(var key in keyCount){
          var drinks_arr = { snack: key, quantity: keyCount[key]};
          
            data.push(drinks_arr);
      }

      this.drinks_breakdown = data;


      var keyCount : LooseObject = {};


      for(i = 0; i < snacks2.length; ++i) {
        
        if(!keyCount[snacks2[i]]){
          keyCount[snacks2[i]] = 0;
        }
      
          ++keyCount[snacks2[i]];
      }
  
      
  
    var data = [];
          for(var key in keyCount){
            var snacks_arr = { snack: key, quantity: keyCount[key]};
          
            data.push(snacks_arr);
        }
  
   
        this.snacks_breakdown = data;

      var keyCount : LooseObject = {};


      for(i = 0; i < addons2.length; ++i) {
        
        if(!keyCount[addons2[i]]){
          keyCount[addons2[i]] = 0;
        }
      
          ++keyCount[addons2[i]];
      }
  
      
  
    var data = [];
          for(var key in keyCount){
            var addons_arr = { addons: key, quantity: keyCount[key]};
            
              data.push(addons_arr);
        }
  
  
        this.addons_breakdown = data;
  
  
       

  }


}
