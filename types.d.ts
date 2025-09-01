interface Therapist {
  id: string;
  name: string;
  specialization: string;
  image: string;
  sessionNumber: number;
  order: number;
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

interface TeamMember {
  id: string;
  fullName: string;
  jobTitle: string;
  image: string;
}
