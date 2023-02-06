import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area-card',
  templateUrl: './text-area-card.component.html',
  styleUrls: ['./text-area-card.component.css']
})
export class TextAreaCardComponent {

    answer:any;
    error:any;
    errorPlaceholder:any;

    createAnswer(text:string) : void {
      if(text == null || text.length == 0){
        this.formError()
        return;
      }
      let i = this.calculate(text)
      this.answer = i == 1 ? 'You typed ' + i + ' word' : 'You typed ' + i + ' words'
      console.log(this.answer)
    }

    formError() : void {
      this.error = 'Please write something!'
      this.createAlert();
    }

    calculate(text:string) : number{
      let i:number = 0;
      for(let word of text.split(" ")){
        if(this.isWord(word))
        i++
      }
      return i
    }

    isWord(word:string) : boolean {
      return word.length > 0
    }

    createAlert(){
      this.errorPlaceholder = document.getElementById('liveAlertPlaceholder')
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-danger alert-dismissible">`,
          `   <div>${this.error}</div>`,
          '   <a href="" class="btn-close" data-bs-dismiss="alert" aria-label="close">',
          '</div>'
        ].join('')
      
      this.errorPlaceholder.append(wrapper)
    }
}
