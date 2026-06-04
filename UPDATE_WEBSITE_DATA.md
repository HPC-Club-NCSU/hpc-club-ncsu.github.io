# Updating Website Data

This guide explains how to update the dynamic content on the HPC Club website. Currently, this includes the Team/Leadership information.

## Team & Leadership Members

All team member data is managed in `src/data/members.ts`. There is no backend; the site reads directly from this file.

### Member Object Structure

Each member follows this TypeScript interface:

```typescript
export interface Member {
  id: string;        // Unique identifier (e.g., 'sarah-chen')
  name: string;      // Full name
  role: string;      // Official title or role in the club
  image: string;     // URL or relative path to the profile picture
  github?: string;   // (Optional) Full URL to GitHub profile
  linkedin?: string; // (Optional) Full URL to LinkedIn profile
}
```

### How to Add or Edit a Member

1. **Open the data file**: Navigate to `src/data/members.ts`.
2. **To Edit**: Locate the person's name in the `members` array and change the desired fields.
3. **To Add**: Add a new object to the `members` array. For example:
   ```typescript
   {
     id: 'new-member-id',
     name: 'Full Name',
     role: 'Position Title',
     image: 'https://images.unsplash.com/...',
     github: 'https://github.com/username',
     linkedin: 'https://linkedin.com/in/username'
   },
   ```

### Image Guidelines

- **Automatic Scaling**: The website uses a square aspect ratio for all team photos. 
- **No Distortion**: Images are automatically cropped and centered (`object-cover`). You don't need to resize them manually, but square-ish source photos work best.
- **Sources**: You can use external URLs or local files from `src/assets/`.

### Social Links

- GitHub and LinkedIn links are **optional**.
- If you leave them out of the object, the corresponding icon will not appear on the member's card.
