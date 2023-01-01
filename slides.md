---
# try also 'default' to start simple
theme: geist
colorSchema: 'dark'
# background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
# class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
# info: |
#   ## Slidev Starter Template
#   Presentation slides for developers.

#   Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

<br><br><br><br>

# Full-stack typesafety

## <i>Move Fast and Break Nothing</i>
<br><br><br><br><br>
<a href="https://twitter.com/ekaansh" target=_blank>@ekaansh</a>

---
layout: two-cols
preload: false
---

<div style="display: flex; place-items: center;flex-direction:column" v-motion-fade>

# About me

<br>
<img src="/images/me.jpeg" style="width: 45%;border-radius: 50%;"/>

### Ekaansh Arora
<img src="/images/agora-logo.svg" style="width: 15%;"/>
</div>

::right::

<div style="display: flex; place-items: center;flex-direction:column;margin-top:35%" v-motion-fade> 

- Developer Advocate, <a style="color: rgba(221, 221, 221)" href="https://agora.io" target=_blank>Agora​</a>

- JS/TS Nerd

- Maintainer of Agora VideoUIKits

- Maker of 3D art and taylor swift metal covers

<div>

<logos-twitter /> <a href="https://twitter.com/ekaansh" target=_blank>@ekaansh</a>
<span style="margin:10px"></span>
<fa-github /> <a href="https://github.com/ekaansharora" target=_blank>@ekaansharora</a>
</div>

</div>

<!--

# Agenda

<v-clicks>

- How does data flow in your app?
- What is typesafety?
- What we've been using
- What's tRPC?
- What does it look like?
- Demo
- How to get started?
- When to not use?

</v-clicks>
-->
---
preload: false
---
# What does full-stack look like?

<div style="margin-left: 20%" v-motion-fade>

```mermaid

flowchart BT
id1(Database) <-- SQL --> id2(Backend) <-- REST --> id3(Frontend Client)

```
</div>

---

# What is typesafety?
<v-clicks>

#### It's why people like Typescript.
#### The extent to which a programming language discourages or prevents type errors.
#### Compiler red squiggly lines telling you that you're writing a bug
<img src="/images/squiggly.png" width=350>
</v-clicks>

---

# What is fullstack typesafety?

<v-clicks>

#### When you cross a boundary in your stack, do you have access to the previous system's type information?


<div style="margin-left: 20%">

```mermaid

flowchart BT
id1(Database) <-- DBQuery --> id2(Backend) <-- API --> id3(Frontend Client)

```
</div>
</v-clicks>

---

# What is fullstack typesafety?


#### When you cross a boundary in your stack, do you have access to the previous system's type information?


<div style="margin-left: 20%">

```mermaid

flowchart BT
id1(Database) <-- DBQuery --> id2(Backend) <-- API --> id3(Frontend Client)
style id1 stroke:#f00,stroke-width:2px
style id2 stroke:#f00,stroke-width:2px
style id3 stroke:#f00,stroke-width:2px

```
</div>

---

# What is fullstack typesafety?

#### When you cross a boundary in your stack, do you have access to the previous system's type information?

<div style="margin-left: 20%">

```mermaid

flowchart BT
id1(Database) <-- DBQuery --> id2(Backend) <-- API --> id3(Frontend Client)

```
</div>

---
preload: false
---

# What is fullstack typesafety?

#### When you cross a boundary in your stack, do you have access to the previous system's type information?


<div style="margin-left: 20%" v-motion-fade>

```mermaid

flowchart BT
id1(mySQL) <-- SQL --> id2(Node) <-- REST --> id3(React)

```
</div>
---

# What is fullstack typesafety?

#### When you cross a boundary in your stack, do you have access to the previous system's type information?


<div style="margin-left: 20%">

```mermaid

flowchart BT
id1(mySQL) <-- SQL --> id2(Node) <-- REST --> id3(React)
linkStyle 0 stroke:#f00,stroke-width:2px;
```
<img src="/images/dberror.png" style="width: 60%;margin-left: 30%;margin-top: -30%"/>
</div>

---


# What is fullstack typesafety?

#### When you cross a boundary in your stack, do you have access to the previous system's type information?


<div style="margin-left: 20%">

```mermaid

flowchart BT
id1(mySQL) <-- Prisma --> id2(Node) <-- REST --> id3(React)
linkStyle 0 stroke:#0f0,stroke-width:2px;

```
<img src="/images/prisma2.svg" style="width: 50%;margin-top: -45%;margin-left: 35%"/>
</div>

---

# What is fullstack typesafety?

#### When you cross a boundary in your stack, do you have access to the previous system's type information?


<div style="margin-left: 20%">

```mermaid

flowchart BT
id1(mySQL) <-- Prisma --> id2(Node) <-- REST --> id3(React)
linkStyle 0 stroke:#0f0,stroke-width:2px;
linkStyle 1 stroke:#f00,stroke-width:2px;

```
<img src="/images/prisma2.svg" style="width: 50%;margin-top: -45%;margin-left: 35%"/>
<img src="/images/undefined.png" style="width:70%;margin-top: -35%;margin-left: 25%"/>
</div>

---

# What is fullstack typesafety?

#### When you cross a boundary in your stack, do you have access to the previous system's type information?

<div style="margin-left: 20%">

```mermaid

flowchart BT
id1(mySQL) <-- Prisma --> id2(Node) <-- GQL --> id3(React)
linkStyle 0 stroke:#0f0,stroke-width:2px;
linkStyle 1 stroke:#0f0,stroke-width:2px;

```
<div v-click=1 style="margin-left: 30%;margin-top: -30%">

#### but you probably don't need GraphQL
</div>
</div>

---

# What is fullstack typesafety?

#### When you cross a boundary in your stack, do you have access to the previous system's type information?

<div style="margin-left: 20%">

```mermaid


flowchart BT
id1(mySQL) <-- Prisma --> id2(Next) <-- tRPC --> id3(Next)
linkStyle 0 stroke:#0f0,stroke-width:2px;
linkStyle 1 stroke:#0f0,stroke-width:2px;

```
<div v-click=1>
<img src="https://i.giphy.com/media/AgO9VR2a9KW1MSP73I/giphy.webp" style="width: 40%;margin-left: 30%;margin-top: -40%">
</div>
</div>

---
preload: false
---
<div v-motion-fade>

# What's tRPC?

let's look at some code

</div>
---
preload: false
---

# What's tRPC?
<div v-motion-fade>

- Magic glue to communicate between your frontend and backend
- No code generation
- Great autocomplete
- Tiny client side footprint
- Incredilbe DX with TanStack Query, Prisma and Zod

</div>

---

# How do I get started?

<br><br>

<v-clicks>

```ts
npx create-t3-app@latest
```

#### TypeScript, Next.js, tRPC, Prisma & NextAuth

simplifies complex boilerplate around the stack


</v-clicks>
---
preload: false
---
<div v-motion-fade>

# Shoutouts
### [Alex](https://twitter.com/alexdotjs), [Sachin](https://twitter.com/s4chinraja) & the team behind [tRPC](https://github.com/trpc/trpc#core-team)
### [Theo](https://twitter.com/t3dotgg) & the team building [create-t3-app](https://github.com/t3-oss/create-t3-app)

</div>

---

<div style="display:flex;flex-direction: column; align-items: center">
<br>
<br>
<br>
<br>
<br>
<br>

# Thanks for your time!
<br>

<div>
<logos-twitter /> <a href="https://twitter.com/ekaansh" target=_blank>@ekaansh</a>
</div>

</div>
