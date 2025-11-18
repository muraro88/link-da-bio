import { useState } from 'react';
import heroImage from './assets/dra-sonia-monteiro-nutriologa-em-natal-rn.webp';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [onlyPrivate, setOnlyPrivate] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSchedule = () => setIsScheduleOpen(true);
  const closeSchedule = () => setIsScheduleOpen(false);

  return (
    // O React.Fragment <> permite agrupar múltiplos elementos sem adicionar um nó extra ao DOM.
    <>
      {/* NOVO CONTAINER DE PÁGINA:
        Este 'div' envolve o seu cartão e tem a função de centralizá-lo na tela.
        - min-h-screen: Garante que ocupe pelo menos a altura total da tela.
        - w-full: Ocupa toda a largura.
        - flex, items-center, justify-center: Comandos mágicos para centralizar perfeitamente o filho (seu cartão) na vertical e horizontal.
        - p-4: Adiciona um preenchimento para que o cartão não cole nas bordas em telas pequenas.
      */}
      <div className="min-h-screen w-full flex items-center justify-center p-4">

        {/* Contêiner principal do cartão de links (SEU CÓDIGO ORIGINAL) */}
        <div className="bg-gray-100 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">

          {/* Seção Hero com a imagem, fade e texto sobreposto. */}
          <div className="relative h-72 text-center">
            <img className="absolute top-0 left-0 w-full h-full object-cover object-top"
              src={heroImage}
              alt="[Imagem de um médico sorrindo em um ambiente de consultório]" 
              onError={(e) => { 
                // Corrigido: Usando e.currentTarget para ser compatível com TypeScript
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null; 
                target.src='https://placehold.co/600x400/ccc/FFFFFF?text=Foto'; 
              }}
            />
            {/* Sobreposição escura para aumentar o contraste do texto sobre a imagem */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
            {/* Camada para o efeito de fade */}
            <div className="absolute bottom-0 left-0 w-full h-[60%] hero-fade"></div>
            {/* Container para o texto do hero */}
            <div className="absolute bottom-0 left-0 w-full p-6 hero-text">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Dra. Sonia Monteiro</h1>
            </div>
          </div>
        
          {/* Conteúdo principal abaixo do hero (descrição e botões) */}
          <div className="p-8 text-center">
              <p className="text-gray-500 leading-relaxed mb-8 -mt-4">
                <h2 className="text-2xl font-semibold text-black">Nutrologia em Natal - RN</h2>
                <h3>CRM RN - RN: 5569 | Clínica Médica RQE: 2364</h3>
              </p>

              {/* Div que agrupa todos os botões de links. */}
              <div className="w-full flex flex-col gap-6">
                {/* Link para o WhatsApp. */}
                <button onClick={openSchedule}
                  className="link-button-animation link-whatsapp relative block bg-[#095961] text-white font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center space-x-3 text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="#fff"><path d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path></svg>
                  <span>Agendar Consulta</span>
                </button>

                {/* Link para o Doctoralia. */}
                <a href="https://www.doctoralia.com.br/sonia-monteiro/nutrologo-especialista-em-clinica-medica/natal" target="_blank" rel="noopener noreferrer"
                  className="link-button-animation relative block bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center space-x-3 text-lg hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#02C3A5"><path d="M13.092 17.395c.481-1.18 1.836-2.833 3.217-3.685l3.06 5.061-3.134 2.277-3.143-3.653Zm-4.518 3.647L4.26 18.268c3.265-6.103 9.367-10.45 16.538-11.26l1.201 3.7c-5.91 1.165-10.844 5.067-13.426 10.334Zm.94-12.562L10.06 2h3.874l.492 5.86c-2.223.762-3.53 1.371-5.028 2.292a15.922 15.922 0 0 0-3.01 2.382L2 10.682l1.196-3.69L9.515 8.48Z"></path></svg>
                  <span>Doctoralia</span>
                </a>

                {/* Botão que abre o modal. A função openModal é chamada no onClick. */}
                <button onClick={openModal}
                  className="link-button-animation relative block bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center space-x-3 text-lg hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="98" height="20" viewBox="0 0 98 20" fill="none" className="h-6"><path fill="#03C3A5" fillRule="evenodd" stroke="#03C3A5" d="m17.845 7.355-4.732-.41-1.848-4.351c-.332-.792-1.466-.792-1.799 0L7.62 6.954l-4.723.401c-.86.068-1.212 1.144-.557 1.711l3.588 3.109-1.075 4.614c-.196.841.713 1.506 1.456 1.056l4.058-2.444 4.057 2.454c.743.45 1.652-.215 1.457-1.056l-1.076-4.624 3.588-3.109c.655-.567.313-1.643-.547-1.71Zm19.244 0-4.732-.41-1.848-4.351c-.332-.792-1.466-.792-1.798 0l-1.848 4.36-4.722.401c-.86.068-1.212 1.144-.557 1.711l3.588 3.109-1.076 4.614c-.195.841.714 1.506 1.457 1.056l4.057-2.444 4.057 2.454c.743.45 1.652-.215 1.457-1.056l-1.075-4.624 3.588-3.109c.655-.567.312-1.643-.548-1.71Zm14.513-.41 4.731.41c.86.068 1.203 1.144.548 1.711l-3.588 3.109 1.075 4.624c.196.84-.713 1.506-1.456 1.056l-4.058-2.454-4.057 2.444c-.743.45-1.652-.215-1.456-1.056l1.075-4.614-3.588-3.109c-.655-.567-.303-1.643.557-1.71l4.722-.402 1.848-4.36c.332-.792 1.467-.792 1.799 0zm23.976.41-4.732-.41-1.848-4.351c-.332-.792-1.466-.792-1.799 0l-1.847 4.36-4.722.401c-.86.068-1.213 1.144-.558 1.711l3.588 3.109-1.075 4.614c-.196.841.714 1.506 1.457 1.056l4.057-2.444 4.057 2.454c.743.45 1.652-.215 1.457-1.056l-1.076-4.624 3.588-3.109c.655-.567.313-1.643-.547-1.71Zm14.512-.41 4.732.41c.86.068 1.203 1.144.548 1.711l-3.588 3.109 1.075 4.624c.196.84-.714 1.506-1.457 1.056l-4.057-2.454-4.057 2.444c-.743.45-1.652-.215-1.457-1.056l1.076-4.614-3.588-3.109c-.655-.567-.303-1.643.557-1.71l4.722-.402 1.848-4.36c.332-.792 1.466-.792 1.799 0z" clipRule="evenodd"></path></svg>
                  <span>Ver Opiniões e FAQ</span>
                </button>

                {/* Link para o Instagram. */}
                <a href="https://instagram.com/drasoniamonteiro" target="_blank" rel="noopener noreferrer"
                  className="link-button-animation relative block bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center space-x-3 text-lg hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span>Siga-me no Instagram</span>
                </a>

                {/* Link para o Website. */}
                <a href="https://drasoniamonteiro.com.br" target="_blank" rel="noopener noreferrer"
                  className="link-button-animation relative block bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center space-x-3 text-lg hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  <span>Acesse meu Website</span>
                </a>
              </div>
          </div>
        </div>{/* Fim do contêiner principal do cartão */}

      </div>{/* Fim do NOVO CONTAINER DE PÁGINA */}


      {/* O Modal permanece aqui fora, como um "irmão" do container da página.
        Isso é crucial para que ele possa sobrepor a tela inteira quando for aberto.
      */}
      {isModalOpen && (
        <div className="modal-overlay open" onClick={closeModal}>
          <div className="modal-content text-left relative" onClick={(e) => e.stopPropagation()}>
            {/* O onClick no overlay fecha o modal, mas o stopPropagation no content evita que cliques dentro do modal o fechem. */}
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Opiniões de Pacientes</h3>
            <p className="text-gray-600 mb-6">
              "O atendimento da Dra. Sonia Monteiro é simplesmente impecável. A dedicação e o profissionalismo me fizeram sentir segura e bem cuidada. Altamente recomendado!" <br />
              - [Nome do Paciente]
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Perguntas Frequentes</h3>
            
            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-1">Qual é o valor da consulta?</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nossas consultas são de alto padrão, focadas na sua experiência e nos resultados. O valor da consulta reflete a qualidade e o tempo de dedicação exclusiva. Para mais detalhes, por favor, entre em contato diretamente via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Modal de Agendamento */}
      {isScheduleOpen && (
        <div className="modal-overlay open" onClick={closeSchedule}>
          <div className="modal-content text-left relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeSchedule} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Agendar Consulta</h3>
            <p className="text-gray-600 mb-4">Selecione se deseja indicar apenas consultas particulares:</p>

            <label className="flex items-center gap-3 mb-4">
              <input type="checkbox" checked={onlyPrivate} onChange={(e) => setOnlyPrivate(e.target.checked)} className="h-4 w-4" />
              <span className="text-gray-800">Dizer Apenas Consultas Particulares</span>
            </label>

            {onlyPrivate && (
              <p className="text-sm text-gray-500 mb-4">A opção "Apenas Consultas Particulares" está selecionada.</p>
            )}

            <div className="flex gap-3">
              <button onClick={closeSchedule} className="px-4 py-2 rounded-md bg-gray-200">Cancelar</button>
              <a href="https://api.whatsapp.com/send/?phone=%2B5584998999999&text=Ol%C3%A1+vim+do+Instagram+%28Link+da+Bio%29%2C+gostaria+de+agendar+uma+consulta+com+Dra.+Sonia+Monteiro&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-[#095961] text-white font-bold">Prosseguir</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
