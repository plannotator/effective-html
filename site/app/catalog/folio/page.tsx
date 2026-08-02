import { redirect } from "next/navigation";

export default function CatalogFolioPage() {
  redirect("/catalog?view=compact#catalog-collection");
}
