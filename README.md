# FunPets Social Network 🐾

**FunPets** es una red social diseñada bajo una arquitectura de microservicios robusta y políglota. 
El sistema integra diferentes frameworks y bases de datos para optimizar la gestión de usuarios, perfiles y contenido multimedia.

---

## 🏗️ Arquitectura del Sistema

El proyecto implementa un patrón de **API Gateway** para centralizar la comunicación entre el cliente y los servicios internos:

1.  **Capa de Presentación (Front-End):** * Desarrollada con **Vue.js** en JavaScript.
    * Se comunica exclusivamente con el Orquestador mediante consultas y mutaciones de GraphQL.

2.  **Orquestador (API Gateway):** * Implementado con **Apollo Server + GraphQL**.
    * Encargado de recibir las peticiones del Front-End y redirigirlas a los microservicios correspondientes.

3.  **Capa de Microservicios (Backend):**
    * **User MS (Django Rest):** Especializado en la autenticación, login y creación de usuarios. Utiliza **PostgreSQL** para garantizar la integridad referencial de las credenciales.
    * **Account MS (Spring Boot):** Gestiona la información del perfil y metadatos de la cuenta. Utiliza **MongoDB** por su flexibilidad para manejar esquemas de perfil variables.
    * **Post MS (Spring Boot):** Administra la creación de publicaciones y comentarios. Utiliza **MongoDB** para soportar el alto volumen de lecturas/escrituras de la red social.

---

## 🚀 Objetivo 

El foco es la construcción del **Componente Web**:
* Implementación de la interfaz de usuario con **Vue.js**.
* Configuración de **Apollo Client** para la sincronización de estado local y remoto.
* Consumo del esquema de datos expuesto por el **Apollo Server**.

---

## 🛠️ Stack Tecnológico

| Componente | Framework / Herramienta | Base de Datos |
| :--- | :--- | :--- |
| **Front-End** | Vue.js | N/A |
| **API Gateway** | Apollo Server (GraphQL) | N/A |
| **User Microservice** | Django Rest Framework | PostgreSQL |
| **Account Microservice** | Spring Boot | MongoDB |
| **Post Microservice** | Spring Boot | MongoDB |

---

## 📋 Requisitos de Instalación

Para levantar el ecosistema completo, se requiere:
* **Node.js** (v18+) para el Front-End y Gateway.
* **Python 3.10+** para el servicio de usuarios.
* **Java JDK 17+** para los servicios de cuentas y posts.
* **Docker & Docker Compose** (opcional, para las bases de datos).

---

## 🔧 Configuración Rápida

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/bi_pensiones_etl_project.git](https://github.com/tu-usuario/bi_pensiones_etl_project.git)
