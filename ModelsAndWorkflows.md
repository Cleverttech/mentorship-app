### 1. **User Model** (`/users`)

Shared base for both mentors and mentees.

```ts
User {
  _id: ObjectId
  role: 'mentor' | 'mentee'
  name: string
  email: string
  passwordHash: string
  profilePicture?: string
  createdAt: Date
  updatedAt: Date
}
```

---

### 2. **Mentor Profile** (`/mentor/profile`)

```ts
MentorProfile {
  userId: ObjectId (ref: User)
  bio: string
  expertise: string[]
  calendarAvailability: [TimeSlot]  // e.g., { day: 'Monday', start: '10:00', end: '12:00' }
  activeMentees: ObjectId[]         // current mentee userIds
  maxMentees: number
  servicesOffered: Service[]
}
```

---

### 3. **Mentee Profile** (`/mentee/profile`)

```ts
MenteeProfile {
  userId: ObjectId (ref: User)
  bio: string
  credits: number
  activeMentor: ObjectId | null
  bookingHistory: Booking[]
}
```

---

### 4. **Booking Model** (`/bookings`)

Used to book mentorship sessions using credits.

```ts
Booking {
  _id: ObjectId
  mentorId: ObjectId (ref: User)
  menteeId: ObjectId (ref: User)
  serviceType: 'session' | 'resume_review' | 'linkedin_review'
  timeSlot: {
    start: Date
    end: Date
  }
  creditsUsed: number
  status: 'pending' | 'accepted' | 'declined' | 'completed' | 'cancelled'
  createdAt: Date
}
```

---

### 5. **Chat Message Model** (`/messages`)

For mentor-mentee conversations (can be expanded to groups later).

```ts
Message {
  _id: ObjectId
  senderId: ObjectId (ref: User)
  receiverId: ObjectId (ref: User)
  content: string
  timestamp: Date
  read: boolean
}
```

> Optional: Create a `Conversation` model to group messages if you want to allow multiple threads or group chats.

```ts
Conversation {
  _id: ObjectId
  participants: ObjectId[] // [mentorId, menteeId]
  lastMessageAt: Date
}
```

---

### 6. **Service Model** (optional reference data)

For managing different types of services and their credit costs.

```ts
Service {
  _id: ObjectId
  name: string // e.g. 'Resume Review'
  description: string
  creditCost: number
}
```

---

### 7. **Article Model** (`/articles`)

```ts
Article {
  _id: ObjectId
  authorId: ObjectId (ref: User)   // Mentor who wrote it
  title: string
  content: string                  // Markdown or HTML
  tags: string[]
  createdAt: Date
  updatedAt: Date
  published: boolean
  isPublic: boolean                // true = visible to all, false = only mentees
  views: number
}
```

---

## 🔁 Flow Example: Mentee Books a Session

1. Mentee browses mentor availability via `/mentor/profile`.
2. Mentee selects a time slot & service.
3. Booking is created in `/bookings`, pending mentor acceptance.
4. On mentor acceptance:

   - Mentee's credits are deducted.
   - Booking marked as `accepted`.

5. A `/messages` conversation is initiated (if not already started).

---

## ✍️ **Mentor Articles – Purpose & Workflow**

### 🧠 Purpose:

- Share insights, guides, or educational content with mentees or the wider community.
- Add credibility to mentors.
- Act as evergreen content for onboarding or topic-based learning.

---

## 🔁 **Article Creation Workflow**

1. **Mentor logs in** and accesses their dashboard.
2. Mentor creates a new article with title, content, and tags.
3. Option to **save as draft** or **publish**.
4. Article appears on:

   - `/mentors/:id/articles` → Mentor’s personal knowledge base.
   - `/articles` → Global feed if `isPublic = true`.

5. Mentees can:

   - View articles based on interest/tags.
   - Bookmark or comment (if feature added later).
   - Use articles as a resource before/after bookings.

---
