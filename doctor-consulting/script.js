/**
 * MediConsult - Interactive Medical Booking Platform
 * Production-ready script with interval animations, dynamic filtering,
 * modal workflows, and responsive micro-interactions.
 */

// ==========================================================================
// 1. Data Store
// ==========================================================================

const doctors = [
  {
    id: 1,
    name: 'Dr. Ayesha Khan',
    qualification: 'MBBS, FCPS (Cardiology)',
    specialty: 'Cardiology',
    experience: 12,
    rating: 4.9,
    fee: 3500,
    location: 'Clifton, Karachi',
    image: 'photo-1559839734-2b71ea197ec2',
    online: true,
    slots: ['09:30 AM', '11:00 AM', '02:30 PM', '04:15 PM'],
    bio: 'Supports patients with heart health, prevention, and ongoing cardiovascular care with a calm, practical approach.',
    hours: 'Monday - Friday | 9:00 AM - 4:00 PM'
  },
  {
    id: 2,
    name: 'Dr. Hamza Malik',
    qualification: 'MBBS, MCPS (Dermatology)',
    specialty: 'Dermatology',
    experience: 9,
    rating: 4.8,
    fee: 2500,
    location: 'Gulberg, Lahore',
    image: 'photo-1612349317150-e413f6a5b16d',
    online: true,
    slots: ['10:00 AM', '12:30 PM', '03:15 PM', '04:00 PM'],
    bio: 'Provides thoughtful care for common skin, hair, and nail concerns, with clear guidance on personalized treatment options.',
    hours: 'Monday - Saturday | 10:00 AM - 5:00 PM'
  },
  {
    id: 3,
    name: 'Dr. Zara Siddiqui',
    qualification: 'MBBS, FCPS (Family Medicine)',
    specialty: 'Family Medicine',
    experience: 15,
    rating: 5.0,
    fee: 2000,
    location: 'F-7, Islamabad',
    image: 'photo-1594824476967-48c8b964273f',
    online: true,
    slots: ['09:00 AM', '01:00 PM', '03:30 PM'],
    bio: 'Offers ongoing primary care for adults and families, focusing on prevention, routine health, and continuity of care.',
    hours: 'Monday - Friday | 8:30 AM - 3:30 PM'
  },
  {
    id: 4,
    name: 'Dr. Omar Farooq',
    qualification: 'MBBS, FCPS (Pediatrics)',
    specialty: 'Pediatrics',
    experience: 11,
    rating: 4.9,
    fee: 3000,
    location: 'PECHS, Karachi',
    image: 'photo-1622253692010-333f2da6031d',
    online: false,
    slots: ['10:30 AM', '12:00 PM', '05:00 PM'],
    bio: 'Works with children and caregivers on developmental, preventive, and day-to-day pediatric health needs.',
    hours: 'Monday - Saturday | 9:00 AM - 4:30 PM'
  },
  {
    id: 5,
    name: 'Dr. Mariam Shah',
    qualification: 'MBBS, FCPS (Neurology)',
    specialty: 'Neurology',
    experience: 14,
    rating: 4.9,
    fee: 4000,
    location: 'DHA, Lahore',
    image: 'photo-1551601651-2a8555f1a136',
    online: true,
    slots: ['09:30 AM', '11:30 AM', '03:00 PM'],
    bio: 'Helps patients understand and manage neurological symptoms through careful assessment and coordinated care.',
    hours: 'Monday - Friday | 9:00 AM - 4:00 PM'
  },
  {
    id: 6,
    name: 'Dr. Bilal Ahmed',
    qualification: 'BDS, FCPS (Dentistry)',
    specialty: 'Dentistry',
    experience: 8,
    rating: 4.7,
    fee: 1800,
    location: 'Blue Area, Islamabad',
    image: 'photo-1582750433449-648ed127bb54',
    online: false,
    slots: ['10:00 AM', '01:30 PM', '04:30 PM'],
    bio: 'Provides preventive and restorative dental care, helping patients feel informed and comfortable at each visit.',
    hours: 'Tuesday - Saturday | 10:00 AM - 6:00 PM'
  },
  {
    id: 7,
    name: 'Dr. Sana Raza',
    qualification: 'MBBS, FCPS (Gynecology)',
    specialty: 'Gynecology',
    experience: 13,
    rating: 4.9,
    fee: 3200,
    location: 'Clifton, Karachi',
    image: 'photo-1584515933487-779824d29309',
    online: true,
    slots: ['09:00 AM', '12:00 PM', '02:00 PM'],
    bio: 'Provides respectful women\'s health care, including routine visits, reproductive health, and ongoing support.',
    hours: 'Monday - Friday | 9:00 AM - 3:00 PM'
  },
  {
    id: 8,
    name: 'Dr. Fahad Iqbal',
    qualification: 'MBBS, FCPS (Orthopedics)',
    specialty: 'Orthopedics',
    experience: 10,
    rating: 4.8,
    fee: 2800,
    location: 'Gulberg, Lahore',
    image: 'photo-1622902046580-2b47f47f5471',
    online: true,
    slots: ['11:00 AM', '01:00 PM', '04:00 PM'],
    bio: 'Assesses bone, joint, and muscle concerns and discusses practical next steps for mobility and recovery.',
    hours: 'Monday - Saturday | 10:00 AM - 5:00 PM'
  },
  {
    id: 9,
    name: 'Dr. Noor Hussain',
    qualification: 'MBBS, FCPS (Psychiatry)',
    specialty: 'Psychiatry',
    experience: 7,
    rating: 4.8,
    fee: 3000,
    location: 'F-6, Islamabad',
    image: 'photo-1594824476967-48c8b964273f',
    online: true,
    slots: ['10:00 AM', '12:30 PM', '03:00 PM'],
    bio: 'Creates a supportive space to discuss mental well-being and explore appropriate care and personalized treatment options.',
    hours: 'Monday - Friday | 10:00 AM - 4:00 PM'
  }
];

