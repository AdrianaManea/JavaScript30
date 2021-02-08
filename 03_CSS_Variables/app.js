const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  // console.log(this.dataset);
  // console.log(suffix);
  // console.log(this.name);
  // document.documentElement.style.setProperty(`--${this.name}`, this.value);
  // then add the suffix px at the end too
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));