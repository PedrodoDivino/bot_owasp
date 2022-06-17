const TelegramBot = require("node-telegram-bot-api");
const env = require('./.env');

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  let firstName = msg.from.first_name;
  const text = msg.text;
  const zero = "0";

  console.log(msg, chatId);
  switch (text) {
    case "/start":
      bot.sendMessage(
        msg.chat.id,
        `\n 😁Olá ${firstName}, que  bom que você está interessado em programação segura.
        \nEu sou o Bryan e vou te ajudar no treinamento sobre a OWASP 👨🏻‍💻
        \nSe estiver a fim de dar uma olhada, só digitar a palavra "Menu" que eu te mostro😁`
      );

      break;

    case "Menu":
      bot.sendMessage(
        msg.chat.id,
        `TOP 10 Atualizado!!\n1️⃣Controle de acesso quebrado\n2️⃣As falhas criptográficas\n3️⃣A injeção\n4️⃣Design inseguro\n5️⃣Configuração incorreta de segurança\n6️⃣Componentes Vulneráveis e Desatualizados\n7️⃣As falhas de identificação e autentificação\n8️⃣Falhas de integridade de software e dados\n9️⃣As falhas de registro e monitoramento de segurança\n🔟Server-Side Requisição Falsa\n0️⃣Sair\n
Não é o que está procurando ${firstName}? É só mandar "${zero}" e encerrar a nossa conversa`
      );

      break;
      case "menu":
      bot.sendMessage(
        msg.chat.id,
        `TOP 10 Atualizado!!\n1️⃣Controle de acesso quebrado\n2️⃣As falhas criptográficas\n3️⃣A injeção\n4️⃣Design inseguro\n5️⃣Configuração incorreta de segurança\n6️⃣Componentes Vulneráveis e Desatualizados\n7️⃣As falhas de identificação e autentificação\n8️⃣Falhas de integridade de software e dados\n9️⃣As falhas de registro e monitoramento de segurança\n🔟Server-Side Requisição Falsa\n0️⃣Sair\n
Não é o que está procurando ${firstName}? É só mandar "${zero}" e encerrar a nossa conversa`
      );

      break;
      case "MENU":
      bot.sendMessage(
        msg.chat.id,
        `TOP 10 Atualizado!!\n1️⃣Controle de acesso quebrado\n2️⃣As falhas criptográficas\n3️⃣A injeção\n4️⃣Design inseguro\n5️⃣Configuração incorreta de segurança\n6️⃣Componentes Vulneráveis e Desatualizados\n7️⃣As falhas de identificação e autentificação\n8️⃣Falhas de integridade de software e dados\n9️⃣As falhas de registro e monitoramento de segurança\n🔟Server-Side Requisição Falsa\n0️⃣Sair\n
Não é o que está procurando ${firstName}? É só mandar "${zero}" e encerrar a nossa conversa`
      );

      break;

    case "1":
        bot.sendMessage(
        msg.chat.id,
        `O controle de acesso quebrado sobe da quinta posição para a categoria com o risco de segurança de aplicativo da web mais grave; os dados fornecidos indicam que, em média, 3,81% dos aplicativos testados tinham uma ou mais Enumerações de Fraqueza Comum (CWEs) com mais de 318 mil ocorrências de CWEs nesta categoria de risco. Os 34 CWEs mapeados para Broken Access Control tiveram mais ocorrências em aplicativos do que qualquer outra categoria.
        \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores ->  https://owasp.org/Top10/A01_2021-Broken_Access_Control/#factors \n✅Visão Geral -> https://owasp.org/Top10/A01_2021-Broken_Access_Control/#overview\n✅Descrição -> https://owasp.org/Top10/A01_2021-Broken_Access_Control/#description\n✅Como Prevenir ->https://owasp.org/Top10/A01_2021-Broken_Access_Control/#how-to-prevent\n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A01_2021-Broken_Access_Control/#example-attack-scenarios\n✅Referências -> https://owasp.org/Top10/A01_2021-Broken_Access_Control/#references \n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A01_2021-Broken_Access_Control/#list-of-mapped-cwes\n` 
        );

      break;

    case "2":
      bot.sendMessage(
        msg.chat.id,
        `As falhas criptográficas sobem uma posição para a 2ª posição, anteriormente conhecida como A3:2017-Exposição de dados sensíveis , que era um sintoma amplo e não uma causa raiz. O nome renovado se concentra em falhas relacionadas à criptografia, como antes implicitamente. Essa categoria geralmente leva à exposição de dados confidenciais ou ao comprometimento do sistema.
        \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores -> https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#factors \n✅Visão Geral -> https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#overview\n✅Descrição -> https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#description h\n✅Como Prevenir -> https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#how-to-prevent \n✅Exemplos de cenários de ataque -> \n✅Referencias -> https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#example-attack-scenarios \n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#list-of-mapped-cwes \n` 
      );

      break;

    case "3":
      bot.sendMessage(
        msg.chat.id,
        `A injeção desliza para a terceira posição. 94% dos aplicativos foram testados para alguma forma de injeção com uma taxa de incidência máxima de 19%, uma taxa de incidência média de 3,37%, e os 33 CWEs mapeados nesta categoria têm o segundo maior número de ocorrências em aplicativos com 274k ocorrências. Cross-site Scripting agora faz parte desta categoria nesta edição.
        \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores -> https://owasp.org/Top10/A03_2021-Injection/#factors \n✅Visão Geral -> https://owasp.org/Top10/A03_2021-Injection/#overview \n✅Descrição -> https://owasp.org/Top10/A03_2021-Injection/#description\n✅Como Prevenir -> https://owasp.org/Top10/A03_2021-Injection/#how-to-prevent \n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A03_2021-Injection/#example-attack-scenarios \n✅Referencias -> https://owasp.org/Top10/A03_2021-Injection/#references \n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A03_2021-Injection/#list-of-mapped-cwes \n` 
      );

      break;

    case "4":
      bot.sendMessage(
        msg.chat.id,
        `Design inseguro é uma nova categoria para 2021, com foco em riscos relacionados a falhas de projeto. Se realmente queremos "ir para a esquerda" como um setor, precisamos de mais modelagem de ameaças, padrões e princípios de design seguros e arquiteturas de referência. Um design inseguro não pode ser corrigido por uma implementação perfeita, pois, por definição, os controles de segurança necessários nunca foram criados para se defender contra ataques específicos.
        \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores -> https://owasp.org/Top10/A04_2021-Insecure_Design/#factors  \n✅Visão Geral -> https://owasp.org/Top10/A04_2021-Insecure_Design/#overview \n✅Descrição -> https://owasp.org/Top10/A04_2021-Insecure_Design/#description \n✅Como Prevenir -> https://owasp.org/Top10/A04_2021-Insecure_Design/#how-to-prevent \n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A04_2021-Insecure_Design/#example-attack-scenarios \n✅Referencias -> https://owasp.org/Top10/A04_2021-Insecure_Design/#references \n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A04_2021-Insecure_Design/#list-of-mapped-cwes\n` 
      );

      break;

    case "5":
      bot.sendMessage(
        msg.chat.id,
        `Configuração incorreta de segurança subiu do 6º lugar na edição anterior; 90% dos aplicativos foram testados para algum tipo de configuração incorreta, com uma taxa de incidência média de 4,5% e mais de 208 mil ocorrências de CWEs mapeadas para essa categoria de risco. Com mais mudanças em software altamente configurável, não é surpreendente ver essa categoria subir. A antiga categoria para Entidades Externas A4:2017-XML (XXE) agora faz parte desta categoria de risco.\nAqui estão alguns links para um estudo mais aprofundado:
        \n✅Fatores -> https://owasp.org/Top10/A05_2021-Security_Misconfiguration/#factors \n✅Visão Geral -> https://owasp.org/Top10/A05_2021-Security_Misconfiguration/#overview \n✅Descrição -> https://owasp.org/Top10/A05_2021-Security_Misconfiguration/#description \n✅Como Prevenir -> https://owasp.org/Top10/A05_2021-Security_Misconfiguration/#how-to-prevent \n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A05_2021-Security_Misconfiguration/#example-attack-scenarios \n✅Referencias -> https://owasp.org/Top10/A05_2021-Security_Misconfiguration/#references \n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A05_2021-Security_Misconfiguration/#list-of-mapped-cwes\n` 
      );

      break;

      case "6":
        bot.sendMessage(
          msg.chat.id,
          `Componentes Vulneráveis ​​e Desatualizados foi anteriormente intitulado Usando Componentes com Vulnerabilidades Conhecidas e é o número 2 na pesquisa da comunidade Top 10, mas também tinha dados suficientes para entrar no Top 10 por meio de análise de dados. Essa categoria subiu do 9º lugar em 2017 e é um problema conhecido que lutamos para testar e avaliar o risco. É a única categoria a não ter nenhuma Vulnerabilidade e Exposições Comuns (CVEs) mapeadas para os CWEs incluídos, portanto, uma exploração padrão e pesos de impacto de 5,0 são considerados em suas pontuações.
          \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores ->  https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/#factors\n✅Visão Geral -> https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/#overview\n✅Descrição -> https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/#description\n✅Como Prevenir -> https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/#how-to-prevent\n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/#example-attack-scenarios\n✅Referências -> https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/#references\n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/#list-of-mapped-cwes\n` 
        );
  
        break;
  
      case "7":
        bot.sendMessage(
          msg.chat.id,
          `As falhas de identificação e autenticação eram anteriormente a autenticação quebrada e está deslizando para baixo da segunda posição e agora inclui CWEs que estão mais relacionados a falhas de identificação. Essa categoria ainda é parte integrante do Top 10, mas a maior disponibilidade de estruturas padronizadas parece estar ajudando.
          \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores ->  https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/#factors\n✅Visão Geral -> https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/#overview\n✅Descrição -> https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/#description\n✅Como Prevenir -> https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/#how-to-prevent\n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/#example-attack-scenarios\n✅Referências -> https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/#references\n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/#list-of-mapped-cwes\n`
        );
  
        break;
  
      case "8":
        bot.sendMessage(
          msg.chat.id,
          `Software and Data Integrity Failures é uma nova categoria para 2021, com foco em fazer suposições relacionadas a atualizações de software, dados críticos e pipelines de CI/CD sem verificar a integridade. Um dos impactos mais ponderados dos dados do Common Vulnerability and Exposures/Common Vulnerability Scoring System (CVE/CVSS) mapeados para os 10 CWEs nesta categoria. A8:2017-A desserialização insegura agora faz parte dessa categoria maior
          \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores ->  https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/#factors\n✅Visão Geral -> https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/#overview\n✅Descrição -> https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/#description\n✅Como Prevenir -> https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/#how-to-prevent\n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/#example-attack-scenarios\n✅Referências -> https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/#references\n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/#list-of-mapped-cwes\n`
        );
   
        break;
  
      case "9":
        bot.sendMessage(
          msg.chat.id,
          `As falhas de registro e monitoramento de segurança eram anteriormente A10:2017-Registro e monitoramento insuficientes e são adicionadas da pesquisa da comunidade Top 10 (nº 3), passando do nº 10 anteriormente. Essa categoria é expandida para incluir mais tipos de falhas, é difícil de testar e não está bem representada nos dados CVE/CVSS. No entanto, falhas nesta categoria podem afetar diretamente a visibilidade, alertas de incidentes e perícia.
          \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores ->  https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/#factors\n✅Visão Geral -> https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/#overview\n✅Descrição -> https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/#description\n✅Como Prevenir -> https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/#how-to-prevent\n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/#example-attack-scenarios\n✅Referências -> https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/#references \n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/#list-of-mapped-cwes\n` 
        );
  
        break;
  
      case "10":
        bot.sendMessage(
          msg.chat.id,
          `Server-Side Request Forgery é adicionado da pesquisa da comunidade Top 10 (#1). Os dados mostram uma taxa de incidência relativamente baixa com cobertura de teste acima da média, juntamente com classificações acima da média para potencial de exploração e impacto. Esta categoria representa o cenário em que os membros da comunidade de segurança estão nos dizendo que isso é importante, embora não esteja ilustrado nos dados neste momento.
          \nAqui estão alguns links para um estudo mais aprofundado:\n✅Fatores ->  https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#factors\n✅Visão Geral -> https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#overview\n✅Descrição -> https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#description\n✅Como Prevenir -> https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#how-to-prevent\n✅Exemplos de cenários de ataque -> https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#example-attack-scenarios\n✅Referências -> https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#references\n✅Lista de CWEs Mapeados -> https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#list-of-mapped-cwes\n` 
        );
  
        break;
  
      case "0":
        bot.sendMessage(msg.chat.id, `Tchau brigado 🙅🙅🏿🙅🏻`);
  
        break;
  
      default:
        bot.sendMessage(
          msg.chat.id,
          `😵‍💫${firstName}, não entendi o que você me disse, digite a palavra "Menu" para ver o Top10 OWASP ou "0" para encerrar a nossa conversa.`
        );
    }
  });
