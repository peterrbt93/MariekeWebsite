import { Component, ViewEncapsulation} from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';
import { About } from '../models/about';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./aboutme.component.scss'],
  animations: [
    fade
  ]
})
export class aboutmeComponent {

  abouts: About[];


  constructor(private seoService: SeoService) {

    const content = 'Marieke - About me';
    const title = 'Marieke - About me';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

    this.abouts = [];

  }



  ngOnInit(): void {
    this.abouts = [
      new About(
        "About me",
        ` <p>
            I am a former theoretical physicist with a background in high energy theory, specifically quantum field theory and string theory. 
            My research focused on nonperturbative physics, phase structures, and defects, which I studied using generalized symmetries and their 't Hooft anomalies.
            My work in string theory centered on constructions of supersymmetric quantum field theories,
            where I used tools from geometry and algebraic topology to understand strongly-coupled fixed points, defects, and dualities.
          </p>
          <p>
            I currently do advanced machine learning and analytics for <b>Half/Space</b>, one of Europe's top AI companies.
          </p>  
        `
      ),

      new About(
        "Positions",
        ` 
        <p class="dateTitle">2025 &mdash; current</p>
          <p>
            <b>Senior Data Scientist</b><br>
            <i>Half/Space</i><br>
          </p>
        <p class="dateTitle">09/2022 &mdash; 2024</p>
          <p>
            <b>Research Assistant Professor</b><br>
            <i>SCGP, Stony Brook U.</i> | <i>Stony Brook, NY, USA</i><br>
          </p>
        `
      ),

      new About(
        "Education",
        ` 
          <p class="dateTitle">10/2018 &mdash; 09/2022</p>
          <p>
            <b>DPhil in Mathematical Physics</b><br>
            <i>Mathematical Institute, University of Oxford</i> | <i>Oxford, UK</i><br>
            Advisor: Prof. Sakura Schafer-Nameki. Thesis title: Strongly coupled quantum field theories from string theory.
          </p>
          <p class="dateTitle">02/2016 &mdash; 04/2018</p>
          <p>
            <b>MSc in Quantum Physics</b> <br>
            <i>Niels Bohr Institute, University of Copenhagen</i> | <i>Copenhagen, DK</i><br>
            Thesis advisor: Prof. Niels Obers. Thesis title: Newton-Cartan gravity and 3D Chern-Simons theory.
          </p>
          <p class="dateTitle">06/2016 &mdash; 09/2016</p>
          <p>
            <b>Summer Student</b> <br>
            <i>CERN Summer School, CERN</i> | <i>Geneva, CH</i><br>
            Project: The Information Paradox and Firewalls. Project advisor: Kyriakos Papadodimas.
          </p>
          <p class="dateTitle"> 09/2014 &mdash; 06/2015</p>
          <p>
            <b>Undergraduate Exchange Programme</b><br>
            <i>Caltech, California Institute of Technology</i> | <i>Pasadena, CA, USA</i><br>
            Independent project: Dark matter study. Project supervisors: Clifford Cheung and Maria Spiropulu.
          </p>
          <p class="dateTitle"> 09/2012 &mdash; 11/2015</p>
          <p>
            <b>BA in Physics</b> <br>
            <i>Niels Bohr Institute, University of Copenhagen</i> | <i>Copenhagen, DK</i><br>
            Thesis advisor: Prof. Jens Paaske. Thesis title: Fock-Darwin states for an elliptical spin-orbit coupled quantum well.
          </p>   
        `
      ),

      new About(
        "Awards and Scholarships",
        `<p>
        <b>Awards</b>
      <ul>
          <li>Award for <i>Contributing to the Department</i>, 2020. Awarded by the Mathematical Institute, University of Oxford for 
          <i>her contribution to research group activities, more specifically for organising student group meetings/presentations during 
          lockdown and ensuring new student involvement</i>.</li>
          <li><i>Lorup Honorary Graduate Award</i>, 2017. Awarded by the Lorup Foundation, Niels Bohr Institute, University of Copenhagen 
          for <i>academic excellence, as well as original and advanced level of MSc thesis work</i>.</li>
      </ul>
      </p>
      <p>
      <b>Scholarships</b><br>
      <ul>
          <li><i>Milne Scholarship</i>, Apr 2022-Jul 2022. Awarded by the University of Oxford and the EPSRC for the full-time DPhil in 
          Mathematics.</li>
          <li><i>Oxford-Wolfson Marriott Graduate Scholarship</i>, Sep 2018-Apr 2022. Awarded by the University of Oxford and the EPSRC 
          for the full-time DPhil in Mathematics.</li>
      </ul>
      </p> 
        `
      ),

      new About(
        "Organization",
        `
          <p>
            <b>Organization of Conferences and Workshops</b>
          </p>
          <p class="dateTitle">10/2021</p>
          <p>
            Annual Mathematical Physics Student Conference, 2nd edition<br>
            <i>University of Oxford</i> | <i>Oxford, UK</i>
          </p>
          <p class="dateTitle">03/2021</p>
          <p>
            Oxford Meets the Hologram, online group workshop on Holography with <br>
            student, postdoc and faculty engagement<br>
            <i>University of Oxford</i> | <i>Oxford, UK</i>
          </p>
          <p class="dateTitle">07/2020</p>
          <p>
            Annual Mathematical Physics Student Conference, co-founder<br>
            <i>University of Oxford</i> | <i>Oxford, UK</i>
          </p>
          <p class="dateTitle">09/2019</p>
          <p>
            Geometry and Strings Conference 2019<br>
            <i>University of Oxford</i> | <i>Oxford, UK</i>
          </p>
          <p>
          <b>Professional Responsibilities and Contributions</b>
          </p>
          <p class="dateTitle">2021 &mdash; current</p>
          <p>
            Referee for Journal of High Energy Physics (JHEP)
          </p>
          <p class="dateTitle">2020 &mdash; 2022</p>
          <p>
            Co-organizer of the weekly Oxford String Theory Journal Club<br>
            <i>University of Oxford</i> | <i>Oxford, UK</i>
          </p>
          <p class="dateTitle">2020 &mdash; 2022</p>
          <p>
            Student Representative for the Mathematical Physics DPhil students<br>
            <i>University of Oxford</i> | <i>Oxford, UK</i>
          </p>
          <p class="dateTitle">12/2020, 12/2021</p>
          <p>
            Undergraduate Admissions interviewer, respectively as junior <br>
            interviewer with James Sparks, subsequently as senior interviewer<br>
            <i>Oriel College, University of Oxford</i> | <i>Oxford, UK</i>
          </p>
          <p class="dateTitle">09/2016</p>
          <p>
          Co-organizer of the Physics MSc social and academic introduction program<br>
          <i>Niels Bohr Institute, University of Copenhagen</i> | <i>Copenhagen, DK</i>
          </p>
          <p class="dateTitle">09/2013</p>
          <p>
          Co-organizer of the Physics BA social and academic introduction program<br>
          <i>Niels Bohr Institute, University of Copenhagen</i> | <i>Copenhagen, DK</i>
          </p>
        `
      )
    ]
  }
}

