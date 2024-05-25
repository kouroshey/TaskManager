import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private api: ApiService) {

  }

  getAllSummery() {
    // getting all projects // post
  }

  getChatView() {
    // getting chat information // post
  }

  getHistory() {
    // getting chat messages and history // post
  }
}