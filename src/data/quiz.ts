export const quiz = {
  subject: "Estrutura de Dados",
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question:
        "Qual estrutura de dados pode ser usada para verificar se uma sintaxe possui parênteses balanceados?",
      answers: ["Queue", "Tree", "List", "Stack"],
      correctAnswer: "Stack",
    },
    {
      id: 2,
      question:
        "Uma árvore binária completa com 6 nós não-folha contém no máximo:",
      answers: ["6", "9", "13", "11"],
      correctAnswer: "13",
    },
    {
      id: 3,
      question:
        "No pior caso, o número de comparações necessárias para pesquisar um determinado elemento em uma lista encadeada individualmente de comprimento n é",
      answers: ["n²", "n³", "n", "log n"],
      correctAnswer: "n",
    },
    {
      id: 4,
      question:
        "Qual estrutura de dados é definida pela regra: LIFO (Last In First Out)?",
      answers: ["Pilha", "Fila", "Arvore", "Lista"],
      correctAnswer: "Pilha",
    },
    {
      id: 5,
      question:
        "Qual das alternativas a seguir NÃO é uma operação comum em uma estrutura de dados de fila?",
      answers: ["Enqueue", "Dequeue", "Peek", "Shuffle"],
      correctAnswer: "Shuffle",
    },
  ],
};
