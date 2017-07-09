# Exercici
Hauríeu d'implementar, com a mínim, tres de les funcionalitats fàcils. Com més funcionalitats feu, millor serà per vosaltres i més us podré ajudar avaluant-vos el codi. 
Les funcionalitats difícils suposen un nou repte i son una mica més "realistes" quan us toqui programar sols una aplicació en node i angular. Haureu de pensar una mica més com fer les coses i potser fer servir alguna llibreria nova. 
Teniu fins diumenge per enviar-me el link al vostre repositori. Si agafeu aquest repositori com a inici del projecte, millor feu-me una pull request.

## Funcionalitats
Aquestes son les funcionalitats que podeu escollir. Si teniu dubtes, envieu-me un mail i us donaré pistes de com fer-ho. Fixeu-vos que hi ha funcionalitats que depenen entre elles.

### Fàcils
- Crear un model nou (movie o character) amb les seves pantalles de list i formularis de crear/editar (com el que hem fet amb quote). OK
- Editar el formulari de quotes per a tenir en compte el model nou. OK
- Posar validacions i missatges d'error al formulari de login. OK
- Implementar el logout. OK
- Fer pantalla i formulari de sign in.

### Mitjanes
- Enviar un email de benvinguda al fer sign in (per practicar amb la llibreria nodemailer).
- Fer una pantalla "buscar" on vagin sortint els resultats a mesura que es va escrivint. Seria interessant que el filtratge es fes al servidor, no a l'aplicació angular i que es busqués per tots els camps.
- Fer 2 rols d'usuari (admin i client). Els que fan sign in seran clients i els admins els seedejarem.
- Fer un nou camp "imatge" per al character i fer pujar imatges/mostrar-les a l'aplicació d'angular.
- Remember me al login que faci que la cookie caduqui o no en una setmana.

### Difícils
- Fer la funcionalitat "confirmar email" al fer sign in (enviar un email amb un token, al fer get a la url a aquell token i validar que el token es correcte, posar una variable isConfirmed a true al model user).
- Restringir la edició i creació de categories als que no son admins.
- Restringir la edició de tot allò que no ha creat l'usuari.
- Que l'usuari tingui la pantalla "perfil" on pot veure i editar la seva info personal i password i totes les quotes, characters i movies que hagi enviat.
- Fer un apartat "joc" on surtin un conjunt de quotes i el client hagi de triar de quin character es entre 3 opcions. Al final que li surti quantes n'ha fet bé.
