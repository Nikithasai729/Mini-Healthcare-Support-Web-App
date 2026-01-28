function submitPatient() {
    let name = document.getElementById("pname").value;
    let issue = document.getElementById("issue").value;

    if(name && issue) {
        document.getElementById("patientMsg").innerText =
        "✅ Request Submitted! Our team will contact you.";
    } else {
        document.getElementById("patientMsg").innerText =
        "❌ Please fill all fields.";
    }
}

function submitVolunteer() {
    let name = document.getElementById("vname").value;
    let skills = document.getElementById("skills").value;

    if(name && skills) {
        document.getElementById("volunteerMsg").innerText =
        "🙏 Thank you for registering as a volunteer!";
    } else {
        document.getElementById("volunteerMsg").innerText =
        "❌ Please fill all fields.";
    }
}

function chatBot() {
    let input = document.getElementById("chatInput").value.toLowerCase();
    let reply = "Sorry, I don't understand. Please contact support.";

    if(input.includes("help")) {
        reply = "We provide basic medical guidance and support.";
    } else if(input.includes("volunteer")) {
        reply = "You can volunteer by filling the volunteer form.";
    } else if(input.includes("free")) {
        reply = "Yes, this service is completely free.";
    }

    document.getElementById("chatReply").innerText = reply;
}
