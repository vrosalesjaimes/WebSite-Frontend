import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  bussyRequests:number = 0;

  constructor(private spinnerService:NgxSpinnerService) { }

  busy(){
    console.log('loadin...')
    this.bussyRequests++;
    this.spinnerService;
    this.spinnerService.show(undefined, {
      type: 'ball-scale-ripple',
      bdColor: 'rgba(0,0,0,0.8)',
      color: 'white',
      template: '<div class="loader spinner-overlay"> <svg class="loader" width="240" height="240" viewBox="0 0 240 240"> <circle class="loader-ring loader-ring-a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle> <circle class="loader-ring loader-ring-b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle> <circle class="loader-ring loader-ring-c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle> <circle class="loader-ring loader-ring-d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle> </svg> </div> <style> .loader { width: 6em; display: flex; margin: auto; justify-content: center; align-items: center; height: 90vh; overflow: hidden; } .loader-ring { animation: ringA 2s linear infinite; } .loader-ring-a { stroke: #8a2bc5; } .loader-ring-b { animation-name: ringB; stroke: #e49814; } .loader-ring-c { animation-name: ringC; stroke: #f40892; } .loader-ring-d { animation-name: ringD; stroke: #146be4; } /* Animations */ @keyframes ringA { from, 4% { stroke-dasharray: 0 660; stroke-width: 20; stroke-dashoffset: -330; } 12% { stroke-dasharray: 60 600; stroke-width: 30; stroke-dashoffset: -335; } 32% { stroke-dasharray: 60 600; stroke-width: 30; stroke-dashoffset: -595; } 40%, 54% { stroke-dasharray: 0 660; stroke-width: 20; stroke-dashoffset: -660; } 62% { stroke-dasharray: 60 600; stroke-width: 30; stroke-dashoffset: -665; } 82% { stroke-dasharray: 60 600; stroke-width: 30; stroke-dashoffset: -925; } 90%, to { stroke-dasharray: 0 660; stroke-width: 20; stroke-dashoffset: -990; } } @keyframes ringB { from, 12% { stroke-dasharray: 0 220; stroke-width: 20; stroke-dashoffset: -110; } 20% { stroke-dasharray: 20 200; stroke-width: 30; stroke-dashoffset: -115; } 40% { stroke-dasharray: 20 200; stroke-width: 30; stroke-dashoffset: -195; } 48%, 62% { stroke-dasharray: 0 220; stroke-width: 20; stroke-dashoffset: -220; } 70% { stroke-dasharray: 20 200; stroke-width: 30; stroke-dashoffset: -225; } 90% { stroke-dasharray: 20 200; stroke-width: 30; stroke-dashoffset: -305; } 98%, to { stroke-dasharray: 0 220; stroke-width: 20; stroke-dashoffset: -330; } } @keyframes ringC { from { stroke-dasharray: 0 440; stroke-width: 20; stroke-dashoffset: 0; } 8% { stroke-dasharray: 40 400; stroke-width: 30; stroke-dashoffset: -5; } 28% { stroke-dasharray: 40 400; stroke-width: 30; stroke-dashoffset: -175; } 36%, 58% { stroke-dasharray: 0 440; stroke-width: 20; stroke-dashoffset: -220; } 66% { stroke-dasharray: 40 400; stroke-width: 30; stroke-dashoffset: -225; } 86% { stroke-dasharray: 40 400; stroke-width: 30; stroke-dashoffset: -395; } 94%, to { stroke-dasharray: 0 440; stroke-width: 20; stroke-dashoffset: -440; } } @keyframes ringD { from, 8% { stroke-dasharray: 0 440; stroke-width: 20; stroke-dashoffset: 0; } 16% { stroke-dasharray: 40 400; stroke-width: 30; stroke-dashoffset: -5; } 36% { stroke-dasharray: 40 400; stroke-width: 30; stroke-dashoffset: -175; } 44%, 50% { stroke-dasharray: 0 440; stroke-width: 20; stroke-dashoffset: -220; } 58% { stroke-dasharray: 40 400; stroke-width: 30; stroke-dashoffset: -225; } 78% { stroke-dasharray: 40 400; stroke-width: 30; stroke-dashoffset: -395; } 86%, to { stroke-dasharray: 0 440; stroke-width: 20; stroke-dashoffset: -440; } } </style>'
    });
  }
  
  idle(){
    this.bussyRequests--;
    if(this.bussyRequests <= 0){
      this.bussyRequests = 0;
      this.spinnerService.hide();
    }
  }
}
