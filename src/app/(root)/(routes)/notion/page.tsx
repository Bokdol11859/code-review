import Link from 'next/link';
export default function allPage() {
  const allNotionPage = [
    {
      name: '주하님',
      id: '68507fb471144ed6b86a92c8a51284b7',
    },
    {
      name: '효리님',
      id: '9c13c482e5da4cf984d929f4234c3b59',
    },
    {
      name: '효중님',
      id: 'f6a44883acb343feb2f3c32d602609b2',
    },
  ] as const;
  return (
    <main>
      <h1>동근동근팀</h1>
      {allNotionPage.map((page) => (
        <Link href={`/notion/${page.id}`} key={page.id}>
          {page.name}
        </Link>
      ))}
    </main>
  );
}
