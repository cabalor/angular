import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiY2FiYWwiLCJhZG1pbiI6dHJ1ZX0.M3qaMVVQ_TSETf1q0ckTEA5rneswPa2OKeF1OdWZTsU';
    // token wygenerowany z jwt, hard.
    backend.connections.subscribe((connection: MockConnection) => {
      
      setTimeout(() => {
        
        if (connection.request.url.endsWith('/api/authenticate') && 
            connection.request.method === RequestMethod.Post) {
            let body = JSON.parse(connection.request.getBody());

            if (body.email === 'cbl@cbl.pl' && body.password === 'qwerty') {
              connection.mockRespond(new Response(
                new ResponseOptions({ 
                  status: 200, 
                  body: { token: token }
                })
              ));
            } else {
              connection.mockRespond(new Response(
                new ResponseOptions({ status: 200 })
              ));
            }
        }
        
        if (connection.request.url.endsWith('/api/orders') && connection.request.method === RequestMethod.Get) {
            if (connection.request.headers.get('Authorization') === 'auth ' + token) {
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200, body: [1, 2, 3] })
                ));
            } else {
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 401 })
                ));
            }
        }     
           

      }, 2000);
    });
 
    return new Http(backend, options);
}
 
export let BackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};