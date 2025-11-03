# 🧩 Functional Breakdown — Equiply Pro

## 🧠 EPIC 1: Authentication & User Management

| User Story                                                                                      | Tasks                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Story 1.1:** As a guest, I can register an account so that I can access Equiply Pro features. | - Create `POST /api/register` endpoint<br>- Validate input fields (name, email, password, role)<br>- Hash passwords using bcrypt<br>- Add error handling for duplicates (409)<br>- Build frontend Register form (Next.js)<br>- Integrate Axios call & success redirect |
| **Story 1.2:** As a registered user, I can log in and access my dashboard securely.             | - Create `POST /api/login` endpoint<br>- Verify credentials and generate JWT<br>- Add session handling<br>- Build frontend Login page<br>- Integrate API call with Axios<br>- Redirect on success                                                                      |
| **Story 1.3:** As a user, I can enable two-factor authentication for extra security.            | - Create `POST /api/verify-otp` endpoint<br>- Integrate OTP library<br>- Add OTP field in login UI<br>- Handle invalid OTP (403)                                                                                                                                       |
| **Story 1.4:** As a user, I can reset my password via email link.                               | - Create `POST /api/reset-password` endpoint<br>- Integrate email service (NodeMailer)<br>- Build Reset Password UI<br>- Handle invalid email (404)                                                                                                                    |

## 🧱 EPIC 2: Admin Controls

| User Story                                                                            | Tasks                                                                                                                                                              |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Story 2.1:** As an admin, I can verify owner credentials and insurance.             | - Create `PATCH /api/verify-owner/:id` endpoint<br>- Implement file/document validation<br>- Admin UI for verification list<br>- Error handling (422 invalid file) |
| **Story 2.2:** As an admin, I can manage user authentication (enable/disable access). | - Create `PATCH /api/users/:id/auth` endpoint<br>- Build admin dashboard user table<br>- Add toggle for user status                                                |
| **Story 2.3:** As an admin, I can hold renter deposits for secure transactions.       | - Create `POST /api/deposit/hold` endpoint<br>- Integrate with payment service (Stripe/PayPal)<br>- Update booking status accordingly                              |

## ⚙️ EPIC 3: Equipment Management

| User Story                                                                                   | Tasks                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Story 3.1:** As a verified owner, I can create equipment listings with details and images. | - Create `POST /api/listings` endpoint<br>- Design listing schema (MongoDB)<br>- Build Add Listing form (title, description, category, location, photos)<br>- Integrate media upload (Cloudinary/S3)<br>- Show success notification |
| **Story 3.2:** As an owner, I can edit or delete my listings.                                | - Create `PATCH / DELETE /api/listings/:id` endpoints<br>- Add Edit/Delete buttons in dashboard<br>- Handle unauthorized access (403)                                                                                               |
| **Story 3.3:** As an owner, I can upload and update photos/specifications for listings.      | - Add `POST /api/listings/:id/media` endpoint<br>- Validate file types and sizes<br>- Update listing media gallery                                                                                                                  |

## 💳 EPIC 4: Booking & Rental Flow

| User Story                                                               | Tasks                                                                                                                                                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Story 4.1:** As a renter, I can search and filter available equipment. | - Create `GET /api/listings?filter=...` endpoint<br>- Add filters (category, location, date)<br>- Build frontend search bar & results grid<br>- Handle no results (204) |
| **Story 4.2:** As a renter, I can book equipment and pay a deposit.      | - Create `POST /api/bookings` endpoint<br>- Integrate payment API<br>- Build booking UI & calendar<br>- Update booking status on success/failure                        |
| **Story 4.3:** As an owner, I can verify and mark returned items.        | - Create `PATCH /api/bookings/:id/return` endpoint<br>- Add “Mark as Returned” button<br>- Update booking status and release deposit                                    |

## 💬 EPIC 5: Communication & Disputes

| User Story                                                                          | Tasks                                                                                                                                                    |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Story 5.1:** As a user, I can send messages to other users related to my booking. | - Create `POST /api/messages` endpoint<br>- Add chat model (sender, receiver, bookingId)<br>- Build messaging UI<br>- Restrict unauthorized access (403) |
| **Story 5.2:** As a user, I can raise disputes for issues during rentals.           | - Create `POST /api/disputes` endpoint<br>- Add Dispute model<br>- Build frontend dispute form<br>- Validate details before submission                   |

## 📊 EPIC 6: Dashboard & Profile Management

| User Story                                                                                     | Tasks                                                                                                                                  |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Story 6.1:** As a user, I can view my dashboard showing my listings, bookings, and messages. | - Create `GET /api/dashboard` endpoint<br>- Build dashboard summary UI<br>- Integrate with backend data<br>- Handle token expiry (401) |
| **Story 6.2:** As a user, I can view profiles and uploaded documents.                          | - Create `GET /api/users/:id` endpoint<br>- Display profile and document links<br>- Handle profile not found (404)                     |

## 🎨 EPIC 7: UI/UX & Frontend System

| User Story                                                                                                 | Tasks                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Story 7.1:** As a visitor, I can browse and understand the platform easily via a responsive, branded UI. | - Build hero section (search inputs)<br>- Create category tabs & featured listings<br>- Add testimonials & “How It Works” steps<br>- Apply Tailwind theme colors (#FF8C42, #E66A32, etc.) |
| **Story 7.2:** As a user, I can interact with an accessible, mobile-friendly UI.                           | - Implement responsive grids & navigation<br>- Add hover/active states for feedback<br>- Ensure WCAG accessibility compliance                                                             |
| **Story 7.3:** As a team, we can reuse components easily across pages.                                     | - Build modular components (HeaderNav, HeroSearch, ListingCard, Footer)<br>- Setup component folder structure<br>- Follow naming conventions                                              |
