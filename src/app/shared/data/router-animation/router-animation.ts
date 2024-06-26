import { trigger, animate, transition, style, query, group, animateChild, state, sequence } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
        query(':enter', style({ transform: 'translateX(100%)' })),
        sequence([
          query(':leave', animateChild()),
          group([
            query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                style({ transform: 'translateX(-100%)'})
              )
            ]),
            query(':enter', [
              style({ transform: 'translateX(100%)' }),
              animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                style({ transform: 'translateX(0%)' })
              )
            ]),
          ]),
          query(':enter', animateChild())
        ])
      ])
   
]);