const specialties = [
  ['fa-heartbeat', 'Cardiology'],
  ['fa-allergies', 'Dermatology'],
  ['fa-brain', 'Neurology'],
  ['fa-baby', 'Pediatrics'],
  ['fa-tooth', 'Dentistry'],
  ['fa-bone', 'Orthopedics'],
  ['fa-user-md', 'Family Medicine'],
  ['fa-venus', 'Gynecology'],
  ['fa-head-side-virus', 'Psychiatry']
];

const quotes = [
  {
    quote: "For the first time, booking a doctor didn't feel like another thing on my to-do list. I found someone I really trust within minutes.",
    name: 'Sana A.',
    date: 'Patient since 2023',
    initials: 'SA',
    rating: '5/5'
  },
  {
    quote: "I could compare specialists, read qualifications, and book a time that actually worked around my family schedule. A wonderfully calm experience.",
    name: 'Hassan R.',
    date: 'Patient since 2024',
    initials: 'HR',
    rating: '5/5'
  },
  {
    quote: "The virtual consultation setup was seamless. The doctor was punctual, thorough, and very reassuring. Highly recommended!",
    name: 'Mariam K.',
    date: 'Patient since 2022',
    initials: 'MK',
    rating: '5/5'
  },
  {
    quote: "Finding a compassionate pediatrician for my child used to take days of calling around. MediConsult made it effortless and stress-free.",
    name: 'Zainab T.',
    date: 'Patient since 2024',
    initials: 'ZT',
    rating: '5/5'
  }
];

const liveActivities = [
  { title: 'Dr. Omar Farooq', desc: 'has 2 appointment slots available today' },
  { title: 'Verified Booking', desc: 'Cardiology consultation booked 4 mins ago in Karachi' },
  { title: 'Dr. Zara Siddiqui', desc: 'Online video consultation slot opened for 3:30 PM' },
  { title: 'New 5-Star Review', desc: 'Dr. Hamza Malik received high patient praise in Dermatology' },
  { title: 'Dr. Mariam Shah', desc: 'Neurology clinic visit available for tomorrow morning' }
];

// ==========================================================================
// 2. Utility & Helper Functions
// ==========================================================================

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

let activeFilter = 'All';
let query = '';
let locationQuery = '';
let currentDoctor = null;
let bookingStep = 0;
let profileReturnFocus = null;

