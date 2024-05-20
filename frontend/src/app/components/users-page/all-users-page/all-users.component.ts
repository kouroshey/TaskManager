import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../shared/model/user.model"
import {UsersService} from "../../../shared/services/users.service";
import {UserPagination} from "../../../shared/model/user.pagination.model";
import {NgbModal,ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-all-users',
    templateUrl: 'all-users.component.html',
    styleUrl: 'all-users.component.scss'
})

export class AllUsers implements OnInit {
  
    public userData:UserPagination;
    public currentPage:number;
    public itemsPerPage:number;
    public user:IUser;
    
    constructor(
        private userService:UsersService,
        private modalService:NgbModal
    ) { }
    
    

    ngOnInit() {

        try {
            var pageData : any = JSON.parse(localStorage.getItem("pagination"))

            if(pageData.type==="users")
                this.showUsers(pageData.currentPage,pageData.itemsPerPage);
            else
                this.showUsers(1,10) 
        }
        catch (e)
        {
            this.showUsers(1,10)

        }
        

    }
    
   public showUsers(currentPage:number,itemsPerPage:number)
    {
       this.currentPage=currentPage;
       this.itemsPerPage=itemsPerPage;
       localStorage.setItem("pagination",JSON.stringify({type:"users",currentPage:currentPage,itemsPerPage:itemsPerPage,search:''}))
       this.userService.getAllUsers({itemsPerPage:this.itemsPerPage,currentPage:this.currentPage}).subscribe(res=>{this.userData=res})
        
    }


    closeResult = '';

    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            },
        );
    }

    private getDismissReason(reason: any): string {
        switch (reason) {
            case ModalDismissReasons.ESC:
                return 'by pressing ESC';
            case ModalDismissReasons.BACKDROP_CLICK:
                return 'by clicking on a backdrop';
            default:
                return `with: ${reason}`;
        }
    }
}