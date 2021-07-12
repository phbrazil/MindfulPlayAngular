import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MindfulPlay';

  isBlog = false;

  blog(){
    this.isBlog = true;
  }
  home(){
    this.isBlog = false;
  }

  links: any[] = [
    {
      title: "O que é Mindfulness?",
      id: "mindfulness",
      subLink: false,
      subLinks: [{}
      ]
    },
    {
      title: "Sobre a Mindful Play",
      id: "about",
      subLink: true,
      subLinks: [
        {
          title: "Metodologia",
          id: "metodologia"
        },
        {
          title: "Programa",
          id: "programa"
        }
      ]
    },
    {
      title: "Sobre a instrutora",
      id: "instrutora",
      subLink: false,
      subLinks: [{}
      ]
    },
    {
      title: "Mindfulness no ambiente educacional",
      id: "ambiente",
      subLink: true,
      subLinks: [
        {
          title: "Você sabia?",
          id: "sabia"
        },
        {
          title: "Por quê Mindfulness nas escolas?",
          id: "porque"
        },
        {
          title: "Benefícios para educadores e gestores",
          id: "benGestores"
        },
        {
          title: "Benefícios para crianças e adolescentes",
          id: "benAdol"
        },
        {
          title: "Um novo ABC",
          id: "novoABC"
        },

      ]
    },
    {
      title: "Perspectivas Neorocientíficas",
      id: "perspectivas",
      subLink: false,
      subLinks: [{}
      ]
    },
    {
      title: "Mindfulness e SEL",
      id: "sel",
      subLink: false,
      subLinks: [{}
      ]
    },
    {
      title: "Práticas Guiadas",
      id: "praticas",
      subLink: false,
      subLinks: [{}
      ]
    },
    /*{
      title: "Blog",
      id: "blog",
      path: "blog",
      subLink: false,
      subLinks: [{}
      ]
    },*/
    {
      title: "Contato",
      id: "contato",
      subLink: false,
      subLinks: [{}
      ]
    },

  ]

  links2: any[] = [
    {
      title: "Perspectivas Neorocientíficas",
      id: "perspectivas",
      subLink: false,
      subLinks: [{}
      ]
    },
    {
      title: "Mindfulness e SEL",
      id: "sel",
      subLink: false,
      subLinks: [{}
      ]
    },
    {
      title: "Práticas Guiadas",
      id: "praticas",
      subLink: false,
      subLinks: [{}
      ]
    },
    /*{
      title: "Blog",
      id: "blog",
      path: "blog",
      subLink: false,
      subLinks: [{}
      ]
    },*/
    {
      title: "Contato",
      id: "contato",
      subLink: false,
      subLinks: [{}
      ]
    },
  ]

}