const imageUrl = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=750&q=80`;

const escapeHtml = string => {
  return String(string).replace(/[&<>"']/g, match => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[match]));
};

function toast(message) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 3800);
}

// ==========================================================================
// 3. Specialties Rendering
// ==========================================================================

function renderSpecialties() {
  const grid = $('#specialtyGrid');
  if (!grid) return;

  grid.innerHTML = specialties
    .map(([icon, name]) => `
      <button class="specialty-card ${activeFilter === name ? 'selected' : ''}" data-specialty="${name}" aria-label="Show ${name} doctors">
        <span class="specialty-icon"><i class="fas ${icon}" aria-hidden="true"></i></span>
        <b>${name}</b>
      </button>
    `)
    .join('');

  grid.querySelectorAll('.specialty-card').forEach(card => {
    card.onclick = () => selectFilter(card.dataset.specialty);
  });
}

// ==========================================================================
// 4. Doctors Catalog & Filtering
// ==========================================================================

function getVisibleDoctors() {
  let rows = doctors.filter(doctor => {
    const matchesFilter = activeFilter === 'All' || doctor.specialty === activeFilter;
    const matchesQuery = !query || `${doctor.name} ${doctor.specialty} ${doctor.qualification}`.toLowerCase().includes(query);
    const matchesLocation = !locationQuery || doctor.location.toLowerCase().includes(locationQuery);
    return matchesFilter && matchesQuery && matchesLocation;
  });

  const sortValue = $('#sortSelect') ? $('#sortSelect').value : 'recommended';
  if (sortValue === 'rating') rows.sort((a, b) => b.rating - a.rating);
  if (sortValue === 'price') rows.sort((a, b) => a.fee - b.fee);
  if (sortValue === 'experience') rows.sort((a, b) => b.experience - a.experience);

  return rows;
}

function renderDoctors() {
  const grid = $('#doctorGrid');
  const noResults = $('#noResults');
  const resultCount = $('#resultCount');
  if (!grid) return;

  const rows = getVisibleDoctors();

  grid.innerHTML = rows
    .map(doctor => `
      <article class="doctor-card">
        <div class="doctor-photo">
          <img loading="lazy" src="${imageUrl(doctor.image)}" alt="Portrait of ${doctor.name}">
          <span class="verified"><i class="fas fa-check-circle" aria-hidden="true"></i> VERIFIED</span>
          ${doctor.online ? '<span class="online-tag"><i class="fas fa-video" aria-hidden="true"></i> Online visits</span>' : ''}
        </div>
        <div class="doctor-content">
          <div class="doctor-top">
            <div>
              <h3 class="doctor-name">${doctor.name}</h3>
              <div class="doctor-qual">${doctor.qualification}</div>
            </div>
            <span class="doctor-rating" aria-label="Rating ${doctor.rating} out of 5">
              <i class="fas fa-star" aria-hidden="true"></i> <b>${doctor.rating.toFixed(1)}</b>
            </span>
          </div>
          <div class="doctor-specialty">${doctor.specialty}</div>
          <div class="doctor-meta">
            <span><i class="far fa-clock" aria-hidden="true"></i> ${doctor.experience} yrs exp</span>
            <span><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${doctor.location}</span>
          </div>
          <div class="doctor-bottom">
            <div class="fee">
              <small>Consultation from</small>
              <b>PKR ${doctor.fee.toLocaleString()} <small>/ visit</small></b>
            </div>
            <div class="card-actions">
              <button class="profile-link" data-profile="${doctor.id}" aria-label="View profile for ${doctor.name}" title="View doctor profile">
                <i class="far fa-eye" aria-hidden="true"></i>
              </button>
              <button class="book-card" data-book="${doctor.id}">
                Book now <i class="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </article>
    `)
    .join('');

  if (resultCount) resultCount.textContent = rows.length;
  if (noResults) noResults.hidden = rows.length > 0;
  grid.hidden = rows.length === 0;

  // Re-bind actions
  grid.querySelectorAll('[data-book]').forEach(btn => {
    btn.onclick = () => openBooking(Number(btn.dataset.book));
  });
  grid.querySelectorAll('[data-profile]').forEach(btn => {
    btn.onclick = () => openDoctorProfile(Number(btn.dataset.profile));
  });

  setupScrollMotion();
}

function selectFilter(specialtyName) {
  activeFilter = specialtyName;

  $$('.filter-pill').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.filter === specialtyName);
  });

  $$('.specialty-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.specialty === specialtyName);
  });

  renderDoctors();

  const doctorsSection = $('#doctors');
  if (doctorsSection) {
    doctorsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==========================================================================
// 5. Testimonial Carousel with Auto Interval & Progress Bar
// ==========================================================================

let quoteIndex = 0;
let quoteProgressRaf = null;
let intervalStartTime = null;
const QUOTE_INTERVAL_DURATION = 6000; // 6 seconds per review

function initTestimonialSlider() {
  const dotsContainer = $('#quoteDots');
  const prevBtn = $('#prevQuote');
  const nextBtn = $('#nextQuote');
  const card = $('#testimonialCard');

  // Render navigation dots
  if (dotsContainer) {
    dotsContainer.innerHTML = quotes
      .map((_, i) => `
        <button class="quote-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="View review ${i + 1}"></button>
      `)
      .join('');

    dotsContainer.querySelectorAll('.quote-dot').forEach(dot => {
      dot.onclick = () => {
        setQuote(Number(dot.dataset.index));
        restartQuoteInterval();
      };
    });
  }

  // Previous & Next controls
  if (prevBtn) {
    prevBtn.onclick = () => {
      setQuote((quoteIndex - 1 + quotes.length) % quotes.length);
      restartQuoteInterval();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      setQuote((quoteIndex + 1) % quotes.length);
      restartQuoteInterval();
    };
  }

  // Pause on hover
  if (card) {
    card.addEventListener('mouseenter', pauseQuoteInterval);
    card.addEventListener('mouseleave', resumeQuoteInterval);
  }

  // Initial display & start interval
  displayQuote(quoteIndex);
  startQuoteInterval();
}

function displayQuote(index) {
  const content = $('#testimonialContent');
  const quote = quotes[index];
  if (!quote) return;

  if (content) content.classList.add('is-fading');

  setTimeout(() => {
    if ($('#quoteText')) $('#quoteText').textContent = `"${quote.quote}"`;
    if ($('#quoteName')) $('#quoteName').textContent = quote.name;
    if ($('#quoteDate')) $('#quoteDate').textContent = quote.date;
    if ($('#quoteAvatar')) $('#quoteAvatar').textContent = quote.initials;
    if ($('#quoteCurrent')) $('#quoteCurrent').textContent = String(index + 1).padStart(2, '0');
    if ($('#quoteTotal')) $('#quoteTotal').textContent = String(quotes.length).padStart(2, '0');

    // Update dots
    $$('.quote-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    if (content) content.classList.remove('is-fading');
  }, 180);
}

function setQuote(index) {
  quoteIndex = index;
  displayQuote(quoteIndex);
}

function updateProgressBar(timestamp) {
  if (!intervalStartTime) intervalStartTime = timestamp;
  const elapsed = timestamp - intervalStartTime;
  const progressPercent = Math.min((elapsed / QUOTE_INTERVAL_DURATION) * 100, 100);

  const bar = $('#testimonialProgressBar');
  if (bar) bar.style.width = `${progressPercent}%`;

  if (elapsed < QUOTE_INTERVAL_DURATION) {
    quoteProgressRaf = requestAnimationFrame(updateProgressBar);
  } else {
    // Advance to next testimonial
    quoteIndex = (quoteIndex + 1) % quotes.length;
    displayQuote(quoteIndex);
    restartQuoteInterval();
  }
}

function startQuoteInterval() {
  cancelAnimationFrame(quoteProgressRaf);
  intervalStartTime = null;
  quoteProgressRaf = requestAnimationFrame(updateProgressBar);
}

function pauseQuoteInterval() {
  cancelAnimationFrame(quoteProgressRaf);
}

function resumeQuoteInterval() {
  startQuoteInterval();
}

function restartQuoteInterval() {
  cancelAnimationFrame(quoteProgressRaf);
  const bar = $('#testimonialProgressBar');
  if (bar) bar.style.width = '0%';
  intervalStartTime = null;
  quoteProgressRaf = requestAnimationFrame(updateProgressBar);
}

// ==========================================================================
// 6. Live Activity Notification Pill (Periodic Interval)
// ==========================================================================

let activityIndex = 0;

function initLiveActivity() {
  const badge = $('#liveActivity');
  const closeBtn = $('#closeActivity');
  if (!badge) return;

  if (closeBtn) {
    closeBtn.onclick = () => {
      badge.classList.remove('show');
    };
  }

  // Interval trigger every 14 seconds
  function triggerActivity() {
    const item = liveActivities[activityIndex];
    if ($('#activityTitle')) $('#activityTitle').textContent = item.title;
    if ($('#activityDesc')) $('#activityDesc').textContent = item.desc;

    badge.classList.add('show');

    // Hide after 5 seconds
    setTimeout(() => {
      badge.classList.remove('show');
    }, 5000);

    activityIndex = (activityIndex + 1) % liveActivities.length;
  }

  // First trigger after 4 seconds, then repeat every 14 seconds
  setTimeout(() => {
    triggerActivity();
    setInterval(triggerActivity, 14000);
  }, 4000);
}

// ==========================================================================
// 7. Interactive Doctor Profile Modal
// ==========================================================================

function openDoctorProfile(id) {
  const doctor = doctors.find(d => d.id === id);
  if (!doctor) return;

  currentDoctor = doctor;
  profileReturnFocus = document.activeElement;

  const consultMethods = doctor.online
    ? 'Clinic visits and secure online video consultations'
    : 'Clinic visits only';

  const modalContent = $('#profileContent');
  if (modalContent) {
    modalContent.innerHTML = `
      <div class="profile-cover">
        <img src="${imageUrl(doctor.image)}" alt="Portrait of ${doctor.name}">
        <span class="profile-verified">
          <i class="fas fa-check-circle" aria-hidden="true"></i> Verified Specialist
        </span>
      </div>
      <div class="profile-body">
        <div class="eyebrow">${doctor.specialty.toUpperCase()}</div>
        <h2 id="profileName">${doctor.name}</h2>
        <p class="profile-qualification">${doctor.qualification}</p>

        <div class="profile-highlights">
          <div>
            <i class="fas fa-star" aria-hidden="true"></i>
            <b>${doctor.rating.toFixed(1)} / 5.0</b>
            <small>patient satisfaction</small>
          </div>
          <div>
            <i class="fas fa-user-md" aria-hidden="true"></i>
            <b>${doctor.experience} years</b>
            <small>clinical practice</small>
          </div>
          <div>
            <i class="fas fa-receipt" aria-hidden="true"></i>
            <b>PKR ${doctor.fee.toLocaleString()}</b>
            <small>consultation fee</small>
          </div>
        </div>

        <section class="profile-detail">
          <h3><i class="fas fa-info-circle" aria-hidden="true"></i> About the Doctor</h3>
          <p>${doctor.bio}</p>
        </section>

        <div class="profile-detail-grid">
          <section class="profile-detail">
            <h3><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Clinic Location</h3>
            <p>${doctor.location}</p>
            <small>${doctor.hours}</small>
          </section>
          <section class="profile-detail">
            <h3><i class="fas fa-video" aria-hidden="true"></i> Consultation Types</h3>
            <p>${consultMethods}</p>
            <small>Appointments can be booked instantly through MediConsult.</small>
          </section>
        </div>

        <section class="profile-detail availability-detail">
          <h3><i class="far fa-calendar-alt" aria-hidden="true"></i> Typical Available Slots</h3>
          <div class="profile-slots">
            ${doctor.slots.map(slot => `<span>${slot}</span>`).join('')}
          </div>
          <small>Times may vary depending on clinic schedule.</small>
        </section>

        <div class="profile-actions">
          <button class="button" id="profileBookBtn">
            Book appointment with ${doctor.name.replace('Dr. ', '')} <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
          <span><i class="fas fa-lock" aria-hidden="true"></i> Your health data is strictly private</span>
        </div>

        <p class="profile-demo-note">Verified MediConsult Profile | Professional credentials confirmed.</p>
      </div>
    `;
  }

  const profileModal = $('#profileModal');
  if (profileModal) {
    profileModal.hidden = false;
    document.body.style.overflow = 'hidden';
    const closeBtn = $('.profile-close');
    if (closeBtn) closeBtn.focus();
  }

  const bookBtn = $('#profileBookBtn');
  if (bookBtn) {
    bookBtn.onclick = () => {
      closeDoctorProfile(false);
      openBooking(doctor.id);
    };
  }
}

function closeDoctorProfile(restoreFocus = true) {
  const modal = $('#profileModal');
  if (modal) modal.hidden = true;
  document.body.style.overflow = '';
  if (restoreFocus && profileReturnFocus && profileReturnFocus.isConnected) {
    profileReturnFocus.focus();
  }
}

// ==========================================================================
// 8. Multi-Step Booking Modal
// ==========================================================================

function fillDates() {
  const select = $('#appointmentDate');
  if (!select) return;

  const today = new Date();
  select.innerHTML = '';

  for (let i = 0; i < 8; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() === 0) continue; // Skip Sundays

    const opt = document.createElement('option');
    opt.value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    opt.textContent = d.toLocaleDateString('en-PK', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    select.append(opt);
  }
}

function fillTimes() {
  if (!currentDoctor) return;
  const day = $('#appointmentDate') ? $('#appointmentDate').value : '';
  let bookedSlots = [];

  try {
    const stored = JSON.parse(localStorage.getItem('mediconsultBookings') || '[]');
    bookedSlots = stored
      .filter(b => b.doctorId === currentDoctor.id && b.date === day)
      .map(b => b.time);
  } catch (err) {
    console.error('Error reading bookings:', err);
  }

  const availableSlots = currentDoctor.slots.filter(t => !bookedSlots.includes(t));
  const timeSelect = $('#appointmentTime');

  if (timeSelect) {
    if (availableSlots.length > 0) {
      timeSelect.innerHTML = availableSlots.map(t => `<option value="${t}">${t}</option>`).join('');
      timeSelect.disabled = false;
    } else {
      timeSelect.innerHTML = '<option value="">No slots available this day</option>';
      timeSelect.disabled = true;
    }
  }
}

function setBookingStep(step) {
  bookingStep = step;

  $$('.booking-step').forEach((panel, i) => {
    panel.hidden = i !== step;
  });

  $$('.modal-progress span').forEach((bar, i) => {
    bar.classList.toggle('active', i <= step);
    bar.setAttribute('aria-current', i === step ? 'step' : 'false');
  });

  const captions = [
    'STEP 1 OF 3 | APPOINTMENT DETAILS',
    'STEP 2 OF 3 | PATIENT INFORMATION',
    'STEP 3 OF 3 | REVIEW & CONFIRM'
  ];
  if ($('#bookingStepCaption')) $('#bookingStepCaption').textContent = captions[step] || '';

  if (step === 2) renderBookingReview();
}

function validateBookingStep(step) {
  if (step === 0 && $('#appointmentTime') && $('#appointmentTime').disabled) {
    toast('No slots available for this date. Please choose another day.');
    return false;
  }

  const panel = document.querySelector(`.booking-step[data-step="${step}"]`);
  if (!panel) return true;

  for (const field of panel.querySelectorAll('input, select, textarea')) {
    if (field.disabled) continue;
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }
  return true;
}

function openBooking(id) {
  currentDoctor = doctors.find(d => d.id === id);
  if (!currentDoctor) return;

  const doctorHeader = $('#bookingDoctor');
  if (doctorHeader) {
    doctorHeader.innerHTML = `
      <img src="${imageUrl(currentDoctor.image)}" alt="${currentDoctor.name}">
      <span>
        <b>${currentDoctor.name}</b>
        <small>${currentDoctor.specialty} | Rating: ${currentDoctor.rating.toFixed(1)}</small>
      </span>
    `;
  }

  const totalEl = $('#bookingTotal');
  if (totalEl) {
    totalEl.innerHTML = `
      <span>Consultation fee</span>
      <b>PKR ${currentDoctor.fee.toLocaleString()}</b>
    `;
  }

  const form = $('#bookingForm');
  if (form) form.reset();

  const onlineOption = $('#consultType') ? $('#consultType').querySelector('option[value="Online consultation"]') : null;
  if (onlineOption) onlineOption.disabled = !currentDoctor.online;

  fillDates();
  fillTimes();
  setBookingStep(0);

  const modal = $('#bookingModal');
  if (modal) {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const closeBtn = $('.modal-close');
    if (closeBtn) closeBtn.focus();
  }
}

function closeBooking() {
  const modal = $('#bookingModal');
  if (modal) modal.hidden = true;
  document.body.style.overflow = '';
}

function renderBookingReview() {
  const form = $('#bookingForm');
  if (!form || !currentDoctor) return;

  const fd = new FormData(form);
  const dateSelect = $('#appointmentDate');
  const timeSelect = $('#appointmentTime');
  const reason = String(fd.get('reason') || '').trim();

  const selectedDateText = dateSelect && dateSelect.selectedOptions[0] ? dateSelect.selectedOptions[0].textContent : '';
  const selectedTime = timeSelect ? timeSelect.value : '';

  const reviewCard = $('#bookingReview');
  if (reviewCard) {
    reviewCard.innerHTML = `
      <div>
        <small>SELECTED SPECIALIST</small>
        <b>${currentDoctor.name}</b>
        <span>${currentDoctor.specialty} | ${currentDoctor.qualification}</span>
      </div>
      <div>
        <small>APPOINTMENT DETAILS</small>
        <b>${escapeHtml($('#consultType').value)}</b>
        <span>${escapeHtml(selectedDateText)} | ${escapeHtml(selectedTime)}</span>
      </div>
      <div>
        <small>PATIENT INFORMATION</small>
        <b>${escapeHtml(fd.get('name'))}</b>
        <span>${escapeHtml(fd.get('email'))} | ${escapeHtml(fd.get('phone'))}</span>
      </div>
      ${reason ? `
        <div>
          <small>SYMPTOMS / VISIT NOTE</small>
          <span>${escapeHtml(reason)}</span>
        </div>
      ` : ''}
      <div class="review-fee">
        <span>Payable at clinic / session</span>
        <b>PKR ${currentDoctor.fee.toLocaleString()}</b>
      </div>
    `;
  }
}

// ==========================================================================
// 9. Sticky Header & ScrollSpy Navigation
// ==========================================================================

function initScrollSpy() {
  const navbar = $('#navbar');
  const navLinks = $$('.main-nav .nav-link');
  const sections = $$('main section[id]');

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }

    // ScrollSpy active state
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }
  }, { passive: true });
}

// ==========================================================================
// 10. Scroll Motion & Number Counter
// ==========================================================================

let revealObserver = null;

function setupScrollMotion() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    $$('.reveal, .reveal-stagger').forEach(el => el.classList.add('is-visible'));
    return;
  }

  if (!('IntersectionObserver' in window)) {
    $$('.reveal, .reveal-stagger').forEach(el => el.classList.add('is-visible'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
  }

  $$('.reveal:not(.is-visible), .reveal-stagger:not(.is-visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

function initAnimatedCounters() {
  const statNumbers = $$('.stats strong');

  statNumbers.forEach(el => {
    const text = el.textContent.trim();
    const match = text.match(/^([\d,.]+)(.*)$/);
    if (match) {
      const num = Number(match[1].replace(/,/g, ''));
      el.dataset.count = num;
      el.dataset.suffix = match[2];
      el.textContent = `0${match[2]}`;
    }
  });

  const animate = el => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = target * ease;
      const formatted = Number.isInteger(target)
        ? Math.round(current).toLocaleString()
        : current.toFixed(1);

      el.textContent = formatted + suffix;

      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  };

  if (!('IntersectionObserver' in window)) {
    statNumbers.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          animate(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  statNumbers.forEach(el => observer.observe(el));
}

// ==========================================================================
// 11. Hero Mouse Tilt Interaction
// ==========================================================================

function initHeroTilt() {
  const heroArt = $('.hero-art');
  const supportsMotion = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches;

  if (!heroArt || !supportsMotion) return;

  let rafId = null;

  heroArt.addEventListener('pointermove', event => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      const rect = heroArt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      heroArt.style.setProperty('--photo-x', `${(x * -10).toFixed(1)}px`);
      heroArt.style.setProperty('--photo-y', `${(y * -8).toFixed(1)}px`);
      heroArt.style.setProperty('--sun-x', `${(x * 12).toFixed(1)}px`);
      heroArt.style.setProperty('--sun-y', `${(y * 10).toFixed(1)}px`);

      rafId = null;
    });
  });

  heroArt.addEventListener('pointerleave', () => {
    heroArt.style.setProperty('--photo-x', '0px');
    heroArt.style.setProperty('--photo-y', '0px');
    heroArt.style.setProperty('--sun-x', '0px');
    heroArt.style.setProperty('--sun-y', '0px');
  });
}

// ==========================================================================
// 12. Event Listeners & Bootstrapping
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Render core views
  renderSpecialties();
  renderDoctors();
  initTestimonialSlider();
  initLiveActivity();
  initScrollSpy();
  initAnimatedCounters();
  initHeroTilt();

  // Mark scroll reveal targets
  $$('.stats > div, .section-heading, .how-intro, .testimonial-card, .care-banner, .faq-list, .footer-main').forEach(el => {
    el.classList.add('reveal');
  });
  ['#specialtyGrid', '#doctorGrid', '.steps'].forEach(sel => {
    const el = $(sel);
    if (el) el.classList.add('reveal-stagger');
  });
  setupScrollMotion();

  // Search form submit
  const searchForm = $('#searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      query = ($('#searchInput')?.value || '').trim().toLowerCase();
      locationQuery = ($('#locationInput')?.value || '').trim().toLowerCase();
      activeFilter = 'All';

      $$('.filter-pill, .specialty-card').forEach(btn => btn.classList.remove('selected'));
      const allPill = $('[data-filter="All"]');
      if (allPill) allPill.classList.add('selected');

      renderDoctors();
      $('#doctors')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Filter pills
  const filterPills = $('#filterPills');
  if (filterPills) {
    filterPills.addEventListener('click', e => {
      const btn = e.target.closest('[data-filter]');
      if (btn) selectFilter(btn.dataset.filter);
    });
  }

  // Sort dropdown
  const sortSelect = $('#sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', renderDoctors);
  }

  // Clear search & show all buttons
  const resetSearch = () => {
    if ($('#searchInput')) $('#searchInput').value = '';
    if ($('#locationInput')) $('#locationInput').value = '';
    query = '';
    locationQuery = '';
    selectFilter('All');
  };

  const clearBtn = $('#clearSearch');
  if (clearBtn) clearBtn.onclick = resetSearch;

  const showMoreBtn = $('#showMore');
  if (showMoreBtn) showMoreBtn.onclick = resetSearch;

  const viewAllSpecialtiesBtn = $('#viewAllSpecialties');
  if (viewAllSpecialtiesBtn) {
    viewAllSpecialtiesBtn.onclick = () => selectFilter('All');
  }

  // Date picker slot refresh
  const appDate = $('#appointmentDate');
  if (appDate) {
    appDate.addEventListener('change', fillTimes);
  }

  // Modal close handlers
  const bookingClose = $('.modal-close');
  if (bookingClose) bookingClose.onclick = closeBooking;

  const profileClose = $('.profile-close');
  if (profileClose) profileClose.onclick = () => closeDoctorProfile();

  const bookingModal = $('#bookingModal');
  if (bookingModal) {
    bookingModal.addEventListener('click', e => {
      if (e.target === bookingModal) closeBooking();
    });
  }

  const profileModal = $('#profileModal');
  if (profileModal) {
    profileModal.addEventListener('click', e => {
      if (e.target === profileModal) closeDoctorProfile();
    });
  }

  // Escape key support
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (profileModal && !profileModal.hidden) closeDoctorProfile();
      else if (bookingModal && !bookingModal.hidden) closeBooking();
    }
  });

  // Booking step progression
  $$('.step-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!validateBookingStep(bookingStep)) return;
      setBookingStep(bookingStep + 1);

      const nextInput = document.querySelector(`.booking-step[data-step="${bookingStep}"] input, .booking-step[data-step="${bookingStep}"] select, .booking-step[data-step="${bookingStep}"] button`);
      if (nextInput) nextInput.focus();
    });
  });

  $$('.step-back').forEach(btn => {
    btn.addEventListener('click', () => {
      setBookingStep(Math.max(0, bookingStep - 1));

      const prevInput = document.querySelector(`.booking-step[data-step="${bookingStep}"] input, .booking-step[data-step="${bookingStep}"] select, .booking-step[data-step="${bookingStep}"] button`);
      if (prevInput) prevInput.focus();
    });
  });

  // Booking form submission
  const bookingForm = $('#bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!currentDoctor || bookingStep !== 2) return;

      const fd = new FormData(bookingForm);
      const date = $('#appointmentDate') ? $('#appointmentDate').value : '';
      const time = $('#appointmentTime') ? $('#appointmentTime').value : '';

      let bookings = [];
      try {
        bookings = JSON.parse(localStorage.getItem('mediconsultBookings') || '[]');
      } catch (err) {
        console.error(err);
      }

      // Check slot availability
      const isAlreadyBooked = bookings.some(
        b => b.doctorId === currentDoctor.id && b.date === date && b.time === time
      );

      if (isAlreadyBooked) {
        setBookingStep(0);
        fillTimes();
        toast('That slot was just booked by another patient. Please choose a different time.');
        return;
      }

      const bookingRecord = {
        reference: `MC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        doctorId: currentDoctor.id,
        doctor: currentDoctor.name,
        specialty: currentDoctor.specialty,
        date,
        time,
        type: $('#consultType') ? $('#consultType').value : 'Clinic visit',
        name: fd.get('name'),
        email: fd.get('email'),
        phone: fd.get('phone'),
        reason: fd.get('reason'),
        fee: currentDoctor.fee,
        createdAt: new Date().toISOString()
      };

      bookings.push(bookingRecord);

      try {
        localStorage.setItem('mediconsultBookings', JSON.stringify(bookings));
      } catch (err) {
        console.error('Could not save booking:', err);
      }

      closeBooking();
      bookingForm.reset();
      toast(`Appointment requested! Ref: ${bookingRecord.reference}. Details saved to your browser.`);
    });
  }

  // Mobile navigation drawer toggle
  const menuToggle = $('#menuToggle');
  const mainNav = $('#mainNav');
  if (menuToggle && mainNav) {
    menuToggle.onclick = () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    };

    $$('.main-nav a').forEach(link => {
      link.onclick = () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      };
    });
  }

  // Login button stub
  const loginBtn = $('#loginBtn');
  if (loginBtn) {
    loginBtn.onclick = () => {
      toast('Demo notice: Patient portals and SMS logins are coming soon!');
    };
  }
});
