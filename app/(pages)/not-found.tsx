export default function NotFound() {
  return (
    <>
      <main className="container mx-auto px-4 flex min-h-screen flex-col items-center pt-16">
        <h1 className="text-5xl text-center font-sans font-light">404</h1>
        <div className="bg-red-500 w-full h-4 my-4"></div>
        <p className="font-serif text-2-xl">Page not found</p>
      </main>
    </>
  );
}
