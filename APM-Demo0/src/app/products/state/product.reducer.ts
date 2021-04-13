import { state } from "@angular/animations";
import { JsonpClientBackend } from "@angular/common/http";
import { createAction, createReducer, on } from "@ngrx/store";

export const productReducer = createReducer(
    { showProductCode: true },
    on(createAction('[Product] Toggle Product Code'), state => {
        console.log('origina state: ' + JSON.stringify(state));
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    })
)