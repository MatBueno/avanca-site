import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Avança',
  description: 'Como a Avança coleta, usa e protege seus dados pessoais.',
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

export default function Privacidade() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto">

        {/* Nav mínimo */}
        <div className="mb-12">
          <Link href="/" className="text-verde text-sm font-medium hover:opacity-80 transition-opacity">
            ← Avança
          </Link>
        </div>

        <span className="text-verde text-xs font-medium tracking-[0.22em] uppercase">Legal</span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-branco mt-3 mb-2 leading-tight">
          Política de Privacidade
        </h1>
        <p className="text-cinza-texto text-xs mb-12">Última atualização: {LAST_UPDATED}</p>

        <Section title="1. Quem somos">
          <p>
            A <strong className="text-branco">Avança</strong> é um aplicativo mobile desenvolvido por
            Mateus Bueno, com sede em São Paulo, Brasil. O app foi criado para ajudar motoristas e
            entregadores de aplicativos a acompanharem ganhos, despesas e metas financeiras.
          </p>
          <p>
            Para dúvidas sobre esta política ou exercer seus direitos, entre em contato:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-verde hover:underline">{CONTACT_EMAIL}</a>
          </p>
        </Section>

        <Section title="2. Dados que coletamos">
          <p>Coletamos apenas o necessário para fornecer o serviço:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-branco">Dados de perfil:</strong> nome (apelido), tipo de veículo, regime de propriedade (próprio, financiado ou alugado), valor de parcela/aluguel, gasto estimado com combustível e manutenção.</li>
            <li><strong className="text-branco">Dados financeiros:</strong> valores de ganho por turno, despesas com gasolina e alimentação, distância rodada (km), plataformas usadas (Uber, iFood, 99, Rappi, Keeta, Particular).</li>
            <li><strong className="text-branco">Dados de conta (opcionais):</strong> endereço de e-mail (para recuperação de conta via Google).</li>
            <li><strong className="text-branco">Dados de uso:</strong> eventos de navegação e uso de funcionalidades, coletados de forma agregada e anonimizada para melhorar o produto.</li>
            <li><strong className="text-branco">Dados de erros:</strong> registros técnicos de falhas no app, sem identificação pessoal de navegação.</li>
          </ul>
          <p>
            <strong className="text-branco">Não coletamos</strong> localização GPS, conteúdo de mensagens, dados de saúde, biometria nem informações de menores de 18 anos.
          </p>
        </Section>

        <Section title="3. Por que coletamos e base legal (LGPD)">
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-branco">Execução do contrato (Art. 7º, V):</strong> calcular metas, sobra real do dia, projeções e comparativos — a funcionalidade principal do app.</li>
            <li><strong className="text-branco">Legítimo interesse (Art. 7º, IX):</strong> monitorar erros técnicos para garantir estabilidade e segurança do serviço.</li>
            <li><strong className="text-branco">Consentimento (Art. 7º, I):</strong> envio de notificações locais (lembretes diários de turno), solicitado explicitamente dentro do app.</li>
          </ul>
        </Section>

        <Section title="4. Com quem compartilhamos">
          <p>Seus dados são processados pelos seguintes fornecedores (todos sob acordo de processamento de dados):</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-branco">Supabase, Inc. (EUA):</strong> armazenamento de perfil e histórico de turnos na nuvem. Transferência internacional protegida pelas Cláusulas Contratuais Padrão (SCCs) da União Europeia.</li>
            <li><strong className="text-branco">PostHog, Inc. (EUA):</strong> analytics de uso, dados anonimizados e agregados.</li>
            <li><strong className="text-branco">Sentry (Functional Software, Inc., EUA):</strong> monitoramento de erros técnicos, sem dados pessoais identificáveis.</li>
          </ul>
          <p>
            <strong className="text-branco">Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins de publicidade.</strong>
          </p>
        </Section>

        <Section title="5. Onde e por quanto tempo ficam seus dados">
          <p>
            Seus dados são armazenados <strong className="text-branco">localmente no dispositivo</strong> (AsyncStorage) e,
            se você vincular uma conta Google, também em servidores da Supabase.
          </p>
          <p>
            Mantemos seus dados enquanto sua conta estiver ativa. Se você usar a função
            <strong className="text-branco"> "Apagar todos os dados"</strong> no Perfil do app, todos os dados
            locais e remotos são deletados permanentemente e irreversivelmente.
          </p>
        </Section>

        <Section title="6. Seus direitos (LGPD, Art. 18)">
          <p>Como titular de dados, você tem direito a:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos seus dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade dos dados a outro fornecedor;</li>
            <li>Eliminação dos dados — disponível diretamente no app (Perfil → Apagar todos os dados);</li>
            <li>Revogação do consentimento — para notificações, acesse Perfil → Lembretes, ou as Configurações do celular.</li>
          </ul>
          <p>
            Para exercer qualquer direito, entre em contato:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-verde hover:underline">{CONTACT_EMAIL}</a>
          </p>
        </Section>

        <Section title="7. Notificações locais">
          <p>
            O app pode solicitar permissão para enviar notificações locais (lembretes de turno). Essas
            notificações são geradas <strong className="text-branco">exclusivamente no seu dispositivo</strong> e não
            transmitem dados para servidores externos. Você pode desativá-las a qualquer momento no Perfil
            do app ou nas Configurações do celular.
          </p>
        </Section>

        <Section title="8. Segurança">
          <p>
            Adotamos medidas técnicas para proteger seus dados: controle de acesso por linha (RLS) no banco
            de dados, autenticação segura via Google OAuth, e nenhuma chave de API exposta no código do
            cliente. Em caso de incidente de segurança que possa afetar seus dados, notificaremos a ANPD
            e os titulares afetados em até 72 horas, conforme exigido pela LGPD.
          </p>
        </Section>

        <Section title="9. Crianças e adolescentes">
          <p>
            O Avança não é direcionado a menores de 18 anos e não coleta intencionalmente dados de
            crianças ou adolescentes. Se você acredita que dados de um menor foram fornecidos, entre em
            contato para que possamos removê-los imediatamente.
          </p>
        </Section>

        <Section title="10. Alterações nesta política">
          <p>
            Podemos atualizar esta política periodicamente. Quando o fizermos, atualizaremos a data no
            topo desta página. Mudanças significativas serão comunicadas dentro do app.
          </p>
        </Section>

        <Section title="11. Contato e DPO">
          <p>
            Responsável pelo tratamento de dados:<br />
            <strong className="text-branco">Mateus Bueno</strong><br />
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-verde hover:underline">{CONTACT_EMAIL}</a>
          </p>
          <p>
            Autoridade Nacional de Proteção de Dados (ANPD):{' '}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-verde hover:underline">
              www.gov.br/anpd
            </a>
          </p>
        </Section>

        <div className="border-t border-cinza-medio pt-8 mt-8">
          <div className="flex items-center justify-between text-xs text-cinza-texto">
            <Link href="/" className="hover:text-branco transition-colors">← Avança</Link>
            <Link href="/termos" className="hover:text-branco transition-colors">Termos de Uso →</Link>
          </div>
        </div>

      </div>
    </main>
  )
}
