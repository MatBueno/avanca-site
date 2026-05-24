import Image from 'next/image'

// ── Links das lojas — atualizar quando o app for publicado ────────────────────
const PLAY_STORE_URL = '#' // TODO: https://play.google.com/store/apps/details?id=com.avanca.app
const APP_STORE_URL  = '#' // TODO: https://apps.apple.com/app/avanca/...

const PROBLEMS = [
  {
    icon: 'gasolina',
    text: 'Pegou R$ 180 em corridas e entregas. Gastou R$ 45 de gasolina e rodou 80km. Quanto sobrou de verdade?',
  },
  {
    icon: 'calendario',
    text: 'Final do mês chega e a grana foi embora. Mas você trabalhou demais. Alguma conta não fecha.',
  },
  {
    icon: 'grafico',
    text: 'Não sabe qual app vale mais a pena rodar, nem qual dia da semana rende mais pra você.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Anota o turno',
    desc: 'Em 30 segundos: quanto ganhou, km rodados e quais apps você usou no dia.',
  },
  {
    num: '02',
    title: 'A gente calcula',
    desc: 'Custo real por km, meta do dia, projeção até o fim do mês. Tudo automático.',
  },
  {
    num: '03',
    title: 'Você decide',
    desc: 'Quando parar, onde focar energia e quanto pode gastar sem sair das suas metas.',
  },
]

const FEATURES = [
  'Quanto vai ganhar até o fim do mês',
  'Vê se esse mês foi melhor que o anterior',
  'Descobre qual app tá te pagando mais',
  'Qual dia da semana rende mais pra você',
  'Quanto você pode gastar mantendo seus sonhos',
]

const FREE_FEATURES = [
  'Registro de turnos',
  'Resumo do dia',
  'Meta diária personalizada',
  'Funciona offline',
]

const PRO_FEATURES = [
  'Tudo do plano grátis',
  'Projeção de ganhos até fim do mês',
  'Comparativo mês a mês',
  'Qual app está pagando mais',
  'Qual dia da semana rende mais',
  'Quanto pode gastar mantendo seus sonhos',
]

// ── Atoms ─────────────────────────────────────────────────────────────────────

function Wordmark({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const cls = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-xl'
  return (
    <span className={`font-brand font-extrabold tracking-tight ${cls}`}>
      Avan<span className="text-verde">ça</span>
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-verde text-xs font-medium tracking-[0.22em] uppercase">
      {children}
    </span>
  )
}

function ProblemIcon({ name }: { name: string }) {
  const cls = 'w-7 h-7 stroke-[1.5]'
  if (name === 'gasolina') return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="#C8F000" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M3 22h12" />
      <path d="M15 8h2a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1V9l-3-3" />
      <path d="M7 10h4" />
      <path d="M7 14h4" />
    </svg>
  )
  if (name === 'calendario') return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="#C8F000" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  )
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="#C8F000" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  )
}

function PhoneFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: 240 }}>
      <div
        className="relative overflow-hidden rounded-[2.5rem] border-2 border-cinza-medio shadow-2xl bg-preto"
        style={{ aspectRatio: '9 / 19.5' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          priority={priority}
          sizes="240px"
        />
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-verde/20 blur-xl rounded-full" />
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-preto/80 backdrop-blur-md border-b border-cinza-medio">
        <Wordmark />
        <a
          href="#precos"
          className="bg-verde text-preto text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Baixar grátis
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-24 pb-20 relative overflow-hidden">
        <div className="glow" />
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div>
            <SectionLabel>SEU CORRE, SUA VIDA, SUA VEZ</SectionLabel>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.04] mt-4 mb-6">
              Quanto você{' '}
              <span className="text-verde">realmente</span>{' '}
              ganhou hoje?
            </h1>
            <p className="text-cinza-texto text-lg leading-relaxed mb-8 max-w-md">
              Registra o turno. A gente mostra o que sobrou de verdade —
              descontado gasolina, manutenção e todo o resto.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PLAY_STORE_URL}
                className="flex items-center justify-center gap-2 bg-verde text-preto font-medium text-base px-7 py-4 rounded-2xl hover:opacity-90 transition-opacity"
              >
                Baixar para Android →
              </a>
              <a
                href={APP_STORE_URL}
                className="flex items-center justify-center gap-2 border border-cinza-medio text-cinza-texto text-base px-7 py-4 rounded-2xl"
                title="Em breve na App Store"
              >
                iOS — em breve
              </a>
            </div>
            <p className="text-cinza-claro text-sm mt-4">
              Grátis pra sempre nos recursos essenciais
            </p>
          </div>

          {/* Phone com screenshot real */}
          <div className="flex justify-center">
            <PhoneFrame src="/screen-home.jpg" alt="Avança — tela principal com meta batida" priority />
          </div>
        </div>
      </section>

      {/* PROBLEM — foto Paulista como fundo */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/foto-paulista.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-preto/95 via-preto/92 to-preto/95" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionLabel>O problema</SectionLabel>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 mb-12 max-w-2xl leading-[1.08]">
            Trabalhar muito não é o mesmo que ganhar bem.
          </h2>
          {/* Mobile: scroll horizontal */}
          <div className="md:hidden -mx-6 overflow-x-auto hide-scrollbar">
            <div className="flex gap-3 px-6 snap-x snap-mandatory pb-2">
              {PROBLEMS.map(({ icon, text }) => (
                <div key={icon} className="snap-center flex-none w-[78vw] bg-preto/80 backdrop-blur-sm rounded-2xl p-6 border border-cinza-medio">
                  <div className="mb-4"><ProblemIcon name={icon} /></div>
                  <p className="text-cinza-texto text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {PROBLEMS.map(({ icon, text }) => (
              <div key={icon} className="bg-preto/80 backdrop-blur-sm rounded-2xl p-6 border border-cinza-medio">
                <div className="mb-4"><ProblemIcon name={icon} /></div>
                <p className="text-cinza-texto text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — foto motorista como fundo */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/foto-motorista.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-preto/90" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionLabel>Como funciona</SectionLabel>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 mb-14 max-w-xl leading-[1.08]">
            Simples como deve ser.
          </h2>
          {/* Mobile: scroll horizontal com snap */}
          <div className="md:hidden -mx-6 overflow-x-auto hide-scrollbar">
            <div className="flex gap-4 px-6 snap-x snap-mandatory pb-2">
              {STEPS.map(({ num, title, desc }) => (
                <div key={num} className="snap-center flex-none w-[72vw] bg-preto/50 border border-cinza-medio rounded-2xl p-6">
                  <span className="font-display font-extrabold text-6xl text-verde/25 block mb-4 leading-none">{num}</span>
                  <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
                  <p className="text-cinza-texto text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-10">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num}>
                <span className="font-display font-extrabold text-6xl text-verde/25 block mb-4 leading-none">{num}</span>
                <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
                <p className="text-cinza-texto text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — dois phones reais */}
      <section className="py-20 px-6 bg-cinza-escuro">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="md:sticky md:top-28">
            <SectionLabel>Avança Pro</SectionLabel>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-3 mb-4 leading-[1.08]">
              O quadro completo do seu dinheiro.
            </h2>
            <p className="text-cinza-texto text-sm leading-relaxed mb-6 max-w-xs">
              Depois de 30 turnos, você tem dados suficientes pra ver muito além do dia a dia.
            </p>
            <ul className="space-y-3 mb-8">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="text-verde text-sm flex-shrink-0">✓</span>
                  <span className="text-branco text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a href="#precos" className="text-verde text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity">
              Ver planos →
            </a>
          </div>

          {/* Mobile: um phone de cada vez em scroll */}
          <div className="md:hidden -mx-6 overflow-x-auto hide-scrollbar">
            <div className="flex gap-4 px-6 snap-x snap-mandatory pb-2 justify-start">
              <div className="snap-center flex-none">
                <PhoneFrame src="/screen-ganhos.jpg" alt="Avança Pro — ganhos do mês" />
              </div>
              <div className="snap-center flex-none">
                <PhoneFrame src="/screen-apps.jpg" alt="Avança Pro — qual app paga mais" />
              </div>
            </div>
          </div>
          {/* Desktop: dois phones com offset */}
          <div className="hidden md:relative md:flex justify-center items-end gap-4 h-[520px]">
            <div className="self-start mt-8">
              <PhoneFrame src="/screen-ganhos.jpg" alt="Avança Pro — ganhos do mês" />
            </div>
            <div className="self-end mb-8">
              <PhoneFrame src="/screen-apps.jpg" alt="Avança Pro — qual app paga mais" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precos" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Planos</SectionLabel>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 mb-3 leading-[1.08]">
            Comece grátis. Evolua quando quiser.
          </h2>
          <p className="text-cinza-texto text-base mb-12">
            Comece grátis. Assine quando fizer sentido.
          </p>
          {/* Mobile: scroll horizontal — Pro aparece primeiro */}
          <div className="md:hidden -mx-6 overflow-x-auto hide-scrollbar">
            <div className="flex gap-3 px-6 snap-x snap-mandatory pb-2 text-left">
              {/* Pro primeiro no mobile */}
              <div className="snap-center flex-none w-[82vw] bg-cinza-escuro rounded-2xl p-6 border border-verde flex flex-col relative shadow-[0_0_40px_rgba(200,240,0,0.1)]">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-verde text-preto text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap">RECOMENDADO</div>
                <p className="font-brand text-verde text-sm tracking-wide mb-3">Avança Pro</p>
                <p className="font-display font-extrabold text-4xl mb-1">
                  R$ 34,90<span className="font-sans font-normal text-lg text-cinza-texto">/ano</span>
                </p>
                <p className="text-branco text-sm mb-1">Menos que um cafezinho por mês</p>
                <p className="text-cinza-texto text-xs mb-6">ou 3× R$ 12,90</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {PRO_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-verde text-xs">✓</span>
                      <span className="text-branco text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={PLAY_STORE_URL} className="block text-center bg-verde text-preto text-sm font-medium py-3.5 rounded-xl">Começar com Pro</a>
              </div>
              {/* Free */}
              <div className="snap-center flex-none w-[82vw] bg-cinza-escuro rounded-2xl p-6 border border-cinza-medio flex flex-col">
                <p className="font-brand text-cinza-texto text-sm tracking-wide mb-3">Avança Grátis</p>
                <p className="font-display font-extrabold text-4xl mb-1">R$ 0</p>
                <p className="text-cinza-texto text-sm mb-6">pra sempre</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {FREE_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-cinza-claro text-xs">✓</span>
                      <span className="text-cinza-texto text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={PLAY_STORE_URL} className="block text-center border border-cinza-medio text-branco text-sm font-medium py-3.5 rounded-xl">Baixar grátis</a>
              </div>
              {/* Pro Max */}
              <div className="snap-center flex-none w-[82vw] bg-cinza-escuro rounded-2xl p-6 border border-cinza-medio flex flex-col opacity-60">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-brand text-cinza-texto text-sm tracking-wide">Avança Pro Max</p>
                  <span className="bg-cinza-medio text-cinza-texto text-[10px] font-medium px-3 py-1 rounded-full">EM BREVE</span>
                </div>
                <p className="font-display font-extrabold text-4xl mb-1">R$ 79,90</p>
                <p className="text-cinza-texto text-sm mb-6">por ano</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Tudo do Avança Pro', 'Eva — IA emocional (V2)', 'Módulo Família (V3)'].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-cinza-claro text-xs">·</span>
                      <span className="text-cinza-texto text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="block text-center border border-cinza-medio text-cinza-texto text-sm font-medium py-3.5 rounded-xl">Em breve</div>
              </div>
            </div>
          </div>

          {/* Desktop: grid 3 colunas */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 text-left items-start">
            {/* FREE */}
            <div className="bg-cinza-escuro rounded-2xl p-6 border border-cinza-medio flex flex-col">
              <p className="font-brand text-cinza-texto text-sm tracking-wide mb-3">Avança Grátis</p>
              <p className="font-display font-extrabold text-4xl mb-1">R$ 0</p>
              <p className="text-cinza-texto text-sm mb-6">pra sempre</p>
              <ul className="space-y-3 mb-8 flex-1">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-cinza-claro text-xs">✓</span>
                    <span className="text-cinza-texto text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={PLAY_STORE_URL} className="block text-center border border-cinza-medio text-branco text-sm font-medium py-3.5 rounded-xl hover:border-cinza-claro transition-colors">
                Baixar grátis
              </a>
            </div>

            {/* PRO — destaque no meio */}
            <div className="bg-cinza-escuro rounded-2xl p-6 border border-verde flex flex-col relative shadow-[0_0_50px_rgba(200,240,0,0.1)] md:-mt-4 md:-mb-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-verde text-preto text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap">
                RECOMENDADO
              </div>
              <p className="font-brand text-verde text-sm tracking-wide mb-3">Avança Pro</p>
              <p className="font-display font-extrabold text-4xl mb-1">R$ 34,90</p>
              <p className="text-cinza-texto text-sm mb-6">por ano · ou 3× R$ 12,90</p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-verde text-xs">✓</span>
                    <span className="text-branco text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={PLAY_STORE_URL} className="block text-center bg-verde text-preto text-sm font-medium py-3.5 rounded-xl hover:opacity-90 transition-opacity">
                Começar com Pro
              </a>
            </div>

            {/* PRO MAX — em breve */}
            <div className="bg-cinza-escuro rounded-2xl p-6 border border-cinza-medio flex flex-col opacity-60">
              <div className="flex items-center justify-between mb-3">
                <p className="font-brand text-cinza-texto text-sm tracking-wide">Avança Pro Max</p>
                <span className="bg-cinza-medio text-cinza-texto text-[10px] font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  EM BREVE
                </span>
              </div>
              <p className="font-display font-extrabold text-4xl mb-1">R$ 79,90</p>
              <p className="text-cinza-texto text-sm mb-6">por ano</p>
              <ul className="space-y-3 mb-8 flex-1">
                {['Tudo do Avança Pro', 'Eva — IA emocional (V2)', 'Módulo Família (V3)'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-cinza-claro text-xs">·</span>
                    <span className="text-cinza-texto text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="block text-center border border-cinza-medio text-cinza-texto text-sm font-medium py-3.5 rounded-xl cursor-not-allowed">
                Em breve
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FIXO — só no mobile, sempre visível */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-3 bg-gradient-to-t from-preto via-preto/95 to-transparent">
        <a
          href={PLAY_STORE_URL}
          className="block text-center bg-verde text-preto font-medium text-base py-4 rounded-2xl shadow-lg"
        >
          Baixar grátis →
        </a>
      </div>

      {/* PROPÓSITO */}
      <section className="py-24 px-6 bg-cinza-escuro">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Por que existimos</SectionLabel>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-4 mb-8 leading-[1.08]">
            Motoristas e entregadores merecem ser mais do que{' '}
            <span className="text-verde">o trabalho deles.</span>
          </h2>
          <div className="space-y-5 text-cinza-texto text-base leading-relaxed">
            <p>
              O Brasil tem{' '}
              <strong className="text-branco">mais de 80 milhões de pessoas endividadas.</strong>{' '}
              A maioria não sabe quanto ganha de verdade. Trabalha muito, gasta sem ver, e chega no fim do mês sem entender o que aconteceu.
            </p>
            <p>
              Para motoristas e entregadores, isso é ainda mais duro. São horas de corre, risco no trânsito, desgaste no corpo — e no final, a conta não fecha.
            </p>
            <p>
              A Avança não é só um app de controle financeiro.{' '}
              <strong className="text-branco">
                É uma ferramenta de dignidade.
              </strong>{' '}
              Criada para devolver clareza, organização e espaço para que cada trabalhador possa ser financeiramente livre, emocionalmente presente e mais próximo da família que sustenta.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-cinza-medio">
            <p className="text-verde text-sm font-medium tracking-wide uppercase mb-1">Nosso propósito</p>
            <p className="font-display font-extrabold text-xl sm:text-2xl text-branco leading-snug">
              "Devolver espaço para que motoristas e entregadores possam ser mais do que o trabalho deles — financeiramente organizados, emocionalmente cuidados e presentes para a família."
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL — foto POV moto como fundo */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/foto-moto-pov.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-preto/80" />
        </div>
        <div className="glow" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-2">
            Chega de adivinhar.
          </h2>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8 text-verde">
            Comece a Avançar.
          </h2>
          <p className="text-branco text-lg mb-10">É grátis. Sem cartão. Sem enrolação.</p>
          <a
            href={PLAY_STORE_URL}
            className="inline-block bg-verde text-preto font-medium text-base px-10 py-4 rounded-2xl hover:opacity-90 transition-opacity"
          >
            Baixar grátis →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cinza-medio pt-10 pb-28 md:pb-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-6">
          <div className="text-center sm:text-left">
            <Wordmark />
            <p className="text-cinza-texto text-xs mt-1">
              Para motoristas e entregadores que querem mais do seu trabalho.
            </p>
          </div>
          <div className="flex items-center gap-6 text-cinza-claro text-xs">
            <a href="/termos" className="hover:text-branco transition-colors">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-branco transition-colors">Privacidade</a>
            <span>© {new Date().getFullYear()} Avança</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
