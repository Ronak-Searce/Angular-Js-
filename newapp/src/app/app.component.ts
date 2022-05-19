import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trialapp';
  FirstM='';
  SecondM='';
  ThirdM='';
  counter=0;
  index_condn=false;
  invalid=false;
  cloneval='';
  indexval='';

  textval='';

  Condition=[false,false,false]

  public items=[];
  model_val = [this.FirstM,this.SecondM,this.ThirdM]


  Condition1=false;
  Condition2=false;
  Condition3=false;

  onClick(condn:boolean){
    condn=true;
    return condn;
  }

  onRemove(val: string,){
    val='';
    
    return val;
    
    
  }
  onClick2(condn:boolean){
    condn=false;
    return condn;
  }

  onCloning(no:any){
    console.log(no)
    if(no ===null){
      this.index_condn=true;
    }else{
    if(Number(no) ===0){
    this.textval=this.FirstM;
    this.model_val[0]= this.textval;
    this.Condition[0]=true;
    this.counter=0;
    }
    else{
      if(Number(no)===1){
        this.textval=this.SecondM;
        this.model_val[1]= this.textval;
        this.Condition[1]=true;
        this.counter=1;
      }else{
        if(Number(no)===2){
          this.textval=this.ThirdM;
          this.model_val[2]= this.textval;
          this.Condition[2]=true;
          this.counter=2;
        }else{
          this.invalid=true;
          this.textval=''
        }
      }
    }
  }






    
  }
  addForm(){
    if(
      this.invalid == true

    )
    {
    
    }
    else {
      this.items.push(this.textval);
    console.log(this.items)
    }
    
      


  }
  
  removeForm(index){
    this.items.splice(Number(index),1)
  }
}