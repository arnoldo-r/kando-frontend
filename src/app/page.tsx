export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-[70vh] px-4 py-8 gap-4">
      <img src="/kando.png" alt="Kando logo" className="w-24 h-24" />
      <div className="w-full max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold mb-2">Kando</h1>
        <h2 className="text-lg font-semibold italic mb-2">
          ¡Gestiona tus tareas con actitud y motivación!
        </h2>
        <p className="mb-12">
          Sistema de gestión de tareas para equipos de desarrollo. Crea,
          visualiza, actualiza y analiza tus tareas de forma simple y eficiente.
        </p>
        <h2 className="text-xl font-semibold mt-12 mb-2">¿Por qué «Kando»?</h2>
        <p className="">
          En japonés, significa «emoción» o «inspiración». Además, «Kando» suena
          como «can do» en inglés («puedo hacerlo»).
        </p>
      </div>
    </div>
  );
}
