import {Injectable} from "@angular/core";
import {ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UtilsFunction {
  getMessageError(fieldName: string, error: ValidationErrors) {
    if (error['required']) {
      return "Le champ " + fieldName + " doit être complété.";
    } else if (error['minlength']) {
      return "Le champ " + fieldName + " doit avoir un minimum de " + error['minlength']['requiredLength'] + " caractères.";
    } else {
      return "";
    }
  }
}

