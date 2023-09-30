
'use client'

import { FormEventHandler, useState } from "react"
import { useRouter } from 'next/navigation'
import { useGlobalContext } from "@/context/main";
import Link from "next/link";



export default function Home() {

  // const [newName, setNewName] = useState("");
  // const [newEmail, setNewEmail] = useState("");

  const {newName, setNewName, newEmail ,setNewEmail} = useGlobalContext()

  const router = useRouter();

  const handleSubmitIniciar:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { url } = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({ email: newEmail, name: newName }),
    });
    router.push("/quiz");
  }

  return (
    <main className="flex flex-col items-center gap-3">
      <p className="text-lg px-5 text-center">Teste seus conhecimentos sobre Ciências da Computação!</p>

      <div>
        <form onSubmit={handleSubmitIniciar} className="flex flex-col items-center gap-2">
          <div >
            <label htmlFor="newName">Nome: </label>
            <input 
              className="text-black p-2"
              type="text" 
              name="newName" 
              id="newName" 
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Nome"/>
          </div>
          <div>
            <label htmlFor="newName">Email: </label>
            <input 
              className="text-black p-2"
              type="email" 
              name="newEmail" 
              id="newEmail" 
              required
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Email"/>
          </div>
            <button type="submit" className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
              Começar o Quiz
            </button>
            <Link href="/newQuestion">
              <button type="submit" className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full my-5">
                Cadastrar Questão
              </button>
            </Link>
        </form>
      </div>
        
    </main>
  )
}