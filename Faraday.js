/*Esta pegando o id do elemento H1 no html e armazenando na var app*/
var app = document.getElementById('app');
/*criando o typewritter para depois inserir texto*/
var typewriter = new Typewriter(app, {
    loop: true
});
/*inserindo o texto, definindo uma pausa, deletando, inserindo um novo texto, nova pausa e iniciando*/
typewriter.typeString('Seja bem vindo(a) a Faraday')
    .pauseFor(4500)
    .deleteAll() 
    .typeString('Soluções energéticas')
    .pauseFor(2500)
    .start();

/*Esta pegando o id do elemento H1 no html e armazenando na var appp*/
var appp = document.getElementById('appp');
/*criando o typewritter para depois inserir texto*/
var typewriter = new Typewriter(appp, {
    loop: true
});
/* definindo uma pausa,inserindo o texto, pausa novamente, deleta um numero x de caracteres, 
inserindo um novo texto, nova pausa e iniciando*/
typewriter.pauseFor(2500)
    .typeString('Energia Eólica')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('Solar')
    .pauseFor(2500)
    .start();