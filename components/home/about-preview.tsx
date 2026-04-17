import { ShieldCheck, Briefcase, Handshake, FileCheck } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Rigor",
    description:
      "Cada ato processual é praticado com precisão técnica, imparcialidade e estrito cumprimento da lei.",
  },
  {
    icon: Briefcase,
    title: "Experiência",
    description:
      "Mais de 10 anos de prática especializada na ação executiva, com juristas formados em Solicitadoria e Direito.",
  },
  {
    icon: Handshake,
    title: "Proximidade",
    description:
      "Acompanhamento direto e personalizado - o cliente tem acesso a toda a informação sobre o seu processo.",
  },
  {
    icon: FileCheck,
    title: "Confiança",
    description:
      "Transparência, sigilo e responsabilidade como pilares de cada relação profissional.",
  },
];

export function AboutPreview() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
            Uma sociedade especializada. Uma equipa comprometida.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Patrícia Nibra, Nuno Esteves & Associados Sociedade de Agentes de
            Execução, SP, RL, encontra-se inscrita na OSAE com o número 128, foi
            constituída em 2014 e tem sede em Barcelos, exerce a sua atividade
            em todo o território nacional.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Com foco na eficiência, transparência e na mais elevada taxa de
            recuperação, adaptamos a nossa atuação às necessidades específicas
            de cada interveniente e situação.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
