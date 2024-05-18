import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/model/user.model';

@Component({
    selector: 'app-all-users',
    templateUrl: 'all-users.component.html',
    styleUrl: 'all-users.component.scss'
})

export class AllUsers implements OnInit {
    public usersDetails = [
        {
            id: '1',
            avatar: '',
            firstName: 'کوروش',
            lastName: 'عیدی وندی',
            userName: 'Kouroshey'
        },
        {
            id: '2',
            avatar: '',
            firstName: 'کوروش',
            lastName: 'عیدی وندی',
            userName: 'Kouroshey'
        },
        {
            id: '3',
            avatar: '',
            firstName: 'کوروش',
            lastName: 'عیدی وندی',
            userName: 'Kouroshey'
        },
        {
            id: '4',
            avatar: '',
            firstName: 'کوروش',
            lastName: 'عیدی وندی',
            userName: 'Kouroshey'
        },
    ]
    constructor() { }

    ngOnInit() { }
}