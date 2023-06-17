import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export const OptionalModules = [StoreDevtoolsModule.instrument({ maxAge: 25 })];
