<script setup>
const contacts = [
  { name: "GitHub", icon: "github", link: "https://github.com/ronkaotw" },
  {
    name: "YouTube",
    icon: "YouTube",
    link: "https://www.youtube.com/playlist?list=PLfj9AELIIYJdFDqpXjyJf_GccS-myHJHv",
  },
  { name: "Email", icon: "mail", link: "mailto:aaronkao88@gmail.com" },
];
</script>

<template>
  <section class="contact container">
    <h2>Contact Me</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.name">
        <a :href="contact.link" target="_blank">
          <i :class="`icon-${contact.icon}`"></i> {{ contact.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
  padding: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
}

a {
  text-decoration: none;
  font-size: 1.2rem;
  color: #0070f3;
}

a:hover {
  text-decoration: underline;
}
</style>
