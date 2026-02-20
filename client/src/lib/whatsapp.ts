const WHATSAPP_NUMBER = "2349037877197";

export function openWhatsApp(message: string) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
}

export function buildContactMessage(data: { firstName: string; lastName: string; email: string; subject: string; message: string }) {
  return `Hello Covenant Care Foundation!

*General Contact Message*

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}`;
}

export function buildPrayerRequestMessage(data: { name: string; email: string; requestType: string; description: string; isUrgent: string }) {
  const urgentTag = data.isUrgent === "true" ? " [URGENT]" : "";
  return `Hello Covenant Care Foundation!

*Prayer Request${urgentTag}*

Name: ${data.name}
Email: ${data.email}
Prayer Type: ${data.requestType}

Prayer Request:
${data.description}`;
}

export function buildVolunteerMessage(data: { firstName: string; lastName: string; email: string; phone: string; interests: string; availability: string; experience?: string | null }) {
  let msg = `Hello Covenant Care Foundation!

*Volunteer Registration*

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Area of Interest: ${data.interests}
Availability: ${data.availability}`;

  if (data.experience) {
    msg += `\nPrevious Experience: ${data.experience}`;
  }

  return msg;
}

export function getWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
