// Life OS configuration for https://robinsonramos96-rer.github.io/Life-OS-v2/
// Everything here is public by design. NEVER put the service_role key, a Stripe secret key, or any password here.
// supabaseUrl and anonKey are empty for now, so the app runs "this device only": each phone keeps its own data.
// To share one household between phones: fill these two in from Supabase (FAMILY-SETUP.md step 1.4) and commit.
window.LIFEOS_CONFIG = {
  supabaseUrl: '',
  anonKey: '',
  siteUrl: 'https://robinsonramos96-rer.github.io/Life-OS-v2',
  inboxAddress: '',
  turnstileSiteKey: '',
  googleClientId: '',
  priceMonthly: '$8 a month',
  priceYearly: '$72 a year',
};
