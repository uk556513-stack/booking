export const ACTIVITIES = {
  kayak: { key: 'kayak', title: 'Kayaking', price: 3299, duration: '4hrs', place: 'Drina, Serbia', emoji: '🛶' },
  camp:  { key: 'camp',  title: 'Camping',  price: 2499, duration: '8hrs', place: 'Tara, Serbia',  emoji: '⛺' },
};

export const inr = (n) => '₹' + n.toLocaleString('en-IN');
export const fmtDate = (iso) => iso.split('-').reverse().join('-');
export const toISO = (d) =>
  new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
