export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <div>
        <h2>Exemplo FORM com plugin de TAILWIND</h2>
        <form className="space-y-6 max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full htmlForm-input rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Digite seu nome" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full htmlForm-input rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Digite seu email" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full htmlForm-input rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Digite sua senha" />
          </div>

          <div>
            <label htmlFor="remember" className="flex items-center">
              <input type="checkbox" id="remember" name="remember" className="htmlForm-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-700">Lembrar de mim</span>
            </label>
          </div>

          <div>
            <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Enviar
            </button>
          </div>
        </form>

      </div>

    </div>
  )
}