const flights = [
  {id:'SK101', airline:'SkyBook Air', from:'Chennai', to:'Bengaluru', depart:'08:15', arrive:'09:20', economy:2450, business:6200, seats:18},
  {id:'SK205', airline:'BlueSky Airlines', from:'Chennai', to:'Mumbai', depart:'10:40', arrive:'12:35', economy:4800, business:11200, seats:12},
  {id:'SK310', airline:'Aero India', from:'Bengaluru', to:'Delhi', depart:'13:10', arrive:'16:00', economy:5900, business:14500, seats:9},
  {id:'SK422', airline:'SkyBook Air', from:'Mumbai', to:'Delhi', depart:'17:30', arrive:'19:40', economy:3900, business:9700, seats:15},
  {id:'SK506', airline:'Aero India', from:'Hyderabad', to:'Kochi', depart:'07:00', arrive:'08:35', economy:3200, business:7800, seats:7},
  {id:'SK611', airline:'BlueSky Airlines', from:'Delhi', to:'Chennai', depart:'20:00', arrive:'23:00', economy:6100, business:15200, seats:11},
  {id:'SK720', airline:'SkyBook Air', from:'Chennai', to:'Hyderabad', depart:'15:25', arrive:'16:40', economy:2800, business:7100, seats:10},
  {id:'SK833', airline:'Aero India', from:'Bengaluru', to:'Kochi', depart:'11:10', arrive:'12:15', economy:2100, business:5900, seats:14}
];
const $ = id => document.getElementById(id);
let currentResults = [];
let toastTimer;
const today = new Date();
$('date').min = new Date(today.getTime() - today.getTimezoneOffset()*60000).toISOString().slice(0,10);

