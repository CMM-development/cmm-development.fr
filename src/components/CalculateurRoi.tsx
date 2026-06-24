"use client";

import { useMemo, useState } from "react";

type Frequency = "week" | "month";

interface Inputs {
  taskName: string;
  timeValue: number;
  frequency: Frequency;
  weeksPerYear: number;
  people: number;
  hourlyCost: number;
  automationRate: number; // 0–100 (%)
  setupCost: number;
  monthlyCost: number;
}

interface Preset {
  label: string;
  emoji: string;
  values: Partial<Inputs>;
}

// Pré-réglages calés sur les angles types d'automatisation PME (valeurs indicatives, à ajuster).
const PRESETS: Preset[] = [
  {
    label: "Extraction de documents",
    emoji: "📄",
    values: { taskName: "Ressaisie des factures / documents entrants", timeValue: 8, frequency: "week", people: 1, hourlyCost: 35, automationRate: 80, setupCost: 6000, monthlyCost: 150 },
  },
  {
    label: "Relances impayés",
    emoji: "💸",
    values: { taskName: "Suivi et relance des factures impayées", timeValue: 5, frequency: "week", people: 1, hourlyCost: 40, automationRate: 75, setupCost: 7000, monthlyCost: 200 },
  },
  {
    label: "Devis / configurateur",
    emoji: "🧮",
    values: { taskName: "Établissement des devis", timeValue: 10, frequency: "week", people: 2, hourlyCost: 45, automationRate: 70, setupCost: 12000, monthlyCost: 250 },
  },
];

const DEFAULTS: Inputs = {
  taskName: "Tâche répétitive à automatiser",
  timeValue: 8,
  frequency: "week",
  weeksPerYear: 47,
  people: 1,
  hourlyCost: 35,
  automationRate: 80,
  setupCost: 6000,
  monthlyCost: 150,
};

const eur = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(
    Number.isFinite(n) ? n : 0,
  );

const hrs = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Number.isFinite(n) ? n : 0);

const INPUT_CLASS =
  "w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-text-default)] outline-none focus:border-[var(--color-cyan-dark)] focus:ring-1 focus:ring-[var(--color-cyan-dark)]";

