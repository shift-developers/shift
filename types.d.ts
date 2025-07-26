interface Therapist {
  id: string;
  name: string;
  masterSessionName: string;
  image: string;
  sessionTags: Tag[];
}

interface Tag {
  name: string;
  icon: string | null;
}
