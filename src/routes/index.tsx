import { createFileRoute } from "@tanstack/react-router";
import paula1 from "@/assets/paula-1.png.asset.json";
import paula2 from "@/assets/paula-2.png.asset.json";
import paula3 from "@/assets/paula-3.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Paula Arrais | Treinamento para Secretárias de Alta Performance",
      },
      {
        name: "description",
        content:
          "Treinamento para secretárias que transforma o atendimento em autoridade, influência e resultado. Método Paula Arrais para secretárias de alta performance.",
      },
      {
        property: "og:title",
        content: "Paula Arrais | Treinamento para Secretárias",
      },
      {
        property: "og:description",
        content:
          "Forme uma secretária que representa a sua marca com excelência: atendimento, organização e poder de influência.",
      },
    ],
  }),
  component: Index,
});

const CTA_HREF = "#inscricao";

function GoldRule() {
  return <div className="rule-gold my-8 w-full" aria-hidden="true" />;
}

function Cta({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CTA_HREF}
      className={`bg-gold inline-flex items-center justify-center rounded-sm px-9 py-4 text-xs font-semibold tracking-[0.22em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
      style={{ boxShadow: "var(--shadow-gold)" }}
    >
      {children}
    </a>
  );
}

const aprendizados = [
  {
    n: "01",
    t: "O poder de influência da secretária",
    d: "Como a primeira voz e o primeiro olhar da empresa definem a percepção de valor do cliente — e como estruturar isso em processo.",
  },
  {
    n: "02",
    t: "Os recursos certos para treinar sua equipe",
    d: "Scripts, protocolos e rotinas que substituem o improviso por padrão de excelência em cada atendimento.",
  },
  {
    n: "03",
    t: "Como transformar atendimento em resultado",
    d: "Fidelização, reagendamento e encantamento: a secretária como peça estratégica de crescimento do negócio.",
  },
];

const modulos = [
  {
    t: "Postura & Presença",
    d: "Imagem profissional, comunicação verbal e não verbal, etiqueta corporativa e a construção de autoridade discreta.",
  },
  {
    t: "Atendimento de Excelência",
    d: "Roteiros de acolhimento, gestão de expectativas, contorno de objeções e recuperação de clientes insatisfeitos.",
  },
  {
    t: "Organização & Rotina",
    d: "Agenda, prioridades, follow-up e controle de informações sem perder nada no caminho.",
  },
  {
    t: "Comunicação Estratégica",
    d: "WhatsApp, telefone e e-mail com clareza, elegância e persuasão — sem soar robótica.",
  },
  {
    t: "Inteligência Emocional",
    d: "Lidar com pressão, conflitos e demandas simultâneas mantendo equilíbrio e profissionalismo.",
  },
  {
    t: "Secretária Estratégica",
    d: "Como deixar de executar tarefas e passar a sustentar decisões, resultados e a reputação da marca.",
  },
];

const paraQuem = [
  "Secretárias e recepcionistas que querem se tornar insubstituíveis",
  "Assistentes executivas em busca de posicionamento e autoridade",
  "Empresários e gestores que querem uma equipe de frente impecável",
  "Clínicas, escritórios e consultórios que vivem de relacionamento",
];

const depoimentos = [
  {
    q: "Depois do treinamento, minha equipe de recepção parou de apagar incêndio e passou a antecipar problemas. O cliente sente a diferença logo na primeira ligação.",
    a: "Gestora de clínica",
  },
  {
    q: "Aprendi que atendimento não é simpatia, é método. Hoje eu conduzo a agenda e a experiência do cliente com segurança.",
    a: "Secretária executiva",
  },
  {
    q: "O nível de organização e postura da nossa secretária mudou a percepção da nossa marca inteira.",
    a: "Sócio de escritório",
  },
];

const faq = [
  {
    q: "O treinamento é online ou presencial?",
    a: "As turmas acontecem no formato online ao vivo, com material de apoio e gravações liberadas. Também há formato in company para equipes.",
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não. O conteúdo atende desde quem está começando na função até profissionais experientes que querem elevar o padrão.",
  },
  {
    q: "Recebo certificado?",
    a: "Sim, certificado de conclusão emitido ao final do programa.",
  },
  {
    q: "Empresas podem inscrever a equipe inteira?",
    a: "Sim. Existem condições especiais para inscrições em grupo e programas fechados para empresas.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="leading-none">
            <p className="font-display text-xl tracking-[0.28em] text-gold">
              PAULA ARRAIS
            </p>
            <p className="mt-1 text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
              Liderança &amp; Poder de Influência
            </p>
          </div>
          <a
            href={CTA_HREF}
            className="hidden text-[0.7rem] tracking-[0.24em] text-foreground/80 uppercase transition-colors hover:text-primary md:inline"
          >
            Quero me inscrever
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">Treinamento para Secretárias</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              A secretária que sustenta
              <span className="text-gold"> a autoridade </span>
              de uma marca
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              Um treinamento completo para transformar o atendimento em
              excelência, organização e poder de influência — a diferença entre
              uma equipe que atende e uma equipe que encanta.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Cta>Quero me inscrever</Cta>
              <a
                href="#programa"
                className="text-[0.7rem] tracking-[0.24em] text-accent uppercase transition-colors hover:text-primary"
              >
                Ver o programa
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
              <span>Online ao vivo</span>
              <span>Certificado</span>
              <span>Turmas &amp; In company</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-sm opacity-25 blur-3xl"
              style={{ background: "var(--gradient-dourado)" }}
              aria-hidden="true"
            />
            <img
              src={paula1.url}
              alt="Paula Arrais, especialista em treinamento para secretárias"
              className="relative w-full rounded-sm object-cover"
              style={{ boxShadow: "var(--shadow-premium)" }}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Aula / promessa */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">O que você vai aprender</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Três pilares que mudam o padrão do seu atendimento
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {aprendizados.map((i) => (
              <article key={i.n} className="card-premium rounded-sm p-8">
                <span className="font-display text-3xl text-gold">{i.n}</span>
                <h3 className="mt-5 text-lg font-medium text-foreground">
                  {i.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {i.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-5">
          <div className="md:col-span-2">
            <img
              src={paula3.url}
              alt="Paula Arrais em retrato profissional"
              className="w-full rounded-sm object-cover"
              style={{ boxShadow: "var(--shadow-premium)" }}
              loading="lazy"
            />
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Quem conduz</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">
              Paula Arrais
            </h2>
            <GoldRule />
            <p className="text-base leading-relaxed text-muted-foreground">
              Especialista em liderança, atendimento e poder de influência,
              Paula Arrais dedica sua carreira a formar secretárias e equipes de
              frente que representam a marca com excelência. Sua abordagem une
              método, postura e estratégia: uma profissional bem treinada não
              apenas atende — ela protege a reputação, organiza a rotina e
              sustenta o crescimento do negócio.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Vivenciando de perto a realidade de empresas, clínicas e
              escritórios, ela transformou a experiência de campo em um programa
              prático, direto e aplicável já no dia seguinte.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {[
                ["+10", "anos de atuação"],
                ["+1.000", "profissionais treinadas"],
                ["100%", "aplicação prática"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-gold">{n}</p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section id="programa" className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">O programa</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Seis módulos, um novo patamar profissional
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/70 md:grid-cols-3">
            {modulos.map((m) => (
              <article
                key={m.t}
                className="border border-border/40 bg-background p-8 transition-colors duration-300 hover:bg-secondary/25"
              >
                <h3 className="font-display text-2xl text-gold">{m.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {m.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Para quem é</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Feito para quem quer ser referência
            </h2>
            <ul className="mt-10 space-y-5">
              {paraQuem.map((p) => (
                <li key={p} className="flex gap-4">
                  <span
                    className="bg-gold mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="text-base text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={paula2.url}
            alt="Paula Arrais sorrindo durante sessão de fotos"
            className="w-full rounded-sm object-cover"
            style={{ boxShadow: "var(--shadow-premium)" }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Depoimentos */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Resultados</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            O que mudou na prática
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.a} className="card-premium rounded-sm p-8">
                <span className="font-display text-5xl leading-none text-gold">
                  &ldquo;
                </span>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85">
                  {d.q}
                </blockquote>
                <figcaption className="mt-6 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                  {d.a}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="eyebrow text-center">Dúvidas frequentes</p>
        <h2 className="mt-5 text-center font-display text-4xl md:text-5xl">
          Antes de se inscrever
        </h2>
        <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
          {faq.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-foreground">
                {f.q}
                <span className="text-primary transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section
        id="inscricao"
        className="border-t border-border/60"
        style={{ background: "var(--gradient-onyx)" }}
      >
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="eyebrow">Próxima turma</p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Sua carreira merece
            <span className="text-gold"> padrão de excelência</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Garanta sua vaga no treinamento para secretárias e assuma o lugar de
            profissional estratégica dentro da empresa.
          </p>
          <div className="mt-10">
            <Cta>Quero garantir minha vaga</Cta>
          </div>
          <p className="mt-6 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
            Vagas limitadas por turma
          </p>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
          <p className="font-display text-base tracking-[0.28em] text-gold">
            PAULA ARRAIS
          </p>
          <p className="text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase">
            Autoridade · Influência · Estratégia · Excelência · Transformação
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Paula Arrais. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
