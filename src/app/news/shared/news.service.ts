import {Injectable} from '@angular/core';
import {News} from './news';
import {NewsSeed} from '../../news-seed';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news: Array<News> = [
    {
      id: 1,
      title: 'Titre 1',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg',
      text: 'Description de la news 1'
    },
    {
      id: 2,
      title: 'OL',
      img: 'http://www.olympique-et-lyonnais.com/wp-content/uploads/2018/05/Maillot-OL-2018-2019.jpg',
      text: 'L\'Olympique lyonnais (OL) est un club de football français fondé en 1950. Le club, basé au Groupama Stadium à Décines-Charpieu, est présidé depuis juin 1987 par Jean-Michel Aulas et l\'équipe masculine est entraînée par Bruno Génésio depuis le 24 décembre 2015. Il évolue depuis 1989 en Ligue 1.\n' +
      '\n' +
      'L\'Olympique lyonnais évolue dans le Groupama Stadium et s\'entraîne au Groupama Training Center à Décines. Il possède à son palmarès sept titres — obtenus consécutivement — de champion de France, cinq Coupes de France et une Coupe de la Ligue, ce qui en fait l\'un des clubs les plus titrés du championnat de France masculin.\n' +
      '\n' +
      'Le club connaît son apogée au cours des années 2000 avec sept titres consécutifs de champion de France, ce qui constitue un record françaisnote 2, entre 2002 et 2008, une Coupe de France et une Coupe de la Ligue. La section féminine du club a remporté quant à elle le championnat féminin à quatorze reprisesnote 3. En 2007, les sections masculines et féminines remportent chacune leur championnat de France, pour la première fois dans l\'histoire du football français. En 2008, l’Olympique lyonnais fait mieux en remportant les deux doublés coupe-championnat, homme et femme. Depuis le milieu des années 2000, la section féminine occupe les plus hauts niveaux du football féminin européen (4 titres en Ligue des champions).'
    },
    {
      id: 3,
      title: 'Sebastian Vettel',
      img: 'https://lesvoitures.fr/wp-content/uploads/2018/03/Vettel-Ferrari-GP-Australie-2018-1140x480.jpg',
      text: 'Sebastian Vettel (né le 3 juillet 1987 à Heppenheim en Allemagne) est un pilote automobile allemand, vainqueur quatre fois consécutivement du championnat du monde de Formule 1, en 2010, 2011, 2012 et 2013 comme seuls avant lui l\'avaient été Juan Manuel Fangio et Michael Schumacher.\n' +
      '\n' +
      'Après avoir été pilote-essayeur pour BMW Sauber F1 Team et fait ses débuts en Formule 1 à l\'occasion du Grand Prix des États-Unis 2007, Vettel est engagé comme pilote titulaire de la Scuderia Toro Rosso avant de rejoindre pour la saison 2009 l\'écurie Red Bull Racing, aux côtés de l\'Australien Mark Webber.'
    },
    {
      id: 4,
      title: 'A350',
      img: 'https://www.ainonline.com/sites/default/files/styles/ain30_fullwidth_large_2x/public/uploads/2017/11/a350-1000-in-flight-.jpg?itok=ZaJxg1aB&timestamp=1511276729',
      text: 'L\'Airbus A350 XWB est un avion de ligne long-courrier et gros porteur du constructeur européen Airbus. Initialement baptisé A350, ce modèle était dérivé de l\'A330 ; toutefois, à la suite des remarques des compagnies aériennes, il a été décidé à la mi-juillet 2006 d\'en revoir le concept et de le munir d\'un fuselage plus large, à la fois par rapport aux A330 et A340, et surtout par rapport à son principal concurrent, le Boeing 7874.'
    },
  ];

  public news$: BehaviorSubject<any>;

  constructor() {
    this.news$ = new BehaviorSubject<any>('');
    this.news$.next(this.news);
  }

  findById(id) {
    return this.news.filter(function (item) {
      return item.id == id;
    })[0];
  }
}
