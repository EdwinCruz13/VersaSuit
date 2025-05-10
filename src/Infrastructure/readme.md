# VersaSuit - Infraestructura
Bienvenido a la capa de Infraestructura, aca se define la tecnologias a usar,
los adaptadores se acoplaran a los puertos que permite realizar interacciones del sistema.
Totalmente ferviente a la tecnologica a usar como HTTP, Bases de datos, webservice, etc.
En dicha capa se implementará el patron MVC, con EXPRESS, NodeJS, y PrimaORM
<br>
Puedes Ver el sitio <a href="#">🔗 aqui</a>

<details open="">
  <summary><h2>🗂️Arquitectura Hexagonal</h2></summary>
<p dir="auto"> 
<b>Conceptos Claves</b>
<br><br>

| Concepto                   | Definición                                                                       |
| -------------------------- | -------------------------------------------------------------------------------- |
| **Infraestructura**        | Implementacion de interacciones del mundo exterior.                              |
| **Controlador(Entrada)**   | Adaptador que escucha las peticiones del mundo exterior.                         |
| **Repositorio(Salida)**    | Adaptador que envia datos a sistema externos, como DB usando PrismaORM           |
| **Rutas(Entrada)**         | Adaptador que envia datos a sistema externos al controlador                      |

<br><br>
<img src="https://miro.medium.com/v2/resize:fit:1313/1*yR4C1B-YfMh5zqpbHzTyag.png" />    

</p>
</details>


<details open="">
  <summary><h2>🚀 Estructura del proyecto</h2></summary>
<p dir="auto"> 

<b>Backend</b>
<br>
Dentro de este módulo encontras

- [x] 📁<b>Infrastructure</b> Implementa adaptadores concretos en este caso un <b>Servicio Web</b>
    <br>
    - [x] 📁<b>Repositories</b> Adaptadores de salida: acceso a DB, almacenamiento, etc.
      <br>
    - [x] 📁<b>Controllers</b> Recibe todas las solicitudes como puente entre el repositorio y las solicitudes HTTTP.
      <br>
    - [x] 📁<b>Routes</b> Routas HTTP definidas para los controladores
      <br>
    <br><br>
</p>
</details>


<details open="">
  <summary><h2>🤷‍♂️ Resultados</h2></summary>
<p dir="auto"> 
  Ver el proyecto <a href="#">🔗 aquí</a>
  <br>
     
</p>
</details>


<details open="">
  <summary><h2>✨Give some feedbacks</h2></summary>
<p dir="auto">
  This repository is one of some season of courses I am doing, feel as your home reading it, we will learn together, it is ok if you have any question, and do not forget giving me some feedback.
  </br>
  <ul>
    <li><a href="https://github.com/EdwinCruz13/VersaSuit">ERP</a></li>
    <li><a href="https://github.com/EdwinCruz13/LandingPage/">Landing Page</a></li>
    <li><a href="https://github.com/EdwinCruz13/Ucamp-Crud">CRUD - Lista de tareas usando localstoraged y JS</a></li>
    <li><a href="https://github.com/EdwinCruz13/Ucamp-Dashboard/">Dashboard - Consumiendo una API REST</a></li>
    <li><a href="https://github.com/EdwinCruz13/Ucamp-Restaurant">Sistema de Restaurante - Con React</a></li>
    <li><a href="https://github.com/EdwinCruz13/Ucamp-Ecommerce">Comercio electrónico - Web Full Stack</a></li>
    <li><a href="https://github.com/EdwinCruz13/MERN">MERN</a></li>
    <li><a href="#">Mongo</a></li>
    <li><a href="#">Express</a></li>
    <li><a href="#">React</a></li>
    <li><a href="https://github.com/EdwinCruz13/NodeJS-Lesson">NodeJS</a></li>
  </ul>

</p>
</details>

