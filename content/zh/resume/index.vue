<script setup>
import { VPTeamMembers } from "vitepress/theme";

const user = {
  avatar: "https://i.meee.com.tw/DUmcSTk.jpg",
  name: "AaronKao",
  title: "後端工程師 | 影片剪輯師",
  links: [
    { icon: "github", link: "https://github.com/ronkaotw" },
    {
      icon: "youtube",
      link: "https://www.youtube.com/playlist?list=PLfj9AELIIYJdFDqpXjyJf_GccS-myHJHv",
    },
  ],
};

const bio =
  "我是一名熱愛技術的後端工程師與影片剪輯師，擁有兩年的後端開發經驗，並致力於打造高效且穩定的系統。我喜歡使用現代技術，如 Node.js 來開發後端服務，同時也熱衷於影片剪輯，創造具吸引力的視覺內容。";

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
    role: "實習生",
    company: "新創公司",
  },
  { year: "2021～2023", role: "創作者剪輯師", company: "YTBR" },
];
</script>

<template>
  <section class="resume container">
    <VPTeamMembers :members="[user]" />

    <div class="info">
      <h2>關於我</h2>
      <p>{{ bio }}</p>

      <h2>技能</h2>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>

      <h2>經驗</h2>
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
