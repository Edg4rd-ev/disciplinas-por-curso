// app/disciplinas/loading.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-center text-4xl font-extrabold tracking-tight">
        Disciplinas por Curso
      </h1>
      <div className="mb-6 flex justify-center">
        <Skeleton className="h-4 w-64" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="rounded-xl">
            <CardContent className="p-5 space-y-5">
              <Skeleton className="h-5 w-[70%]" />
              <div className="flex items-baseline gap-2">
                <Skeleton className="h-8 w-10" />
                <Skeleton className="h-4 w-24" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
