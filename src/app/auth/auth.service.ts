import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

export interface useData{
    firstName: string
    lastName: string
    email: string
    password: string
    exp: number
}

export interface UserData{
    firstName: string
    lastName: string
    email: string
    password: string
    
}

export interface Logindata {
    email: string
    password: string
}

@Injectable()
export class AuthService {
    private token: string

    constructor(private http: HttpClient, private router: Router) {}

    public register(user: UserData): Observable<any> {
                const base =  this.http.post('http://localhost:3000/users/register', user)
                return base
            }

    public login(userLogin: Logindata): Observable<any> {
        const base =  this.http.post('http://localhost:3000/users/login', userLogin)
        const request = base.pipe(
            map((data)=>{
                console.log(data)
                if(data){
                }
                return data
            })
        )
        return request
    }
}

