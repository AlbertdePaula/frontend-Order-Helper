import { Injectable } from '@angular/core';
import { PartData } from 'src/app/interfaces/Part';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  private apiUrl = 'https://order-helper.herokuapp.com/parts/';
  //private apiUrl = 'http://localhost:3000/parts';

  constructor(private http: HttpClient, private MatSnackBar: MatSnackBar) { }

  getAll(): Observable<PartData[]> {
    return this.http.get<PartData[]>(this.apiUrl);
  }

  create(part: PartData): Observable<PartData> {
    return this.http.post<PartData>(this.apiUrl, part).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(parts: PartData): Observable<PartData> {
    const url = `${this.apiUrl}/${parts.id}`
    return this.http.put<PartData>(url, parts).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
}

readById(id: string): Observable<PartData> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<PartData>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    alert('Backand tá funcionando não meu fii')
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.MatSnackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

}
