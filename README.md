# Monad Discord Auth

This is a Next.js project that integrates Discord authentication using NextAuth for a seamless login experience with Discord credentials.

## Features

- Discord OAuth2 integration with NextAuth.
- Fetching user guild membership and roles from the Monad Discord server.
- Environment-based configuration for secure and flexible deployment.

## Prerequisites

- Node.js 20.x or later
- pnpm

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/monad-discord-auth.git
   ```
2. Navigate to the project directory:
   ```bash
   cd monad-discord-auth
   ```
3. Install dependencies using pnpm (recommended for consistency with the project setup):
   ```bash
   pnpm install
   ```
4. Set up your `.env` file based on the `.env.example` provided in the repository:
   ```plaintext
   AUTH_SECRET=your_auth_secret_here
   NEXTAUTH_URL=http://localhost:3000
   DISCORD_ID=your_discord_id_here
   DISCORD_SECRET=your_discord_secret_here
   MONAD_GUILD_ID=your_MONAD_GUILD_ID_here
   ```
5. Run the development server:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Deploy your Next.js app using Vercel, the creators of Next.js, which provides a simple and effective way to deploy your application with zero configuration.

[Deploy with Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
