import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailjs.config';

type RSVPData = {
  guestName: string;
  attending: boolean;
  mealPreference?: string;
  arrivalDate?: string;
  dietaryRestrictions?: string;
  email?: string;
};

export const sendRsvpEmail = async (rsvpData: RSVPData, guestEmail?: string) => {
  try {
    // Format the email content
    const templateParams = {
      to_email: EMAILJS_CONFIG.COUPLE_EMAIL,
      guest_name: rsvpData.guestName,
      meal_preference: rsvpData.mealPreference || 'Not specified',
      arrival_date: rsvpData.arrivalDate || 'Not specified',
      dietary_restrictions: rsvpData.dietaryRestrictions || 'None',
      guest_email: guestEmail || 'Not provided',
      submission_date: new Date().toLocaleDateString(),
    };

    // Send email to the couple
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID || '',
      templateParams,
      EMAILJS_CONFIG.USER_ID
    );

// Send confirmation to guest if they provided email
    if (guestEmail) {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        import.meta.env.VITE_EMAILJS_GUEST_CONFIRMATION_TEMPLATE_ID || '',
        {
          to_email: guestEmail,
          guest_name: rsvpData.guestName,
          wedding_date: 'Saturday, June 7, 2025',
          wedding_location: 'Domaine de Baulieu, Marseille',
        },
        EMAILJS_CONFIG.USER_ID
      );
    }

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
