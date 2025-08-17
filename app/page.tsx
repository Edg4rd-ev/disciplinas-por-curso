// app/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold text-center">
        Welcome to My Next.js App
      </h1>

      <div className="flex gap-4">
        <Link href="/disciplinas">
          <Button size="lg">Ver Disciplinas</Button>
        </Link>
      </div>
    </div>
  );
}
