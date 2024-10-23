import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { delay, finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(LoaderService);
  busyService.busy();
  
  return next(req).pipe(
    delay(2000),
    finalize(() => busyService.idle())
  )
};
