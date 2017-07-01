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
1. ahora solo no queda hacer push a github con >git push -u origin master
_Nota:_ si le damos origin solo se conectará a través del protocolo ssh pero si tenemos problemas podemos usar origin2 que usará el protocolo https, lo usamos así >git push -u origin2 master. El paramatro -u nos sirve para guardar lo que hay después de este es decir origin master para que la próxima vez solo tengamos que hacer git push

**Inciar servidor rápido en python**
Para iniciar un servidor local rapidamente, teniendo instalado Python: `python -m http.server 8000`

Vimos html básico

## Día cuatro

# Html Entities

son los carácteres reservados para la sintaxis de html como <, >, &

Para hacer estos caráctares si lo necesitamos como texto dentro de la página, usamos las QUOTES.

En esta página podemos encontrar una gran cantidad de códigos que para realizar algunos de los carácteres reservados que existen. [aquí](http://ascii.cl/es/codigos-html.htm)


# CSS

**Rules**
- Selector
- Propiedad
- Valor

selector {
	propiedad: valor;
}

Uno puede poner los estilos de tres formas:

1. Con la etiqueta "style" en el head del html. Ejemplo: 
<style>
selector {
	propiedad: valor;
}
</style>
1. Estilos en línea con el atributo style dentro de la etiqueta que se lo vamos aplicar. Ejemplo: <p style="color:black;">texto</p>
1. En un archivo .css donde estarán todos los estilos y los podemos linkear en la diferentes páginas de nuestro sitio con la etiquta link. Ejemplo: <link rel="stylesheet" type="text/css" href="ruta de la imagen">

**Unidades de medidas**

Existen diferentes tipos de medidas como px, em, vh, %.

px: unidad de medida

em: un em es el tamaño de la m de la base del texto relativo a su padre. Por ejemplo si tengo un texto de 14px  y a otro texto le pongo 2em entonces un 1em serían 14px y 2 sería el doble 28px; Si el padre no tiene una medida definida coge la medida por default del navegador.

%: tomará el tamaño del procentaje asignado relativo a su contenedor padre

**Elementos bloques y en línea**

Los elementos en bloque ocupan todo el width de su contenedor padre. Entre dos elementos bloques no se va sumar el margin que tenga cada elemento si no que solo va prevalecer el mayor margen de os dos elementos.
Los elementos en línea ocupan el width de lo que mida su contenido, a estos no se les puede definir un width con esta propiedad, nunca lo va reocnocer. Los margenes solo lo afectan a los lados, no arriba ni abajo.

**Modelo de caja**

En html siempre vamos a diagramar como si tuevieramos un conjunto de cajas, donde cada caja siempre va a tener un contenido, un padding, un border y un margin por todos los costados de la caja.

>[Imágenes creadas a base de un solo div](http://a.singlediv.com/)

**Resetear estilos**

para resetear los estilos que por defecto trae el navegador podemos ponerle el estilo que queramos con el selector *. 
Ejemplo: *{
	margin:0;
	padding:0;
}
o podemos usar librerías para esto como [Normalize.css](https://necolas.github.io/normalize.css/)

Por defecto los elementos están con una propiedad llamada content-box que lo que hace es que va a sumar el tamaño del contenido con los padding y los borders entonces el elemento tendría una tamaño total de la sma de estos. si queremos quitar estos podemos usar la propiedad box-sizing que le dice que no los sume entonces va coger el tamaño que le definamos en el width.

**Selectores**

Los selectores más usados en css son de etiqueta, por clase y por id.

- etiqueta: se llaman por el nombre de la etiqueta html ejm: p{
	propiedad: valor;
}
- clases: se llaman en el archivo css con . más el nombre de la clase y en html se le asigna la clase a la etiqueta html que queramos con el atributo class. ejm:
en el css
 .nombreclase{
	propiedad: valor;
}

en el html
  _<p class="nombreclase">texto</p>_
- id: se llaman en el archivo css con # más el nombre del id y en html se le asigna el id a la etiqueta html que queramos con el atributo id. ejm
en el css
 #nombreid{
   propiedad: valor;
 }
 _<p id="nombreclase">texto</p>_

 >calcular tamaño de un elemento en css lo hago con width:calc(100%-100px)