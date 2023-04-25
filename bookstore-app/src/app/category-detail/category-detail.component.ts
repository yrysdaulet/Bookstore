import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent {
  categories = [
    {
      id: 1,
      name: "Fantasy",
      description: "Fantasy is a genre of speculative fiction that typically involves magical or supernatural elements set in an imaginary world or alternate reality, featuring themes of heroism, adventure, and epic battles between good and evil. It can include a wide range of creatures, settings, and storylines.",
      books: "assets/images/aigerim.png"
    },
    {
      id: 2,
      name: "Detective",
      description: "Detective fiction is a genre of crime fiction that focuses on a detective, private investigator, or amateur sleuth who investigates a crime or series of crimes, typically a murder. The story often involves the gathering of clues and evidence, the questioning of suspects, and the deduction of the perpetrator's identity. The genre can include elements of suspense, mystery, and psychological thriller, and can be set in various settings and time periods.",
      books: "assets/images/aigerim.png"
    },
    {
      id: 3,
      name: "Horrors",
      description: "Horror books are a genre of fiction that seeks to frighten, scare, or unsettle the reader. They typically feature elements of fear, suspense, and supernatural or paranormal occurrences. The genre often includes themes of death, evil, the unknown, and the macabre. Horror books can range from classic ghost stories to modern psychological thrillers, and can be set in various locations and time periods. They often aim to provoke a visceral response from the reader, such as fear or disgust, and can be both entertaining and thought-provoking.",
    },
    {
      id: 4,
      name: "Romance novels",
      description: "Romance novels are a genre of fiction that typically focuses on the romantic relationships between two or more characters. The genre can include various sub-genres, such as historical romance, contemporary romance, paranormal romance, and erotic romance. Romance novels often feature a central love story and explore themes of love, passion, and desire. They can be light-hearted or emotionally intense, and may also include elements of other genres, such as drama, comedy, or suspense. Overall, romance novels aim to provide readers with a satisfying and emotionally fulfilling love story.",
    },
    {
      id: 5,
      name: "Psychology",
      description: "Psychology books are a genre of non-fiction that explore various aspects of human behavior, emotion, and mental processes. These books can cover a wide range of topics, from general psychology to more specific subfields such as developmental psychology, social psychology, clinical psychology, and cognitive psychology. The genre often includes theories, research findings, case studies, and practical advice on how to understand and address psychological issues. Psychology books can provide insight into human nature and help readers better understand themselves and those around them. They are often written in an accessible style and can be of interest to both professionals in the field and general readers.",
      books: "assets/images/yrysdaulet.png"
    },
  ]
}
