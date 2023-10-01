-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userEmail" TEXT NOT NULL,
    "finishedGames" BOOLEAN NOT NULL DEFAULT false,
    "totalQuestions" INTEGER NOT NULL,
    "correctAnswers" INTEGER,
    "questions" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAnswers" TEXT NOT NULL DEFAULT '[]',
    CONSTRAINT "Game_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "options" TEXT NOT NULL,
    "correctOption" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
