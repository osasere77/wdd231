const params =
new URLSearchParams(
window.location.search
);

const results =
document.querySelector("#results");

results.innerHTML = `

<p>
<strong>Name:</strong>
${params.get("fullname")}
</p>

<p>
<strong>Email:</strong>
${params.get("email")}
</p>

<p>
<strong>Message:</strong>
${params.get("message")}
</p>

`;