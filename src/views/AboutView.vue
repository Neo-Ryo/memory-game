<template>
  <div class="about">
    <h1>The Devil's plan</h1>
    <p>
      If you haven't watch the corean TV show <span>The devil's plan</span>, you are going to
      experience one of it's game here
    </p>
  </div>
</template>

<style>
h1 {
  width: 400px;
  text-wrap: nowrap;
}
span {
  background-color: rgba(200, 200, 200, 0.1);
  transition: 0.2s ease-in-out;
}

span:hover {
  background-color: rgba(200, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
}
@media (min-width: 1424px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
