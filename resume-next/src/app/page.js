import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the English version by default
  redirect("/en");
}
