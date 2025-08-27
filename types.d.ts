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

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
}

interface Client {
  id: string;
  fullName: string;
  jobTitle: string;
  description: string;
  image: string;
}
