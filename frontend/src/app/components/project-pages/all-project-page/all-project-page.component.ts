import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-all-project-page',
  templateUrl: './all-project-page.component.html',
  styleUrl: './all-project-page.component.scss'
})
export class AllProjectPageComponent implements OnInit {

  constructor(private chatService: ChatService) {

  }
  ngOnInit(): void { }

  chatDetailsGetter() {

  }

  public ProjectList = [
    {
      id: 1,
      title: "عنوان پروژه",
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
      startDate: '19/8/1400',
      endDate: '20/11/1402',
      status: 'active'
    },
    {
      id: 2,
      title: "عنوان پروژه",
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
      startDate: '19/8/1400',
      endDate: '20/11/1402',
      status: 'active'
    },
    {
      id: 3,
      title: "عنوان پروژه",
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
      startDate: '19/8/1400',
      endDate: '20/11/1402',
      status: 'active'
    },
    {
      id: 4,
      title: "عنوان پروژه",
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
      startDate: '19/8/1400',
      endDate: '20/11/1402',
      status: 'active'
    },
    {
      id: 5,
      title: "عنوان پروژه",
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
      startDate: '19/8/1400',
      endDate: '20/11/1402',
      status: 'active'
    },
    {
      id: 6,
      title: "عنوان پروژه",
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
      startDate: '19/8/1400',
      endDate: '20/11/1402',
      status: 'active'
    },
  ]

  getProjects() { }


}
