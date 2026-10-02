import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import paula1 from "@/assets/paula-1.png.asset.json";
import paula2 from "@/assets/paula-2.png.asset.json";
import paula3 from "@/assets/paula-3.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paula Arrais | Desenvolvimento de Pessoas para Clínicas" },
      {
        name: "description",
        content:
          "Desenvolvimento de recepção, equipes e lideranças para clínicas que querem transformar comunicação, comportamento e experiência do paciente.",
      },
      {
        property: "og:title",
        content: "Paula Arrais | Desenvolvimento de Pessoas para Clínicas",
      },
      {
        property: "og:description",
        content:
          "Pessoas que se desenvolvem. Equipes que se transformam. Clínicas que evoluem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5531973656088";

const challenges = [
  "Precisa cobrar e acompanhar tudo o tempo inteiro.",
  "Pequenos problemas chegam até você o dia inteiro.",
  "As pessoas fazem o que foi pedido, mas não se antecipam.",
  "Cada profissional trabalha de um jeito.",
  "Falta comunicação entre os setores.",
  "A equipe é boa, mas ainda falta protagonismo.",
];

const roles = [
  {
    name: "Recepção",
    from: "De quem apenas recebe",
    to: "para quem acolhe, orienta e representa a clínica.",
  },
  {
    name: "Equipe",
    from: "De quem apenas cumpre tarefas",
    to: "para quem colabora, assume e participa.",
  },
  {
    name: "Liderança",
    from: "De quem resolve tudo",
    to: "para quem conduz, desenvolve, delega e confia.",
  },
  {
    name: "Experiência do paciente",
    from: "De uma obrigação da rotina",
    to: "para uma experiência que o paciente sente e lembra.",
  },
];

const services = [
  {
    number: "01",
    title: "Secretária Extraordinária",
    label: "Recepção e secretárias",
    description:
      "Transforma a profissional da recepção em alguém mais segura, protagonista e preparada para representar a clínica em cada contato.",
    topics: ["Comunicação", "Postura profissional", "Inteligência emocional", "Organização", "Proatividade", "Experiência do paciente"],
    cta: "Desenvolver minha recepção",
  },
  {
    number: "02",
    title: "Equipes que funcionam como time",
    label: "Treinamento de equipes",
    description:
      "Para clínicas que querem uma equipe mais integrada, responsável e preparada para crescer junto.",
    topics: ["Comunicação", "Trabalho em equipe", "Responsabilidade", "Cultura", "Protagonismo", "Experiência do paciente"],
    cta: "Desenvolver minha equipe",
  },
  {
    number: "03",
    title: "Liderar é desenvolver pessoas",
    label: "Gestores e líderes",
    description:
      "Para quem precisa deixar de apenas resolver problemas e começar a conduzir pessoas com clareza.",
    topics: ["Comunicação assertiva", "Delegação", "Conversas difíceis", "Inteligência emocional", "Gestão de pessoas", "Liderança"],
    cta: "Desenvolver minha liderança",
  },
  {
    number: "04",
    title: "Experiências que geram atitude",
    label: "Palestras",
    description:
      "Conteúdos práticos e envolventes para despertar pessoas e movimentar equipes — muito além do aplauso.",
    topics: ["Secretária Extraordinária", "Atendimento que encanta", "Inteligência emocional", "Protagonismo", "Liderança", "Equipes extraordinárias"],
    cta: "Levar essa experiência",
  },
];

const method = [
  ["01", "Diagnosticar", "Entender a realidade e os desafios da clínica."],
  ["02", "Despertar", "Criar consciência sobre comportamentos e impactos."],
  ["03", "Desenvolver", "Fortalecer competências e ferramentas."],
  ["04", "Aplicar", "Levar o aprendizado para a rotina."],
  ["05", "Evoluir", "Acompanhar, ajustar e sustentar a mudança."],
];

const testimonials = [
  {
    name: "Caroline Magalhães",
    role: "Avaliação recebida",
    stars: 5,
    initial: "C",
    quote:
      "A Paula é uma profissional ímpar. Alguém que nasceu para liderar e encantar. Aprendo diariamente com ela. Indico de olhos fechados. Sua experiência e profissionalismo nos inspira! Conselho… só façam!",
  },
  {
    name: "Letícia Barros",
    role: "Avaliação recebida",
    stars: 5,
    initial: "L",
    quote:
      "Conheci a Paula no meu primeiro emprego, e ela foi a pessoa que mais me motivou. Sempre muito atenta aos detalhes.",
  },
  {
    name: "Lucas Xavier",
    role: "Recomendação",
    stars: 0,
    initial: "L",
    quote:
      "Profissional sem igual, super dedicada, aplicada, esclarece todas as dúvidas que temos. Com certeza uma profissional fora da curva. 👏👏👏",
  },
];

const faqs = [
  ["O trabalho é presencial ou on-line?", "Presencial, on-line ou híbrido, de acordo com a necessidade da clínica."],
  ["O conteúdo é personalizado?", "Sim. O trabalho começa entendendo a realidade e os objetivos da clínica."],
  ["Posso contratar apenas uma palestra?", "Sim. A experiência pode ser contratada de forma independente."],
  ["Pode ser direcionado para apenas uma equipe?", "Sim. Recepção, liderança, setores específicos ou toda a clínica."],
  ["Como começa?", "Com uma conversa para entender o momento e o caminho possível para a sua clínica."],
];

function whatsappLink(message: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function ActionLink({ children, message, secondary = false, className = "" }: { children: ReactNode; message: string; secondary?: boolean; className?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`${secondary ? "action-secondary" : "action-primary"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function SectionTitle({ eyebrow, children, centered = false }: { eyebrow: string; children: ReactNode; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-6xl">{children}</h2>
    </div>
  );
}

function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Olá, Paula! Quero conversar sobre desenvolvimento para minha clínica.",
      `Nome: ${data.get("nome") ?? ""}`,
      `Clínica: ${data.get("clinica") ?? ""}`,
      `WhatsApp: ${data.get("whatsapp") ?? ""}`,
      `E-mail: ${data.get("email") ?? ""}`,
      `Cidade/Estado: ${data.get("cidade") ?? ""}`,
      `Interesse: ${data.get("interesse") ?? ""}`,
      `Principal desafio: ${data.get("desafio") ?? ""}`,
    ].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="contact-form">
      <div className="grid gap-5 md:grid-cols-2">
        <label>Nome<input name="nome" required autoComplete="name" /></label>
        <label>Clínica<input name="clinica" required autoComplete="organization" /></label>
        <label>WhatsApp<input name="whatsapp" required type="tel" autoComplete="tel" /></label>
        <label>E-mail<input name="email" required type="email" autoComplete="email" /></label>
        <label className="md:col-span-2">Cidade / Estado<input name="cidade" required autoComplete="address-level2" /></label>
        <label className="md:col-span-2">O que você gostaria de desenvolver?
          <select name="interesse" required defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            <option>Recepção</option><option>Equipe</option><option>Liderança</option><option>Palestra</option><option>Ainda não tenho certeza</option>
          </select>
        </label>
        <label className="md:col-span-2">Qual é o principal desafio da sua clínica hoje?
          <textarea name="desafio" required rows={4} />
        </label>
      </div>
      <button type="submit" className="action-primary mt-7 w-full">
        Iniciar uma conversa <MessageCircle className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="border-b border-border/70 bg-background/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#inicio" className="font-display text-2xl font-medium text-foreground">Paula <span className="text-primary">Arrais</span></a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex" aria-label="Navegação principal">
            <a href="#solucoes" className="transition-colors hover:text-primary">Soluções</a>
            <a href="#metodo" className="transition-colors hover:text-primary">Método</a>
            <a href="#sobre" className="transition-colors hover:text-primary">Sobre</a>
            <a href="#depoimentos" className="transition-colors hover:text-primary">Depoimentos</a>
            <a href="#contato" className="transition-colors hover:text-primary">Contato</a>
          </nav>
          <a href="#contato" className="action-quiet">Vamos conversar <ArrowRight className="h-4 w-4" /></a>
        </div>
      </header>

      <section id="inicio" className="relative border-b border-border/70">
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow">Desenvolvimento de pessoas para clínicas</p>
            <h1 className="mt-7 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Sua clínica pode ter excelentes profissionais.
              <span className="mt-3 block text-primary">Mas são as pessoas que transformam uma equipe.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Desenvolvo pessoas, equipes e líderes para que o potencial apareça na prática, na comunicação, no comportamento, na liderança e na experiência do paciente.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionLink message="Olá, Paula! Quero desenvolver minha equipe.">Desenvolver minha equipe</ActionLink>
              <ActionLink secondary message="Olá, Paula! Quero conversar sobre meu desenvolvimento profissional.">Quero me desenvolver</ActionLink>
            </div>
            <p className="mt-6 font-display text-lg italic text-accent">O próximo passo começa com uma conversa.</p>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="portrait-frame">
              <img src={paula1.url} alt="Paula Arrais, especialista em desenvolvimento de pessoas para clínicas" className="h-full w-full object-cover" loading="eager" />
            </div>
            <div className="portrait-note"><Sparkles className="h-5 w-5 text-primary" /><span>Pessoas que evoluem.<br />Clínicas que se transformam.</span></div>
          </div>
        </div>
      </section>

      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <SectionTitle eyebrow="Potencial na rotina">Sua clínica tem potencial. Mas ele está aparecendo?</SectionTitle>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>Uma clínica pode ter estrutura, tecnologia e excelentes profissionais. Mas é pelas <strong className="text-foreground">pessoas</strong> que o paciente percebe tudo isso.</p>
              <p>Ele sente quando existe cuidado, segurança e presença. E também percebe quando falta comunicação, iniciativa, organização ou conexão.</p>
              <p className="border-l-2 border-primary pl-6 font-display text-2xl text-foreground">É pelas pessoas que a experiência da sua clínica ganha vida.</p>
            </div>
          </div>
          <div className="mt-20 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, index) => (
              <div key={item} className="flex min-h-36 gap-4 bg-background p-7">
                <span className="font-display text-2xl text-primary">0{index + 1}</span>
                <p className="leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-display text-3xl italic text-foreground md:text-4xl">“Eu sei que essa equipe pode ser muito mais.”</p>
            <p className="mt-5 text-lg text-muted-foreground">E pode. Mas potencial sozinho não transforma uma clínica. <strong className="text-foreground">É preciso desenvolver pessoas.</strong></p>
            <ActionLink className="mt-8" message="Olá, Paula! Quero transformar minha equipe.">Transformar minha equipe</ActionLink>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="A mudança aparece na prática" centered>Quando as pessoas mudam, a clínica inteira se movimenta.</SectionTitle>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Mais segurança", "Mais colaboração", "Mais clareza para quem lidera", "Mais cuidado em cada experiência"].map((item) => (
              <div key={item} className="result-item"><Check className="h-5 w-5 text-primary" /><span>{item}</span></div>
            ))}
          </div>
          <div className="mx-auto mt-20 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">Meu trabalho transforma conhecimento em comportamento. Porque treinamento de verdade precisa aparecer <strong className="text-foreground">na segunda-feira</strong>: na próxima conversa, no próximo atendimento, na próxima decisão.</p>
            <p className="mt-8 font-display text-3xl text-foreground">Treinamento é o meio. <span className="text-primary">Desenvolvimento é o que buscamos.</span></p>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-24 text-background md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Ocupando o próprio papel</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">Não é sobre ocupar um cargo.<br /><span className="text-primary">É sobre ocupar o seu papel.</span></h2>
          </div>
          <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {roles.map((role) => (
              <article key={role.name} className="border-t border-background/20 pt-6">
                <p className="text-sm font-medium text-primary">{role.name}</p>
                <p className="mt-4 font-display text-2xl leading-snug text-background/70">{role.from} <strong className="font-medium text-background">{role.to}</strong></p>
              </article>
            ))}
          </div>
          <p className="mt-16 text-center font-display text-3xl">Não é sobre fazer mais. <span className="text-primary">É sobre fazer melhor.</span></p>
        </div>
      </section>

      <section id="solucoes" className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="O que eu desenvolvo">Um caminho para cada desafio da sua clínica.</SectionTitle>
          <div className="mt-16 divide-y divide-border border-y border-border">
            {services.map((service) => (
              <article key={service.number} className="grid gap-7 py-10 md:grid-cols-[80px_1fr_1.2fr] md:py-14">
                <span className="font-display text-4xl text-primary">{service.number}</span>
                <div><p className="text-sm font-medium text-accent">{service.label}</p><h3 className="mt-3 font-display text-3xl text-foreground">{service.title}</h3></div>
                <div>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{service.topics.map((topic) => <span key={topic} className="topic-tag">{topic}</span>)}</div>
                  <a href={whatsappLink(`Olá, Paula! Quero saber mais sobre ${service.label.toLowerCase()}.`)} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary">{service.cta}<ArrowRight className="h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="relative border-y-2 border-primary/40 bg-card py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,var(--dourado-escuro),transparent)]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div className="lg:sticky lg:top-10 lg:self-start">
              <SectionTitle eyebrow="Meu método">Despertar. Desenvolver. Transformar.</SectionTitle>
              <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">Não existe receita pronta para pessoas. Eu começo entendendo cada cultura, equipe e desafio.</p>
              <ActionLink className="mt-9" message="Olá, Paula! Quero conhecer seu método de desenvolvimento.">Conhecer o método</ActionLink>
            </div>
            <div className="space-y-5">
              {method.map(([n, title, description]) => (
                <div key={n} className="method-step">
                  <span>{n}</span>
                  <div><h3 className="text-xl font-medium text-foreground md:text-2xl">{title}</h3><p className="mt-2 text-muted-foreground">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="method-band mt-20 text-center">
            <p className="mx-auto max-w-4xl font-display text-3xl leading-snug text-foreground md:text-4xl">“Eu não quero apenas que as pessoas aprendam. Quero que elas <span className="text-primary">mudem a forma de agir.</span>”</p>
            <p className="mt-6 text-muted-foreground">Escuta · Contexto · Prática · Acompanhamento</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-card py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="relative">
            <img src={paula3.url} alt="Retrato profissional de Paula Arrais" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -right-3 bg-primary px-7 py-5 text-primary-foreground md:-right-6"><p className="font-display text-3xl">+10 anos</p><p className="text-sm">vivendo essa realidade</p></div>
          </div>
          <div>
            <SectionTitle eyebrow="Sobre Paula">Eu conheço essa realidade por dentro.</SectionTitle>
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              <p>Minha trajetória foi construída vivendo equipes, conduzindo pessoas e enfrentando os desafios reais das clínicas.</p>
              <p>Mais do que ensinar sobre pessoas, eu acredito em desenvolvê-las para que assumam o papel que podem ocupar.</p>
              <p>Meu trabalho une experiência prática, gestão de pessoas, comportamento e experiência do paciente.</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-5 border-t border-border pt-8">
              <div><strong className="stat">+10</strong><span>anos de experiência</span></div>
              <div><strong className="stat">+1.000</strong><span>profissionais desenvolvidos</span></div>
              <div><strong className="stat">ADM</strong><span>formação em Administração</span></div>
            </div>
            <p className="mt-10 font-display text-2xl text-foreground">Pessoas não são apenas parte da clínica. <span className="text-primary">Elas são parte do que a clínica se torna.</span></p>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="border-y border-border/70 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Depoimentos" centered>Quem já viveu essa transformação fala melhor do que eu.</SectionTitle>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-premium transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground" aria-hidden="true">{item.initial}</span>
                  <div>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                {item.stars > 0 && (
                  <div className="mt-4 flex gap-1" aria-label={`${item.stars} de 5 estrelas`}>
                    {Array.from({ length: item.stars }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                )}
                <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed text-foreground">“{item.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">Feedback real recebido por Paula</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      <section className="border-y border-border/70 bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Para clínicas que querem crescer">Sem deixar o cuidado para trás.</SectionTitle>
            <p className="mt-7 leading-relaxed text-muted-foreground">Especialmente para clínicas de saúde e odontológicas que querem fortalecer a cultura e construir uma equipe mais independente.</p>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {["Fortalecer a cultura", "Desenvolver protagonismo", "Melhorar a comunicação", "Preparar líderes", "Elevar a experiência do paciente", "Criar mais independência"].map((item) => <li key={item} className="flex items-start gap-3 text-foreground"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</li>)}
            </ul>
          </div>
          <img src={paula2.url} alt="Paula Arrais em ambiente profissional" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle eyebrow="Perguntas frequentes" centered>Antes da nossa conversa.</SectionTitle>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-foreground">{question}<ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" /></summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-24 text-background md:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <p className="eyebrow">Tudo começa nas pessoas</p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">A sua equipe está preparada para representar a clínica que você quer construir?</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-background/70">Sua clínica pode ser lembrada pelo que faz. Mas também pode ser lembrada pelo que faz as pessoas sentirem.</p>
          <ActionLink className="mt-10" message="Olá, Paula! Quero conversar sobre o desenvolvimento da minha equipe.">Conversar sobre minha equipe</ActionLink>
        </div>
      </section>

      <section id="contato" className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Vamos conversar?</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-6xl">O extraordinário já existe. Vamos ajudar esse potencial a aparecer?</h2>
            <p className="mt-7 leading-relaxed text-muted-foreground">Sem fórmula pronta. Com clareza, presença e um caminho possível para a realidade da sua clínica.</p>
            <div className="mt-10 space-y-4 text-sm">
              <a href="https://instagram.com/apaulaarrais" target="_blank" rel="noreferrer" className="contact-line"><Instagram className="h-5 w-5 text-primary" />@apaulaarrais</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="contact-line"><Phone className="h-5 w-5 text-primary" />(31) 97365-6088</a>
              <a href="mailto:paulamentoriaa@gmail.com" className="contact-line"><Mail className="h-5 w-5 text-primary" />paulamentoriaa@gmail.com</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 md:flex-row md:items-end md:px-8">
          <div><p className="font-display text-2xl text-foreground">Paula <span className="text-primary">Arrais</span></p><p className="mt-2 text-sm text-muted-foreground">Desenvolvimento de pessoas para clínicas</p></div>
          <div className="text-sm text-muted-foreground md:text-right"><p>Liderança · Comportamento · Experiência do Paciente</p><p className="mt-2">© {new Date().getFullYear()} Paula Arrais. Todos os direitos reservados.</p></div>
        </div>
      </footer>
    </main>
  );
}
