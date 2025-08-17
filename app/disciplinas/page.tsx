// app/disciplinas/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

type CursoStat = {
  curso: string;
  quantidade_disciplinas: string;
};

export const revalidate = 60 * 60;

async function getData(): Promise<CursoStat[]> {
  const url =
    "https://restalex.netlify.app/.netlify/functions/api/disciplinas_por_curso";
  const { data } = await axios.get<CursoStat[]>(url, { timeout: 10000 });
  if (!Array.isArray(data)) throw new Error("Resposta inesperada da API");
  return data;
}

function pluralize(n: number) {
  return n === 1 ? "disciplina" : "disciplinas";
}

export default async function DisciplinasPage() {
  const data = await getData();

  const sorted = [...data].sort(
    (a, b) =>
      Number(b.quantidade_disciplinas) - Number(a.quantidade_disciplinas)
  );

  const total = sorted.reduce(
    (acc, cur) => acc + Number(cur.quantidade_disciplinas || 0),
    0
  );

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-center text-4xl font-extrabold tracking-tight">
        Disciplinas por Curso
      </h1>

      <p className="mb-6 text-center text-sm text-muted-foreground">
        {sorted.length} cursos • {total} {pluralize(total)}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((item) => {
          const n = Number(item.quantidade_disciplinas || 0);
          return (
            <Card
              key={item.curso}
              className="rounded-xl shadow-sm transition hover:shadow-md"
            >
              <CardContent className="p-5">
                <h3 className="mb-6 line-clamp-3 text-lg font-semibold">
                  {item.curso}
                </h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold">{n}</span>
                  <span className="text-sm text-muted-foreground">
                    {pluralize(n)}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
