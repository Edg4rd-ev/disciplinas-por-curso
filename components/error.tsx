"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => console.error(error), [error]);

  return (
    <div className="mx-auto max-w-xl p-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Falha ao carregar os dados</h2>
          <p className="text-sm text-muted-foreground">
            {error.message || "Tente novamente mais tarde."}
          </p>
          <Button onClick={reset}>Tentar novamente</Button>
        </CardContent>
      </Card>
    </div>
  );
}
