import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termos de Uso — Avança',
  description: 'Termos e condições de uso do aplicativo Avança.',
}

const CONTACT_EMAIL = 'suporte@avanca.app'
const LAST_UPDATED = '01 de junho de 2025'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display font-extrabold text-xl text-branco mb-4">{title}</h2>
      <div className="space-y-3 text-cinza-texto text-sm leading-relaxed">{children}</div>
    </section>
  )
}

export default function Termos() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto">

        <div className="mb-12">
          <Link href="/" className="text-verde text-sm font-medium hover:opacity-80 transition-opacity">
            ← Avança
          </Link>
        </div>

        <span className="text-verde text-xs font-medium tracking-[0.22em] uppercase">Legal</span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-branco mt-3 mb-2 leading-tight">
          Termos de Uso
        </h1>
        <p className="text-cinza-texto text-xs mb-12">Última atualização: {LAST_UPDATED}</p>

        <Section title="1. Aceitação dos termos">
          <p>
            Ao baixar, instalar ou usar o aplicativo <strong className="text-branco">Avança</strong>, você concorda com
            estes Termos de Uso. Se não concordar, não utilize o app. Estes termos são regidos pela lei
            brasileira, em especial o Código de Defesa do Consumidor (Lei 8.078/90), o Marco Civil da
            Internet (Lei 12.965/14) e a LGPD (Lei 13.709/18).
          </p>
        </Section>

        <Section title="2. Descrição do serviço">
          <p>
            O Avança é um aplicativo de gestão financeira pessoal voltado para motoristas e entregadores de
            plataformas (Uber, 99, iFood, Rappi, Keeta e similares). O app permite registrar turnos,
            calcular ganhos líquidos, definir metas e acompanhar evolução financeira.
          </p>
          <p>
            O serviço é disponibilizado em dois planos:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-branco">Avança Grátis:</strong> recursos essenciais, disponíveis para sempre sem custo.</li>
            <li><strong className="text-branco">Avança Pro:</strong> funcionalidades avançadas de análise, mediante pagamento anual via PIX.</li>
          </ul>
        </Section>

        <Section title="3. Cadastro e conta">
          <p>
            O uso básico não exige cadastro. Para salvar seus dados na nuvem e acessá-los em múltiplos
            dispositivos, você pode vincular uma conta Google. Você é responsável pela segurança do acesso
            à sua conta e pelas informações inseridas no app.
          </p>
        </Section>

        <Section title="4. Pagamento — Avança Pro">
          <p>
            O Avança Pro é cobrado mediante pagamento via PIX realizado diretamente em nossa página de
            pagamento (<strong className="text-branco">avanca.app/pro</strong>). Ao concluir o pagamento:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>O acesso Pro é ativado após confirmação do pagamento (geralmente instantânea);</li>
            <li>O plano anual garante acesso por 12 meses a partir da ativação;</li>

          </ul>
          <p>
            <strong className="text-branco">Política de reembolso:</strong> reembolso integral disponível em até 7 dias
            corridos após a compra, conforme o Art. 49 do Código de Defesa do Consumidor. Para solicitar,
            entre em contato pelo e-mail abaixo.
          </p>
        </Section>

        <Section title="5. Uso permitido">
          <p>Você pode usar o Avança para:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Registrar seus próprios turnos de trabalho como motorista ou entregador;</li>
            <li>Acompanhar suas finanças pessoais relacionadas ao trabalho por plataforma;</li>
            <li>Definir e monitorar metas financeiras pessoais.</li>
          </ul>
          <p>É proibido:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Usar o app para fins comerciais sem autorização prévia;</li>
            <li>Tentar acessar dados de outros usuários;</li>
            <li>Fazer engenharia reversa, descompilar ou modificar o aplicativo;</li>
            <li>Usar scripts ou automações para acessar o serviço de forma não humana.</li>
          </ul>
        </Section>

        <Section title="6. Precisão das informações">
          <p>
            O Avança exibe cálculos baseados <strong className="text-branco">exclusivamente nos dados que você registra</strong>.
            Não nos conectamos a plataformas de delivery ou transporte para buscar dados automaticamente.
            A precisão dos resultados depende da exatidão das informações inseridas.
          </p>
          <p>
            As projeções e estimativas apresentadas no app são meramente informativas e não constituem
            assessoria financeira ou garantia de ganhos futuros.
          </p>
        </Section>

        <Section title="7. Disponibilidade">
          <p>
            Nos esforçamos para manter o Avança disponível, mas não garantimos disponibilidade ininterrupta.
            Podemos realizar manutenções, atualizações ou descontinuar funcionalidades sem aviso prévio,
            exceto quando isso afetar direitos adquiridos do usuário.
          </p>
        </Section>

        <Section title="8. Limitação de responsabilidade">
          <p>
            O Avança não se responsabiliza por:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Decisões financeiras tomadas com base nas informações do app;</li>
            <li>Perdas de dados causadas por falhas no dispositivo do usuário;</li>
            <li>Interrupções de serviço causadas por terceiros (Supabase, Play Store, etc.);</li>
            <li>Dados inseridos incorretamente pelo usuário.</li>
          </ul>
          <p>
            Nossa responsabilidade total, em qualquer caso, limita-se ao valor pago pelo usuário nos
            últimos 12 meses.
          </p>
        </Section>

        <Section title="9. Propriedade intelectual">
          <p>
            Todo o conteúdo do Avança — nome, logotipo, design, código, textos e funcionalidades — é
            propriedade exclusiva de Mateus Bueno e está protegido pela lei brasileira de direitos autorais.
            O uso do app não transfere nenhum direito de propriedade intelectual ao usuário.
          </p>
        </Section>

        <Section title="10. Cancelamento e exclusão">
          <p>
            Você pode parar de usar o Avança a qualquer momento. Para deletar todos os seus dados,
            use a opção <strong className="text-branco">Perfil → Apagar todos os dados</strong> no app.
            Essa ação é permanente e irrevogável.
          </p>
          <p>
            Podemos suspender ou encerrar contas que violem estes termos, com aviso prévio quando possível.
          </p>
        </Section>

        <Section title="11. Alterações nos termos">
          <p>
            Podemos atualizar estes Termos periodicamente. A data de atualização aparece no topo desta
            página. O uso continuado do app após alterações significativas implica aceite dos novos termos.
          </p>
        </Section>

        <Section title="12. Lei aplicável e foro">
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
            da comarca de São Paulo, SP, para dirimir quaisquer conflitos, sem prejuízo de mecanismos
            alternativos de solução de disputas.
          </p>
        </Section>

        <Section title="13. Contato">
          <p>
            Para dúvidas, suporte ou exercício de direitos legais:<br />
            <strong className="text-branco">Mateus Bueno — Avança</strong><br />
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-verde hover:underline">{CONTACT_EMAIL}</a>
          </p>
        </Section>

        <div className="border-t border-cinza-medio pt-8 mt-8">
          <div className="flex items-center justify-between text-xs text-cinza-texto">
            <Link href="/" className="hover:text-branco transition-colors">← Avança</Link>
            <Link href="/privacidade" className="hover:text-branco transition-colors">Política de Privacidade →</Link>
          </div>
        </div>

      </div>
    </main>
  )
}
