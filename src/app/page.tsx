import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Olá Next</h1>
    <Link href={'/products'}>Ir para pagina de produtos</Link>
    </>
  );
}
