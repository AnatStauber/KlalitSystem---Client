
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
   
   export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request.headers.append('Access-Control-Allow-Origin','*');
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.message==="Http failure response for (unknown url): 0 Unknown Error"){
              errorMessage="Oops! seems like the server is down...";
            }
 else if (error.error instanceof ErrorEvent) {
              // client-side error
               errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.error.errorCode}\nerror Message: ${error.error.errorMessage} \nmessage: ${error.error.internalMessage} `;
            }
            window.alert(errorMessage);
            return throwError(errorMessage);
          })
        )
    }
   }