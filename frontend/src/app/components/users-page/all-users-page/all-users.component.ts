import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

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
    constructor(private api: ApiService) { }

    ngOnInit() { }

    request() {
        this.api.post('http://192.168.10.167/api/user/get-all', {
            "currentPage": 0,
            "itemsPerPage": 10
        }).subscribe(data => console.log(data))
    }
}