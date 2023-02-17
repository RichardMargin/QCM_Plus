import { Injectable } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UtilsFunction{
    getMessageError(fieldName: string, error: ValidationErrors) {
        if (error['required']) {
          return fieldName + " doit être compléter.";
        } else if (error['minlength']) {
          return fieldName + " doit avoir un minimum de " + error['minlength']['requiredLength'] + " carateres.";
        } else {
          return "";
        }
      }
}