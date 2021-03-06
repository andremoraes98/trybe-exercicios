const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const formatBooks = books.map( (book) => `${book.name} - ${book.genre} - ${book.author.name}`);


// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
const objectAuthor = books.map( (book) =>{
  return {
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear
  }
}).sort((a, b) => {
  if (a.age > b.age) {
    return 1
  } else if (a.age < b.age) {
    return -1
  } else {
    return 0
  }
});


// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const booksOfCienceFictionOrFantasy = books.filter( (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');


// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
/* const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
]; */

const oldBooksOrdered =  books.filter( (book) => {
  return 2022 - book.releaseYear >= 60
}).sort( (a, b) => a.releaseYear - b.releaseYear);


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
/* const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
]; */

const fantasyOrScienceFictionAuthors = books.map( (book) => book.author.name).sort();

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
/* const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
]; */

const oldBooks = books.filter( (book) => 2022 - book.releaseYear >= 60).map( (book) => book.name);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = books.map( (book) => {
  return {
    authorName: book.author.name.split(' ', 3),
    bookName: book.name
  }
})

const bookWhoAuthorHas3InitialOnName = authorWith3DotsOnName.filter( (item) => item.authorName[0].length === 2 && item.authorName[1].length === 2 && item.authorName[2].length === 2).map( (book) => book.bookName);