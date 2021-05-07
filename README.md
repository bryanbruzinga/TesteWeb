<h1>Scripts para WebScrapping e tratamento de dados</h1>

<h2>Index.js</h2>

<p>Esse script executa uma ação de scrapping ao site <a href="http://www.ans.gov.br">http://www.ans.gov.br</a>, vasculhando pelo documento "Padrão TISS" mais atualizado, ao encontrá-lo, o mesmo realiza o download do arquivo .pdf no diretório local do usuário.</p>

<p>Esse script só funciona para esse site em específico, porém se quiser aplicar a outro, terá de alterar os dados a serem buscados.</p>

<h2>Como funciona?</h2>

<p>É minha primeira vez mexendo com back-end, mas basicamente funciona por meio de 3 funções asíncronas em que cada uma corresponde a uma etapa do scrapping.</p>
<p>A função <i>getWebsiteLinks</i> é responsável por puxar os links do site alvo, dessa forma retornando os mesmos em um array chamado <i>linkList</i> que será enviado para a função <i>moveToNextPage</i>.</p>
<p>A função <i>moveToNextPage</i> é responsável por pegar o link desejado da lista, acessá-lo e então retornar novamente os links desse site acessado, nesse caso, retornando um link em específico salvo em <i>directLink</i>, agora esse link será enviado para a função <i>downloadFile</i>.</p>

<p>A função <i>downloadFile</i> é o fim do processo criando um elemento de saída (componente_organizacional.pdf) que é o resultado do download pelo link recebido da função anterior, nessa função foi necessário adicionar um encoding ao url através da função nativa <code>encodeURI()</code>, visto que o link continha caracteres UTF-8. </p>

<h2>Tecnologias utilizadas</h2>
<ul>
    <li>NodeJs</li>
    <li>Axios</li>
    <li>Cherrio</li>
</ul>

<h2>Como executar</h2>

<p>Inicialmente precisamos do Nodejs instalado na máquina, após isso pode clonar esse repositório com <code>git clone https://github.com/bryanbruzinga/TesteWeb.git</code></p>
<p>Após clonado, execute <code>npm install</code>, dessa forma puxará as extensões utilizadas. </p>
<p>E finalmente execute <code>node index.js</code>.</p>
