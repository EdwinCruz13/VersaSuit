# VersaSuit - Dominio
Bienvenido a la capa de dominio, dicha capa se define la lógica de negocio,
comprendidas en entidades, puertos(entras y salidas), servicios (logica), y ValueObject(reglas de datos);
Dicha capa es átea a la tecnologia a usar.
<br>
Puedes Ver el sitio <a href="#">🔗 aqui</a>

<details open="">
  <summary><h2>🗂️Arquitectura Hexagonal</h2></summary>
<p dir="auto"> 
<b>Conceptos Claves</b>
<br><br>

| Concepto                   | Definición                                                                       |
| -------------------------- | -------------------------------------------------------------------------------- |
| **Dominio**                | Lógica de negocio pura, sin dependencias externas.                               |
| **Puerto (Port)**          | Interfaces que definen cómo interactuar con el dominio desde el exterior.        |
| **Entrada (Inbound Port)** | Cómo el mundo externo usa tu dominio (ej. HTTP, CLI, eventos).                   |
| **Salida (Outbound Port)** | Cómo tu dominio accede al mundo externo (ej. DB, API externa).                   |
| **Servicios**              | Lógica de negocio, que valida que las reglas se cumplan      .                   |
| **ValueObject**            | reglas de tipos de datos, propias en las entidades.                              |

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

- [x] 📁<b>Domain</b> Representa el corazón de la aplicación: reglas, modelos y comportamientos del negocio, importante para la arquitectura hexagonal.
    <br>
    - [x] 📁<b>Entities</b> Clases que representan conceptos clave del negocio.
      <br>
    - [x] 📁<b>Services</b> Lógica de dominio.
      <br>
    - [x] 📁<b>ValueObjects</b> Objetos inmutables con reglas internas de validación.
      <br>
    - [x] 📁<b>Ports</b> Permite conectar el mundo exterior con el dominio a traves de contratos (interfaces).
      <br>
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

