import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contactos | Patrícia Nibra & Nuno Esteves',
  description: 'Entre em contacto com a nossa sociedade de agentes de execução. Estamos disponíveis para esclarecer as suas dúvidas.',
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Morada',
    details: ['Largo Doutor José Novais, 134, 1.º Esq.', '4750-310 Barcelos'],
  },
  {
    icon: Phone,
    title: 'Telefone',
    details: ['253 814 274'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['[Adicionar email]'],
  },
  {
    icon: Clock,
    title: 'Horário',
    details: ['Segunda a Sexta: [Adicionar horário]', 'Sábado e Domingo: Encerrado'],
  },
]

export default function ContactosPage() {
  return (
    <>
      <PageHeader
        title="Contactos"
        description="Estamos disponíveis para si. Todas as comunicações são tratadas com discrição e respondidas com brevidade."
        imageSrc="/images/contactos.webp"
      />

      {/* Contact Section */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Informações de Contacto
              </h2>
              <p className="mt-3 text-muted-foreground">
                Pode contactar-nos por qualquer um dos meios abaixo. Respondemos a todas as solicitações com brevidade e tratamos cada contacto com total confidencialidade.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="mt-1 space-y-0.5">
                        {item.details.map((detail, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            {item.title === 'Telefone' ? (
                              <a href={`tel:${detail.replace(/\s/g, '')}`} className="hover:text-foreground transition-colors">
                                {detail}
                              </a>
                            ) : item.title === 'Email' ? (
                              <a href={`mailto:${detail}`} className="hover:text-foreground transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Envie-nos uma mensagem</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Preencha o formulário e entraremos em contacto brevemente. Todos os dados são tratados com total confidencialidade.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <div className="flex h-80 items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-primary/50" />
                <p className="mt-4 text-sm text-muted-foreground">
                  Barcelos, Portugal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