function getBookings(){ try{return JSON.parse(localStorage.getItem('skybookBookings') || '[]')}catch{return []} }
function saveBookings(data){localStorage.setItem('skybookBookings',JSON.stringify(data))}
function money(value){return '₹'+Number(value).toLocaleString('en-IN')}
function notify(message){const t=$('toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),3000)}
function searchFlights(event){
  event?.preventDefault();
  const from=$('from').value,to=$('to').value,date=$('date').value,travelClass=$('travelClass').value;
  if(from===to){notify('Origin and destination must be different.');return}
  currentResults=flights.filter(f=>f.from===from&&f.to===to&&f.seats>0);
  const root=$('flightResults');
  if(!currentResults.length){root.innerHTML='<div class="empty-state">No sample flights found for this route. Try Chennai, Bengaluru, Mumbai, Delhi, Hyderabad, or Kochi.</div>';return}
  root.innerHTML=currentResults.map(f=>`<article class="flight-card"><div class="flight-airline">${f.airline}<small>${f.id} · ${f.seats} demo seats available</small></div><div class="route"><div><strong>${f.depart}</strong><small>${f.from}</small></div><span class="line"></span><div><strong>${f.arrive}</strong><small>${f.to}</small></div></div><div class="price">${money(f[travelClass.toLowerCase()])}<small>${travelClass} · one way</small><button class="button primary" onclick="openBooking('${f.id}')">Book flight</button></div></article>`).join('');
}
function openBooking(id){const f=flights.find(item=>item.id===id);if(!f)return;$('selectedFlightId').value=id;$('selectedFlightInfo').textContent=`${f.id}: ${f.from} → ${f.to} · ${$('date').value} · ${$('travelClass').value} · ${money(f[$('travelClass').value.toLowerCase()])}`;$('bookingDialog').showModal()}
$('searchForm').addEventListener('submit',searchFlights);
$('closeDialog').addEventListener('click',()=>$('bookingDialog').close());
$('bookingForm').addEventListener('submit',event=>{
  event.preventDefault();const f=flights.find(item=>item.id===$('selectedFlightId').value);if(!f)return;
  if(f.seats<1){notify('Sorry, no demo seats remain on this flight.');$('bookingDialog').close();return}
  const travelClass=$('travelClass').value;
  const booking={id:'SB'+Date.now().toString().slice(-7),flightId:f.id,airline:f.airline,from:f.from,to:f.to,date:$('date').value,depart:f.depart,arrive:f.arrive,travelClass,price:f[travelClass.toLowerCase()],name:$('passengerName').value.trim(),email:$('passengerEmail').value.trim(),phone:$('passengerPhone').value.trim(),seat:$('seatPreference').value,status:'Confirmed',createdAt:new Date().toISOString()};
  if(!booking.name||!booking.email||!booking.phone){notify('Please complete all passenger details.');return}
  f.seats--;const bookings=getBookings();bookings.unshift(booking);saveBookings(bookings);$('bookingDialog').close();$('bookingForm').reset();renderBookings();notify('Demo booking confirmed! Ticket ID: '+booking.id);$('mytickets').scrollIntoView({behavior:'smooth'});
});
function cancelBooking(id){const bookings=getBookings();const booking=bookings.find(b=>b.id===id);if(!booking||booking.status==='Cancelled')return;if(!confirm('Cancel ticket '+id+'?'))return;booking.status='Cancelled';saveBookings(bookings);const f=flights.find(item=>item.id===booking.flightId);if(f)f.seats++;renderBookings();notify('Ticket cancelled in this browser.')}
function printTicket(id){const b=getBookings().find(x=>x.id===id);if(!b)return;const w=window.open('','_blank','width=700,height=650');if(!w){notify('Allow pop-ups to print your ticket.');return}w.document.write(`<!DOCTYPE html><html><head><title>Ticket ${b.id}</title><style>body{font:16px Arial;padding:40px;color:#17253a}h1{color:#2864e8}.ticket{border:2px dashed #9db6df;border-radius:14px;padding:25px}p{padding:8px 0;border-bottom:1px solid #eee}</style></head><body><div class="ticket"><h1>✈ SkyBook E-Ticket</h1><h2>${b.from} → ${b.to}</h2><p><b>Ticket ID:</b> ${b.id}</p><p><b>Passenger:</b> ${escapeHtml(b.name)}</p><p><b>Flight:</b> ${b.airline} (${b.flightId})</p><p><b>Date:</b> ${b.date}</p><p><b>Departure / Arrival:</b> ${b.depart} / ${b.arrive}</p><p><b>Class:</b> ${b.travelClass}</p><p><b>Seat preference:</b> ${b.seat}</p><p><b>Amount (demo):</b> ${money(b.price)}</p><p><b>Status:</b> ${b.status}</p><small>This is a student project demo ticket, not a valid airline ticket.</small></div><script>window.onload=()=>window.print()<\/script></body></html>`);w.document.close()}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderBookings(){const bookings=getBookings();const list=$('ticketList');if(!bookings.length){list.innerHTML='<div class="empty-state">No tickets yet. Search for a flight and book your first trip.</div>'}else{list.innerHTML=bookings.map(b=>`<article class="ticket-card"><div class="ticket-main"><div><div class="ticket-id">${b.id}</div><h3>${escapeHtml(b.from)} → ${escapeHtml(b.to)}</h3><p>${escapeHtml(b.name)} · ${b.date} · ${b.flightId} · ${money(b.price)}</p><p>${escapeHtml(b.email)} · ${escapeHtml(b.travelClass)} class</p></div></div><div class="ticket-actions"><span class="status ${b.status==='Cancelled'?'cancelled':''}">${b.status}</span><button class="small-button" onclick="printTicket('${b.id}')">Print ticket</button>${b.status!=='Cancelled'?`<button class="cancel-button" onclick="cancelBooking('${b.id}')">Cancel</button>`:''}</div></article>`).join('')}
$('totalBookings').textContent=bookings.length;$('activeBookings').textContent=bookings.filter(b=>b.status==='Confirmed').length;$('cancelledBookings').textContent=bookings.filter(b=>b.status==='Cancelled').length;
$('adminRows').innerHTML=bookings.length?bookings.map(b=>`<tr><td>${b.id}</td><td>${escapeHtml(b.name)}</td><td>${escapeHtml(b.from)} → ${escapeHtml(b.to)}</td><td>${b.date}</td><td><span class="status ${b.status==='Cancelled'?'cancelled':''}">${b.status}</span></td></tr>`).join(''):'<tr><td colspan="5" class="empty">No bookings yet.</td></tr>';
}
renderBookings();
