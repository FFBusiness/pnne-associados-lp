import { CheckCircle2 } from 'lucide-react'

const trustPoints = [
  { title: 'Mais de 10 anos de prática especializada na ação executiva' },
  { title: 'Equipa de juristas licenciados em Solicitadoria e Direito' },
  { title: 'Acompanhamento direto e personalizado em cada processo' },
  { title: 'Comunicação regular e transparente com mandatários e clientes' },
  { title: 'Atuação em todo o território nacional' },
  { title: 'Compromisso com rigor técnico e confidencialidade' },
]

export function TrustSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
              Porquê trabalhar connosco
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A nossa sociedade distingue-se pela especialização exclusiva na ação executiva e pelo compromisso com a eficiência processual. Conheça as razões pelas quais somos a escolha certa para os seus processos.
            </p>
          </div>

          <div className="space-y-4">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="font-medium">{point.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
