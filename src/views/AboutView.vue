<template>
  <div class="rules">
    <h1 class="title">The Devil's plan</h1>
    <p>
      If you haven't watch the corean TV show <span>The devil's plan</span>, you are going to
      experience one of it's game here.
    </p>
    <h2 class="title">The rules</h2>
    <p>There is 2 phases during this game:</p>
    <h3>- Discovery phase</h3>
    <p class="rules-description">
      This is where you get certain amount of time to try to memorize as many numbers and its
      location as you can. When the time is up, you get to the Guessing phase.
    </p>
    <h3>- Guessing phase</h3>
    <p class="rules-description">
      This is now the time to show what you have memorize.
      <span>Be aware of the combination rules</span>
    </p>
    <div class="combinations">
      <h3>- Combination rules</h3>
      <p class="rules-description">
        Combinations are a set of 3 selected box (The hexagons with letters in it)
      </p>
      <p class="rules-description">
        Combinations set are valid only if shape a straight line <br />
        <span>eg: ABC or BEI are valid but DHM is not</span>
      </p>
      <p class="rules-description">
        You cannot enter a combination twice, this would lead to a lost point
      </p>
    </div>
    <h3>- The points</h3>
    <p class="rules-description">
      Very simple, a valid combination is plus 1 point, any other cases is minus 1 point.
    </p>
    <p>You now now everything, I wish you good luck! 😈</p>
  </div>
</template>

<style scoped>
.title {
  color: #b84141;
}
.rules {
  margin-top: 20px;
  font-size: larger;
}
.rules-description {
  border-left: 3px solid #9e9e9e;
  padding-left: 14px;
  margin-left: 14px;
  margin: 14px;
}
.combinations {
  border: 2px solid #b84141;
  border-radius: 5px;
  padding: 5px;
}
h1 {
  width: 400px;
  text-wrap: nowrap;
}
h3 {
  text-decoration: underline;
  color: #b84141;
}
span {
  background-color: rgba(200, 200, 200, 0.1);
  transition: 0.2s ease-in-out;
}

span:hover {
  background-color: rgba(200, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
}
</style>
