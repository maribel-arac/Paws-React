# # Paws

Es terrible estar en la situación de que tu mascota salió corriendo despavorido de la casa porque tu hermanito dejó la puerta abierta o que sea muy tardado encontrar quien puede adoptar a  _Firulais._

## ¿Cómo surgió Paws?

Al notar que cada vez, hay una gran cantidad de personas que cuentan con mascotas y al momento de que se les extravían o verse en la necesidad de darlas en adopción :( , nos dimos cuenta de que existen varios grupos de rescate y/o adopción de mascotas en Facebook que los usuarios utilizan para pedir ayuda por medio de una publicación y finalmente ver si alguien la encuentra y poder seguir siendo felices a su lado.

## Resolviendo la problemática

Por lo que se vió la necesidad de encuestar a 60 dueños de mascotas ([Resultados encuestas](https://docs.google.com/forms/d/1SJRiXrmyt43-qs4E3k32E9OCF9ME8akMhWEBjxdOPjQ/edit#responses)) donde los usuarios expresaron que en dichos grupos:

-   _"La información se pierde ya que es demasiada."_
-   _"No están actualizados por lo que no sabes si la mascota sigue perdida."_
-   _"Algunas publicaciones no son de la temática."_

Lo cual estas y una gran variedad de respuestas ayudaron a idear así como crear  **Paws,**  una red social que se enfoca exclusivamente para publicar si tu mascota esta extraviada y/o necesites difundir alguna que se encuentra en adopción y así elegir quien será el mejor adoptante.

## Elementos básicos y funcionalidad

_**Paws**_  cuenta con una página de bienvenida donde se puede iniciar sesión de dos maneras:

1.  Registrarse con un email válido.
2.  Iniciar directamente la sesión.

Al registrarse, se le envía un correo al usuario -el cual utilizó previamente- para autentificar la cuenta para que después pueda entrar a la página y poder realizar la publicación que desee o simplemente navegar.

Una vez iniciando sesión, la red social cuenta con un muro donde se visualizan 2 opciones en la barra de navegación de la página y así el usuario decide que necesita.

1.  **Home:**  _muro de bienvenida_
2.  **Lost:**  _puedes publicar tu mascota perdida y/o conocer cuales son otras que se encuentran en la misma situación_

Cabe mencionar que al hacer una publicación en cualquiera de las secciones de  **Lost**  o  **Adoption**, se puede filtrar para que lo vean tus  _amigos_  (sólo tus contactos lo verán) o  _público_  (cualquier usuario de Paws).

En el lado superior izquierdo, se encuentra un menú desplegable con las opciones de  _Mi perfil_  y  _Cerrar Sesión._

## Principales funcionalidades del producto

Esto es posible ya que si tu mascota se encuentra extraviada solo se debe de llenar un pequeño formulario que se debe llenar con lo siguiente:


-   _Foto_
-   _Nombre_
-   _Visto por última vez_
-   _Descripción_  (raza, talla)
-   _Señas particulares_
-   _Si traía collar o ropa_
-   _Contacto_  (nombre & número).


Y todo esto fue gracias a que los usuarios mencionaron que esa información es la más relevante conocer. Así que todas las publicaciones tendrán el mismo formato ayudando a que todas cuenten con uniformidad.

## Tests de usabilidad

En una primera iteración, se les mostró a los usuarios como luciría  **Paws**, donde varios comentaron que los colores (naranja, azul marino, verde y mostaza) eran muy serios y por eso daba la impresión que era sobre "comida", por lo que se decidió cambiarlos y agregar una imagen de huellitas de fondo dando el toque cursi que los usuarios solicitaron.

También se modificó el muro de bienvenida ya que en un principio contaba con 5 botones (_mascotas extraviadas, mascotas en adopción, reencuentros_, por mencionar algunos) y visualmente no eran atractivos y/o resultaban confusos para los usuarios así que se resumieron los botones en 4 iconos siendo estos mas amigables e intuitivos.

# Historias de usuario

## Pantalla de inicio y crear cuenta

El usuario puede visualizar una pantalla de inicio para conocer la temática de la página, iniciar sesión y/o crear una cuenta.

### DOD

-   Header con nombre y título
-   Botón de registro funcionando
-   Botón de iniciar sesión funcionando
-   Se autentifica el correo del usuario para después poder iniciar sesión
-   La contraseña es privada
-   Descripción de la página incluida
-   Footer agregado
-   Prototipo de alta fidelidad terminado

## Muro, hacer publicaciones , editarlas y/o borrarlas

### [](https://github.com/NathaliCo/GDL002-social-network#dod-1)DOD

-   Aparece el muro después de iniciar sesión
-   Se guarda el correo del usuario en la base de datos (Firebase)
-   Los mensajes de error aparecen en español
-   El usuario puede publicar un post
-   El usuario puede publicar para amigos o público
-   Se puede editar y eliminar un formulario
-   Se le da like a las publicaciones de adopción
-   Se puede cerrar sesión
-   Se agregan imágenes
-   Confirma si en realidad quieres borrar una publicación

# Diseño de la interfaz

## Prototipo de baja fidelidad


## Prototipo alta fidelidad

En el siguiente enlace, se puede encontrar el diseño y el flujo de  _**Paws**_.  [Figma diseño](https://www.figma.com/file/bkR9sXI0Yz8MD3vj7xdkuXpu/pet-patrol?node-id=0%3A1) Paws
