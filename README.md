<p align="center">
  <img alt="Mono Repo" width="120" title="Mono Repo" src=".github/icon.png" />
</p>

<h1 align="center">Supabase POC</h1>

<p align="center">
  <a href="#-techs">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=8257E5&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

<br>

## 🚀 Techs

Used technologies in this project.

- [Typescript](https://www.typescriptlang.org/)
- [Supabase](https://app.supabase.io/)
- [Node](https://nodejs.org/en/)

## 💻 Project

This project is a POC to verify Supabase database functionalities like **(On demand and Real time)**.

How to use this project:

- First you need to have a account in [Supabase](https://app.supabase.io/)
- Create a "devs" table in Supabase with another columns (Create records too)
- Clone this repository
- Execute yarn or npm install
- Create .env file and configure the variables

Envs:
- SUPABASE_URL=https://[URL KEY].supabase.co
- SUPABASE_KEY=yourprojectkey
- SUPABASE_REALTIME=wss://[URL KEY].supabase.co/realtime/v1

- Execute yarn dev or npm run dev (It's show all devs and will listening "devs" events like INSERT, UPDATE and DELETE)

This infos you can get in Supabase settings.


## 📝 License

Used license MIT.

---

By Roberto Umbelino 👽
