console.log("import test emailjs");

function sendEmail() {
  // console.log("-send email fn");

  let senderEmail = document.getElementById("email-input").value;
  let senderName = document.getElementById("name-input").value;
  let subject = document.getElementById("category-select").value;
  let messageBody = document.getElementById("message-input").value;

  console.log(senderEmail);
  console.log(senderName);
  console.log(messageBody);

  if (senderEmail !== "" && senderName !== "" && messageBody !== "") {
    Email.send({
      SecureToken: "fc250b0d-038a-4119-87a7-7f6c169bd222 ",
      To: "efrenjr.rodriguez@gmail.com",
      From: "efrenjr.rodriguez@gmail.com",
      Subject: `[${subject}] ${senderName}`,
      Body: `<html><h3>From: ${senderName}</h3><h5>Reply-to: ${senderEmail}</h5><p>${messageBody}</p></html>`,
    }).then((message) => alert(message));
  } else {
    alert("Email Form: All fields are required.");
  }

  // console.log(senderEmail);
  // console.log(senderName);
  // console.log(subject);
  // console.log(messageBody);
}
