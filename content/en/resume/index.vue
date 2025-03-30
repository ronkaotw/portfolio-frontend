<script setup>
import { VPTeamMembers } from "vitepress/theme";

const user = {
  avatar: "https://i.meee.com.tw/DUmcSTk.jpg",
  name: "AaronKao",
  title: "Backend Developer | Video Editor",
  links: [
    { icon: "github", link: "https://github.com/ronkaotw" },
    {
      icon: "youtube",
      link: "https://www.youtube.com/playlist?list=PLfj9AELIIYJdFDqpXjyJf_GccS-myHJHv",
    },
  ],
};

const bio =
  "I am an engineer and film editor who loves technology. I have two years of efficient development experience and am committed to building a stable system. I enjoy developing front-end services using modern technologies such as Node.js, and am also passionate about video editing to create engaging visual content.";

const skills = [
  "Express",
  "PostgresSQL",
  "MongoDB",
  "Adobe Premiere",
  "Adobe Photoshop",
];

const experiences = [
  {
    year: "2019～2023 ",
    role: "Intern",
    company: "Startup",
  },
  { year: "2021～2023", role: "YTBR Video Editor", company: "YTBR" },
];
</script>

<template>
  <section class="resume container">
    <VPTeamMembers :members="[user]" />

    <div class="info">
      <h2>About Me</h2>
      <p>{{ bio }}</p>

      <h2>Skill</h2>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>

      <h2>Experiences</h2>
      <ul>
        <li v-for="exp in experiences" :key="exp.year">
          <strong>{{ exp.year }}</strong> - {{ exp.role }}｜{{ exp.company }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.info {
  max-width: 600px;
  margin-top: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}
</style>
