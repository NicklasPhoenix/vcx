# OAuth Setup Instructions

VCX uses NextAuth with GitHub and Google providers for authentication. Follow these steps to configure OAuth.

## Production URL

- **Production:** https://vcx-dun.vercel.app

---

## GitHub OAuth App Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in the following:

| Field | Value |
|-------|-------|
| Application name | `VCX - VibeCode X-Ray` |
| Homepage URL | `https://vcx-dun.vercel.app` |
| Authorization callback URL | `https://vcx-dun.vercel.app/api/auth/callback/github` |

4. Click **"Register application"**
5. Copy the **Client ID**
6. Click **"Generate a new client secret"**
7. Copy the **Client Secret**

### Update Vercel Environment Variables

In Vercel dashboard, update these environment variables:

```
AUTH_GITHUB_ID=<your-client-id>
AUTH_GITHUB_SECRET=<your-client-secret>
```

---

## Google OAuth Client Setup

### Option A: Reuse Existing CareerCheck OAuth Client (Recommended)

The existing CareerCheck OAuth client can be reused by adding the VCX redirect URI.

1. Go to [Google Cloud Console - Credentials](https://console.cloud.google.com/apis/credentials?project=silver-spark-467721-q6)
2. Find the OAuth 2.0 Client (CareerCheck)
3. Click the edit (pencil) icon
4. Under **"Authorized redirect URIs"**, add:
   ```
   https://vcx-dun.vercel.app/api/auth/callback/google
   ```
5. Click **"Save"**

The Client ID and Secret can be found in the CareerCheck Vercel project environment variables.

### Option B: Create New OAuth Client

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Application type: **Web application**
4. Name: `VCX`
5. Add authorized redirect URI:
   ```
   https://vcx-dun.vercel.app/api/auth/callback/google
   ```
6. Click **"Create"**
7. Copy the Client ID and Client Secret

---

## After Updating Environment Variables

1. Go to [Vercel Dashboard](https://vercel.com/nicklasphoenixs-projects/vcx)
2. Trigger a new deployment (or push a new commit)
3. Test login at https://vcx-dun.vercel.app/login

---

## Current Status

- ✅ Landing page implemented
- ✅ Pricing page implemented
- ⏳ GitHub OAuth: Requires manual setup
- ⏳ Google OAuth: Requires manual setup (or reuse existing)

---

## Troubleshooting

### "Invalid redirect_uri" error

- Ensure the redirect URI in the OAuth app matches exactly:
  - GitHub: `https://vcx-dun.vercel.app/api/auth/callback/github`
  - Google: `https://vcx-dun.vercel.app/api/auth/callback/google`
