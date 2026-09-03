import Link from "next/link";

import { siX } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SupportCard() {
  return (
    <Card size="sm" className="overflow-hidden shadow-none group-data-[collapsible=icon]:hidden">
      <CardHeader className="min-w-0 px-4">
        <CardTitle className="truncate text-sm">Have something in mind?</CardTitle>
        <CardDescription className="line-clamp-3">
          Suggest a feature or discuss custom work with me on&nbsp;
          <Link
            href="https://instagram.com/rizfirsy"
            target="_blank"
            rel="noreferrer"
            aria-label="Reach out on X"
            className="inline-flex items-center text-foreground"
          >
            <SimpleIcon icon={siX} aria-hidden className="size-3 fill-foreground" />
          </Link>
          &nbsp;or by{" "}
          <Link
            href="https://wa.me/designchirps"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:underline"
          >
            email
          </Link>
          .
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
