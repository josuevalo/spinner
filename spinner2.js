const spinner = function() {
  let delay = 100;
  let spinny = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|";
  for (const spin of spinny) {
    setTimeout(() => {
      process.stdout.write(`\r${spin}   `);
    }, delay);
    delay = delay + 200;
  }
};
spinner();
