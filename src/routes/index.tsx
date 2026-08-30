import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Clock, Sparkles, Rocket } from "lucide-react";

import coachCover from "@/assets/coach-21-dias.png.asset.json";
import phase2Cover from "@/assets/fase-2-avancado.png.asset.json";
import { cn } from "@/lib/utils";

/** Links de checkout (Sunize) dos upsells. */
const PHASE2_CHECKOUT_URL = "https://pay.sunize.com.br/qxzSbpDv";
const COACH_CHECKOUT_URL = "https://pay.sunize.com.br/DDQGzwvU";

const PAGE_TITLE = "Compra Confirmada — Desafio 21 Dias";
const PAGE_DESCRIPTION =
  "Seu acesso ao Desafio 21 Dias foi enviado por e-mail. Veja os próximos passos e conheça o Coach 21 Dias, seu suporte por IA 24h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const [showPhase2, setShowPhase2] = useState(true);
  const [showCoach, setShowCoach] = useState(true);


  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:py-16">
        {/* 1) Confirmação de compra */}
        <section className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/15 ring-4 ring-success/20">
            <CheckCircle2 className="h-11 w-11 text-success" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Compra Confirmada! 🎉
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Seu acesso ao Desafio 21 Dias já foi enviado para o seu e-mail. Verifique sua
            caixa de entrada (e a pasta de spam, caso não encontre em alguns minutos).
          </p>
        </section>

        {/* 3) Upsell 1 — Fase 2 */}
        {showPhase2 ? (

          <section
            aria-labelledby="upsell-fase2"
            className={cn(
              "mt-14 animate-in fade-in duration-500 overflow-hidden rounded-2xl border-2 border-cyan/50",
              "bg-gradient-to-b from-cyan/15 to-card p-6 sm:p-8",
            )}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
              <img
                src={phase2Cover.url}
                alt="Pôster do programa Fase 2 Avançado"
                width={1024}
                height={1536}
                loading="lazy"
                className="mx-auto w-full max-w-[240px] rounded-xl object-contain md:mx-0 md:w-2/5 md:max-w-none md:shrink-0"
              />

              <div className="md:flex-1">
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Oferta exclusiva
                </p>

                <h2 id="upsell-fase2" className="mt-4 text-2xl font-extrabold sm:text-3xl">
                  Espera! Antes de você começar...
                </h2>
                <p className="mt-2 text-base font-semibold text-cyan">
                  Já pensou no que fazer depois de terminar?
                </p>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  A <strong className="text-foreground">Fase 2</strong> pega exatamente de onde
                  você vai parar: treino mais desafiador, novos exercícios e cardápio
                  totalmente renovado, pra você não perder o progresso que vai construir. Mesma
                  estrutura que já vai funcionar pra você, sem começar do zero.
                </p>

                <div className="mt-6 flex flex-wrap items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-cyan">R$17,90</span>
                  <span className="text-sm text-muted-foreground">pagamento único</span>
                </div>

                <a
                  href={PHASE2_CHECKOUT_URL}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Rocket className="h-5 w-5" aria-hidden="true" />
                  Quero Desbloquear a Fase 2
                </a>

                <button
                  type="button"
                  onClick={() => setShowPhase2(false)}
                  className="mt-3 w-full rounded-xl px-6 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Agora não, obrigado
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {/* 4) Upsell 2 — Coach 21 Dias */}
        {showCoach ? (
          <section
            aria-labelledby="upsell-coach"
            className={cn(
              "mt-14 animate-in fade-in duration-500 overflow-hidden rounded-2xl border-2 border-premium/50",
              "bg-gradient-to-b from-premium/15 to-card p-6 sm:p-8",
            )}
          >
            <div className="flex flex-col gap-6 md:flex-row-reverse md:items-center md:gap-8">
              <img
                src={coachCover.url}
                alt="Pôster do Suporte Individual Exclusivo 24h do Desafio 21 Dias"
                width={1024}
                height={1536}
                loading="lazy"
                className="mx-auto w-full max-w-[240px] rounded-xl object-contain md:mx-0 md:w-2/5 md:max-w-none md:shrink-0"
              />

              <div className="md:flex-1">
                <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Oferta exclusiva
                </p>

                <h2 id="upsell-coach" className="mt-4 text-2xl font-extrabold sm:text-3xl">
                  Mais uma coisa antes de você ir...
                </h2>
                <p className="mt-2 text-base font-semibold text-accent">
                  Que tal ter suporte 24h enquanto faz o desafio?
                </p>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Tire qualquer dúvida sobre seu treino ou dieta, a qualquer hora do dia, com o{" "}
                  <strong className="text-foreground">Coach 21 Dias</strong> — um assistente
                  por IA treinado especificamente no método do seu desafio. Sem esperar
                  resposta, sem depender de horário comercial.
                </p>

                <div className="mt-6 flex flex-wrap items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-gold">R$11,90</span>
                  <span className="text-sm text-muted-foreground">pagamento único</span>
                </div>

                <a
                  href={COACH_CHECKOUT_URL}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Clock className="h-5 w-5" aria-hidden="true" />
                  Quero Meu Suporte 24h
                </a>

                <button
                  type="button"
                  onClick={() => setShowCoach(false)}
                  className="mt-3 w-full rounded-xl px-6 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Não, obrigado
                </button>
              </div>
            </div>
          </section>
        ) : null}

        <footer className="mt-14 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          Não recebeu o e-mail em alguns minutos? Verifique o spam ou fale com nosso suporte.
        </footer>
      </div>
    </main>
  );
}
