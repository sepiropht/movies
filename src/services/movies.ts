export interface Movies {
  id: number;
  title: string;
  category: string;
  likes: number;
  dislikes: string;
}

const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
  },
  {
    id: "11",
    title: "Gladiator",
    category: "Peplum",
    likes: 22,
    dislikes: 0,
  },
  {
    id: "12",
    title: "Matrix",
    category: "SciFi",
    likes: 10,
    dislikes: 10,
  },
  {
    id: "13",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "14",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "15",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "16",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "17",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "18",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
  },
  {
    id: "19",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
  },
  {
    id: "20",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "21",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "22",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
  },
  {
    id: "23",
    title: "Gladiator",
    category: "Peplum",
    likes: 22,
    dislikes: 0,
  },
  {
    id: "24",
    title: "Matrix",
    category: "SciFi",
    likes: 10,
    dislikes: 10,
  },
];

export const movies$: Promise<Movies[]> = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
