export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="w-full max-w-xl text-center space-y-5">
        <h1 className="text-4xl font-extrabold mb-2">Kando</h1>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          ¡Gestiona tus tareas con actitud y motivación!
        </h2>
        <p className="text-gray-700">
          Sistema de gestión de tareas para equipos de desarrollo. Crea,
          visualiza, actualiza y analiza tus tareas de forma simple y eficiente.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          ¿Por qué «Kando»?
        </h2>
        <p className="text-gray-700">
          En japonés, significa «emoción» o «inspiración». Además, «Kando» suena
          como «can do» en inglés («puedo hacerlo»).
        </p>
      </div>
    </div>
  );
}
