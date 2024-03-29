import { Component, OnInit } from '@angular/core'
import { Slide } from '@models/Slide'

// Services
import { ProgressBarService } from '@services/progress-bar-service'

@Component({
  selector: 'home-slick-carousel',
  templateUrl: './home-slick-carousel.component.html',
  styleUrls: ['./home-slick-carousel.component.scss'],
})
export class HomeSlickCarouselComponent implements OnInit {
  showSpinner = true
  slides: Slide[] = []

  slideConfig = {
    centerMode: true,
    centerPadding: '60px',
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  }

  constructor(private progressBarService: ProgressBarService) {
    // this.progressBarService.show(true)
    this.showSpinner = false
  }

  ngOnInit(): void {
    this.slides = [
      {
        imgUrl: './assets/images/content/slides/qrj.png',
        url: 'https://techinformi.ge/ge/?page=footer/qrj',
        translatedData: {
          title: 'ქართული რეფერატული ჟურნალი (ქრჟ)',
          text:
            'ქართული რეფერატული ჟურნალი (ქრჟ) ტექინფორმში 2000 წლიდან გამოდის. ის             ერთადერთი რეფერატული ჟურნალია საქართველოში, რომელიც თავს უყრის სამეცნიერო-ტექნიკური სფეროს 100-მდე             დასახელების პერიოდულ გამოცემებში ასახულ პუბლიკაციების რეფერატებს. ქრჟ პოლითემატურია, რეფერატები დალაგებულია             ეკონომიკური თანამშრომლობისა და განვითარების ორგანიზაციის (OECD) სამეცნიერო დარგების კლასიფიკატორის მიხედვით.',
        },
      },
      {
        imgUrl: './assets/images/content/slides/techinformi.jpg',
        url: '/about-us/general',
        translatedData: {
          title: 'ინსტიტუტი ტექინფორმი',
          text:
            'საქართველოს ტექნიკური უნივერსიტეტის ინსტიტუტი ტექინფორმი წარმოადგენს საქართველოში სამეცნიერო-ტექნიკური               ინფორმაციის დარგში მოთავე ორგანიზაციას. იგი მრავალდარგოვანი და დარგთაშორისი საინფორმაციო ცენტრია.               ტექინფორმი ახორციელებს სამეცნიერო-ტექნიკური ინფორმაციის ძიების, შეგროვების, კლასიფიკაციის, ანალიზისა და               სინთეზის, შენახვისა და გავრცელების სფეროში სამეცნიერო- კვლევით, ტექნოლოგიურ და პრაქტიკულ საქმიანობას.',
        },
      },
      {
        imgUrl: './assets/images/content/slides/db.png',
        url: '/about-us/general',
        translatedData: {
          title: 'ინსტიტუტი ტექინფორმი',
          text:
            'საქართველოს ტექნიკური უნივერსიტეტის ინსტიტუტი ტექინფორმი წარმოადგენს საქართველოში სამეცნიერო-ტექნიკური               ინფორმაციის დარგში მოთავე ორგანიზაციას. იგი მრავალდარგოვანი და დარგთაშორისი საინფორმაციო ცენტრია.               ტექინფორმი ახორციელებს სამეცნიერო-ტექნიკური ინფორმაციის ძიების, შეგროვების, კლასიფიკაციის, ანალიზისა და               სინთეზის, შენახვისა და გავრცელების სფეროში სამეცნიერო- კვლევით, ტექნოლოგიურ და პრაქტიკულ საქმიანობას.',
        },
      },
    ]
  }
}