export default function CalculateurRoi() {
  const [inp, setInp] = useState<Inputs>(DEFAULTS);

  const set = <K extends keyof Inputs>(key: K, value: Inputs[K]) =>
    setInp((prev) => ({ ...prev, [key]: value }));

  const applyPreset = (p: Preset) => setInp((prev) => ({ ...prev, ...p.values }));

  const r = useMemo(() => {
    const baseHoursPerYear =
      inp.frequency === "week" ? inp.timeValue * inp.weeksPerYear : inp.timeValue * 12;
    const totalHoursPerYear = baseHoursPerYear * inp.people;
    const currentAnnualCost = totalHoursPerYear * inp.hourlyCost;

    const rate = Math.min(Math.max(inp.automationRate, 0), 100) / 100;
    const hoursSavedPerYear = totalHoursPerYear * rate;
    const grossAnnualSaving = hoursSavedPerYear * inp.hourlyCost;

    const year1Cost = inp.setupCost + inp.monthlyCost * 12;
    const year1Net = grossAnnualSaving - year1Cost;
    const recurringAnnualNet = grossAnnualSaving - inp.monthlyCost * 12;

    const monthlyNetGain = grossAnnualSaving / 12 - inp.monthlyCost;
    const paybackMonths = monthlyNetGain > 0 ? inp.setupCost / monthlyNetGain : Infinity;
    const roiYear1 = year1Cost > 0 ? (year1Net / year1Cost) * 100 : 0;
    const profitable = monthlyNetGain > 0 && year1Net > 0;

    return {
      totalHoursPerYear,
      currentAnnualCost,
      hoursSavedPerYear,
      grossAnnualSaving,
      year1Cost,
      year1Net,
      recurringAnnualNet,
      paybackMonths,
      roiYear1,
      profitable,
    };
  }, [inp]);

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* Entrées */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-5 lg:col-span-2">
        <div className="mb-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-meta)]">
            Partir d&apos;un exemple
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => applyPreset(p)}
                className="rounded-lg border border-[var(--color-cyan-dark)]/30 bg-white px-3 py-2 text-xs font-medium text-[var(--color-text-muted)] transition hover:border-[var(--color-cyan-dark)] hover:text-[var(--color-cyan-dark)]"
              >
                <span className="mr-1">{p.emoji}</span>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-cyan-dark)]">
          Votre situation
        </h2>

        <Field label="Tâche concernée">
          <input type="text" value={inp.taskName} onChange={(e) => set("taskName", e.target.value)} className={INPUT_CLASS} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Temps passé">
            <input type="number" min={0} value={inp.timeValue} onChange={(e) => set("timeValue", Number(e.target.value))} className={INPUT_CLASS} />
          </Field>
          <Field label="Fréquence">
            <select value={inp.frequency} onChange={(e) => set("frequency", e.target.value as Frequency)} className={INPUT_CLASS}>
              <option value="week">heures / semaine</option>
              <option value="month">heures / mois</option>
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Personnes concernées">
            <input type="number" min={1} value={inp.people} onChange={(e) => set("people", Number(e.target.value))} className={INPUT_CLASS} />
          </Field>
          <Field label="Coût horaire chargé (€)">
            <input type="number" min={0} value={inp.hourlyCost} onChange={(e) => set("hourlyCost", Number(e.target.value))} className={INPUT_CLASS} />
          </Field>
        </div>

        {inp.frequency === "week" && (
          <Field label="Semaines travaillées / an">
            <input type="number" min={1} max={52} value={inp.weeksPerYear} onChange={(e) => set("weeksPerYear", Number(e.target.value))} className={INPUT_CLASS} />
          </Field>
        )}

        <Field label={`Part du temps réellement automatisable : ${inp.automationRate}%`}>
          <input type="range" min={0} max={100} step={5} value={inp.automationRate} onChange={(e) => set("automationRate", Number(e.target.value))} className="w-full accent-[var(--color-cyan-dark)]" />
        </Field>

        <h2 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-cyan-dark)]">
          La solution CMM
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Forfait de mise en place (€)">
            <input type="number" min={0} value={inp.setupCost} onChange={(e) => set("setupCost", Number(e.target.value))} className={INPUT_CLASS} />
          </Field>
          <Field label="Abonnement (€/mois)">
            <input type="number" min={0} value={inp.monthlyCost} onChange={(e) => set("monthlyCost", Number(e.target.value))} className={INPUT_CLASS} />
          </Field>
        </div>
      </section>

      {/* Résultats */}
      <section className="lg:col-span-3">
        <div className="mb-4 rounded-2xl border border-[var(--color-cyan-dark)]/30 bg-[var(--color-cyan-soft)] p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-cyan-dark)]">
            Rentabilisé en
          </div>
          <div className="mt-1 text-4xl font-extrabold text-[var(--color-bg-dark)]">
            {r.profitable && Number.isFinite(r.paybackMonths)
              ? `${r.paybackMonths.toFixed(1).replace(".", ",")} mois`
              : "—"}
          </div>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            {r.profitable
              ? "Au-delà, l'automatisation génère un gain net récurrent."
              : "À ces paramètres, le gain ne couvre pas le coût. Ajustez le temps passé, le périmètre ou le prix."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Result label="Coût annuel actuel de la tâche" value={eur(r.currentAnnualCost)} hint={`${hrs(r.totalHoursPerYear)} h/an passées`} />
          <Result label="Temps récupéré / an" value={`${hrs(r.hoursSavedPerYear)} h`} hint={`soit ~${hrs(r.hoursSavedPerYear / 12)} h/mois`} />
          <Result label="Économie brute / an" value={eur(r.grossAnnualSaving)} accent />
          <Result label="Coût solution année 1" value={eur(r.year1Cost)} hint="forfait + 12 mois d'abo" />
          <Result label="Économie nette année 1" value={eur(r.year1Net)} accent={r.year1Net > 0} danger={r.year1Net <= 0} />
          <Result label="Gain net récurrent / an" value={eur(r.recurringAnnualNet)} hint="années suivantes (abo seul)" accent={r.recurringAnnualNet > 0} />
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white px-5 py-4">
          <span className="text-sm text-[var(--color-text-muted)]">ROI sur l&apos;année 1</span>
          <span className={`text-2xl font-bold ${r.roiYear1 >= 0 ? "text-[var(--color-cyan-dark)]" : "text-amber-600"}`}>
            {r.roiYear1 >= 0 ? "+" : ""}
            {new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(r.roiYear1)}%
          </span>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-[var(--color-text-meta)]">
          Calcul réalisé entièrement dans votre navigateur — aucune donnée n&apos;est envoyée ni stockée.
          Estimation indicative à affiner ensemble selon votre contexte réel.
        </p>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mb-3 block">
      <span className="mb-1 block text-xs font-medium text-[var(--color-text-meta)]">{label}</span>
      {children}
    </label>
  );
}

function Result({
  label,
  value,
  hint,
  accent,
  danger,
}: {
  label: string;
  value: string;
  hint?: string;
  accent?: boolean;
  danger?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
      <div className="text-xs text-[var(--color-text-meta)]">{label}</div>
      <div
        className={`mt-1 text-xl font-bold ${
          danger ? "text-amber-600" : accent ? "text-[var(--color-cyan-dark)]" : "text-[var(--color-bg-dark)]"
        }`}
      >
        {value}
      </div>
      {hint && <div className="mt-0.5 text-xs text-[var(--color-text-meta)]">{hint}</div>}
    </div>
  );
}
