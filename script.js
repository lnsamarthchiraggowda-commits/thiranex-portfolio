document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const status = document.querySelector("#form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    if (!name.value.trim() || !email.validity.valid || !message.value.trim()) {
      status.textContent = "Please complete the required fields with valid information.";
      status.focus();
      return;
    }

    status.textContent = "Thanks! Your message has been validated. Connect this form to a backend or form service to receive submissions.";
    status.focus();
    form.reset();
  });
});