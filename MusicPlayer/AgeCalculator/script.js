function calculateAge() {
  // Get input values
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  // Create a new Date object for the current date
  const today = new Date();

  // Create a new Date object for the input date of birth
  const birthDate = new Date(year, month - 1, day);

  // Check if the date of birth is valid
  if (isNaN(birthDate.getTime())) {
      document.getElementById("result").innerText = "Invalid Date of Birth!";
      return;
  }

  // Calculate age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Adjust if the month/day is in the future
  if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
  }

  // Display the result
  document.getElementById("result").innerText = 
      `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
