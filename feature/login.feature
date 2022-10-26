Funcionalidade: Login

Cenário: Login Success
 Dado que esteja na tela de login     
Quando realizar login com "teste123@gmail.com" e "peniel123@"
Então deverá logar o usúario
 
Cenário: Login Failure
Quando realizar login com "<email>" e "<senha>"
Então deverá ser exibida a "<mensagem>"

Examples:
| email	            | senha	       | mensagem	|
| teste1@gmail.com	| peniel123@	 | Invalid email or password.|
| teste@gmail .com  | 12345        | Invalid email or password. | 
 
