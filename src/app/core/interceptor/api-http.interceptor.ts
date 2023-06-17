import { Inject, Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { ENV_CONFIG } from "@core/tokens/env-config.token";
import { EnvironmentConfig } from "@typings/environment";

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  constructor(@Inject(ENV_CONFIG) private readonly env: EnvironmentConfig) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const clonedRequest = req.url.startsWith("http")
      ? req
      : req.clone({ url: `${this.env.apiUrl}/${this.cleanupURL(req.url)}` });

    return next.handle(clonedRequest);
  }

  private cleanupURL(url: string): string {
    return url.startsWith("/") ? url.slice(1) : url;
  }
}
