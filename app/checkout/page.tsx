import type { Metadata } from "next";
import CheckoutPage from "@/components/checkout";

export const metadata: Metadata = {
  title: "Checkout | MODERNO",
  description: "Checkout Moderno",
};

export default function ContactPage() {
  return <CheckoutPage />;
}
