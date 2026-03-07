import type { Metadata } from "next";
import { CalculatorClient } from "./calculator-client";

export const metadata: Metadata = {
  title: "Calculateur travaux en Île-de-France | Serenys Rénovation",
  description:
    "Calculez une estimation de budget travaux pour votre rénovation d'appartement ou de maison, puis recevez un accompagnement personnalisé.",
};

export default function CalculateurTravauxPage() {
  return <CalculatorClient />;
}
