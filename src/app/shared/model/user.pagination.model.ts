import {IUser} from "./user.model";

export interface UserPagination{
    users:IUser[],
    paginationHeader:PaginationHeader
}

interface PaginationHeader{
    currentPage:number,
    itemsPerPage:number,
    totalCount:number,
    totalPages:number
}