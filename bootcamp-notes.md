# Historial bootcamp frontend día a día
---
## Día uno

bitbucket = github. Bitbucket nos da la posibilidad de crear repositorios privados y públicos gratis y github solo los publicos son gratis ya los privados son de costo.

SSH es un protocolo de conexción con un servidor remoto. el key es algo que nos permitirá autenticarnos en el servidor sin tener que estar poniendo la contraseña.
Este esá compuesto por dos partes un key privado y otro público.

Configurar llave ssh para acceder github.
Hacemos el paso uno y dos que encontramos [aquí](https://confluence.atlassian.com/bitbucket/set-up-ssh-for-git-728138079.html)

Preparamos el entorno de desarrollo instalando node.js, atom o sublime como editor de texto, git bash.

**Primer ejercicio:**
SPA con webtask

Una app monolitca es que tiene todo dentro de la misma maquina db, front, back

Lanzar mini app en webtask 
1. instalamos webtaks con npm i -g wt-cli
1. wt -h me da la lista de los comandos que hay disponibles en webtask
1. wt ls me muestra que webtask tengo creadas
1. wt init (pide el correo de usuario de webtask)
1. wt edit no abre el editor visual de webtak
1. para subirlo desde un archivo del pc le damos wt create y el nombre del archivo
> Herramienta ["Typeform"](http://typeform.io/) para hacer formularios súper amigables


## Día dos

**Markdown:** sintaxis básica de formato, para dar formato a texto. Plataformas como github, slack, whatsapp lo soportan.

**Ejemplos markdown:**

# Título

## Subtitulo

**negrita** en alguno basta con un asterisco como whatsapp ejm: *negrita*

__cursiva__ en alguno basta con un asterisco como whatsapp ejm: _cursiva_

listas desordenadas

* Item 1
* Item 2
  *Item 2.1
  *Item 2.2

también con - ejem: - Item 1

Lista ordenas.

	1. Item 1
	1. Item 2

> citas de texto

Primer ejemplo de markdown en editor online de markdown llamado [Dillinger](http://dillinger.io/):

# Mi biografía
Mi nombre es **William Serna** soy de Belllo, Antioquia.

1. Programar
1. Dibujar
1. Fútbol

Esta es mi foto: 
![Foto William Serna](https://avatars0.githubusercontent.com/u/11982017?v=3&s=460)

Este es mi [Github](https://github.com/wsernalaverde)

Herramienta para cargar imágenes random del tamaño que y necesite (https://placeholder.com/)

 
**Comandos bash**

- ls (lista todo lo que hay dentro de la carpeta que estamos)

- ls -l (lista todo pero con detalle de cada uno)

- ls -a (lista hasta con los archivos ocultos)

- cd (sirve para cambiar de directorio) + nombre del directorio. Con tab podemos completar. Cd solo me lleva a la carpeta principal del pc

- pwd (muestra toda la ruta en la que estoy actualmente)

- mkdir (sirve para crear carpetas)

- rm -r + nom carpeta (remove directorio o archivo)

- rm -rf + nom carpeta/archivo (remove directorio o archivo forzado así este siendo ejecutado)

- rm -rf * (borra todo lo que este en la carpeta en la que esté actualmente)

- cp -r nomdirectorio nomdelacopia (copiar un directorio)

- _Nota: para los comando sobre carpetas debo usar el argumento r que significa recursividad. Para los archivos no es necesario._

- mv (sirve para renombrar el archivo o para moverlo a otra carpeta). mv nomarchivo newnombre ó mv nomarchivo rutadest

- touch (crear un archivo) touch nomarchivo+ la extensión

- more (es similar a cat pero este nos da la posibilidad de navegar con las flechitas como scroll)

- echo (para imprimir), esto lo podemos gurdar en un archivo ejm: echo hola index.js. hola me quedaría escrito dentro de un archivo index.js que crea.

- cat  ( abrir el archivo en la terminal )

- ctrl + u ( me borra la línea que haya copiado hasta el momento en la terminal )

**Crear control de versiones en una carpeta** 
Saber estado de [git](https://marklodato.github.io/visual-git-guide/index-en.html). En git hay tres estados el primero los archivos que tengo en mi pc, el segundo es el staying que hay están los archivos que a los que le voy hacer commit y el último es el master

1. inicializamos con git init
1. git status (es para saber el estado de mis archivos me muestra los que están en staying y los que no)
1. luego creamos el archivo .md con touch file.md
1. luego agregamos el archivo al estado staying con git add y nomarchivo
1. luego hacemos commit con git commit -m "comentario del commit"
1. con git log nos muestra el historial de lo que hemos hecho
1. con git checkout puedo navegar entre los commits ejm git checkout y minimo los primero 9 numero del id del commit y luego para devolverme al master con git checkout master.
1. para agregar a staying todos los archivos lo hacemos con git add . y si algún momento borro un archivo para que coja el cambio lo hago con git add -u .


## Día tres

Hoy vamos hacer push en github de la carpeta de control de versiones que tenemos en el pc.

1. primero creamos el repositorio en github, sin la opción de inicializar con readme automaticamente
1. luego conectamos la carpeta donde tenemos los archivos con el repositorio con >git remote add origin2 https://github.com/wsernalaverde/frontend-bootcamp.git. Esta url final es la url que nos da git del repositorio.
1. debemos hacer git add de todos los archivos con >git add .
1. luego hacemos el commit con >git commit -m "comentarios de los cambios"
1. ahora solo no queda hacer push a github con >git push -u orgin master
_Nota:_ si le damos origin solo se conectará a través del protocolo ssh pero si tenemos problemas podemos usar origin2 que usará el protocolo https, lo usamos así >git push -u origin2 master
